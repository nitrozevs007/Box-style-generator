
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
