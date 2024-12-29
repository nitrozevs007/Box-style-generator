
const shadowHorizontal = document.getElementById("shadow-horozontal");
const shadowVertical = document.getElementById("shadow-vertical");
const shadowBlur = document.getElementById("shadow-blur");
const shadowSpread = document.getElementById("shadow-spread");
const shadowColor = document.getElementById("shadow-color");

const box = document.getElementById("box");
const valueCss = document.getElementById("value-css");


function updateBoxShadow() {

  const horizontal = `${shadowHorizontal.value}px`;
  const vertical = `${shadowVertical.value}px`;
  const blur = `${shadowBlur.value}px`;
  const spread = `${shadowSpread.value}px`;
  const color = shadowColor.value;


  const boxShadow = `${horizontal} ${vertical} ${blur} ${spread} ${color}`;
  box.style.boxShadow = boxShadow;

  const cssCode = `box-shadow: ${boxShadow}; `;

  valueCss.textContent = cssCode.trim();
}


[shadowHorizontal, shadowVertical, shadowBlur, shadowSpread, shadowColor].forEach(input => {
  input.addEventListener("input", updateBoxShadow);
});

updateBoxShadow();





function createSnowflakes() {
  const container = document.getElementById('snow-container');
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.textContent = '❄'; // You can use a snowflake emoji or a custom character

  // Randomize starting position
  const side = Math.random() > 0.5 ? 'left' : 'right'; // Choose random side (left or right)
  if (side === 'left') {
      snowflake.style.left = Math.random() * 50 + 'vw'; // Start from left side
      snowflake.style.setProperty('--fall-x', Math.random() * 50 + 'vw'); // Fall to the right
  } else {
      snowflake.style.right = Math.random() * 50 + 'vw'; // Start from right side
      snowflake.style.setProperty('--fall-x', '-' + Math.random() * 50 + 'vw'); // Fall to the left
  }

  // Randomize animation duration and size
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Between 2-5 seconds
  snowflake.style.fontSize = Math.random() * 20 + 10 + 'px'; // Between 10-30px

  container.appendChild(snowflake);

  setTimeout(() => {
      snowflake.remove();
  }, 5000); // Remove snowflake after 5 seconds
}

// Create snowflakes periodically
setInterval(createSnowflakes, 100); // Create snowflakes every 100ms
