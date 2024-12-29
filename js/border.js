
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
