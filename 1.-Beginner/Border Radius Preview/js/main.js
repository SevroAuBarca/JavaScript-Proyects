const box = [
  document.getElementById("topLeft"),
  document.getElementById("topRight"),
  document.getElementById("bottomLeft"),
  document.getElementById("bottomRight"),
];
const radius = document.getElementById("box");
const button = document.querySelectorAll(".button");
const text = document.getElementById("text");
const root = document.documentElement;
let etiqueta = "";
button[0].addEventListener("click", () => {
  text.innerHTML = "";
  const data = [box[0].value, box[1].value, box[2].value, box[3].value];

  for (let index = 0; index < data.length; index++) {
    if (data[index] === "") data[index] = "0";
    root.style.setProperty(
      "--radio-" + (index + 1) + "",
      "" + data[index] + "px"
    );
  }

  etiqueta =
    "border-radius: " +
    data[0] +
    "px " +
    data[1] +
    "px " +
    data[2] +
    "px " +
    data[3] +
    "px;";

  text.innerHTML = etiqueta;
});

button[1].addEventListener("click", () => {
  let content = document.getElementById("text").innerHTML;

  navigator.clipboard
    .writeText(content)
    .then(() => {
      alert("clipboard saved");
    })
    .catch((err) => {
      alert("clipboard error");
    });
});
