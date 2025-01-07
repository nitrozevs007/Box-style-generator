
const borderWeight = document.getElementById("border-weight");
const borderRadius = document.getElementById("border-radius");
const borderColor = document.getElementById("border-color");

const box = document.getElementById("box");
const valueCss = document.getElementById("value-css");


function updateStyles() {

  const border = `${borderWeight.value}px solid ${borderColor.value}`;
  const borderRadiusValue = `${borderRadius.value}%`;

  box.style.border = border;
  box.style.borderRadius = borderRadiusValue;

  // CSS kodni hosil qilish
  const cssCode = `border: ${border};
  border-radius: ${borderRadiusValue}; `;


  valueCss.textContent = cssCode.trim();
}

// Eventlarni qo'shish
[borderWeight, borderRadius, borderColor].forEach(input => {
  input.addEventListener("input", updateStyles);
});


updateStyles();


function createSnowflakes() {
  const container = document.getElementById('snow-container');
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.textContent = '❄'; // You can use a snowflake emoji or a custom character

  // Randomize starting position
  const side = Math.random() > 0.5 ? 'left' : 'right'; // Choose random side (left or right)
  if (side === 'left') {
      snowflake.style.left = Math.random() * 100 + 'vw'; // Start from left side
      snowflake.style.setProperty('--fall-x', Math.random() * 50 + 'vw'); // Fall to the right
  } else {
      snowflake.style.right = Math.random() * 100 + 'vw'; // Start from right side
      snowflake.style.setProperty('--fall-x', '-' + Math.random() * 50 + 'vw'); // Fall to the left
  }

  // Randomize animation duration and size
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Between 2-5 seconds
  snowflake.style.fontSize = Math.random() * 5 + 10 + 'px'; // Between 10-30px

  container.appendChild(snowflake);

  setTimeout(() => {
      snowflake.remove();
  }, 5000); // Remove snowflake after 5 seconds
}

// Create snowflakes periodically
setInterval(createSnowflakes, 50); // Create snowflakes every 100ms





