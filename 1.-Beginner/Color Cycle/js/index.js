const btn = document.getElementById("btn");
const root = document.documentElement;
const cambiarColor = (color) => {
  color.map((color, index) => {
    root.style.setProperty("--color" + (index + 1) + "", "" + color + "");
  });
};

btn.addEventListener("click", () => {
  const colors = document.querySelectorAll(".form-color");
  const arrColor = [];
  colors.forEach((color) => arrColor.push(color.value));

  cambiarColor(arrColor);
});
