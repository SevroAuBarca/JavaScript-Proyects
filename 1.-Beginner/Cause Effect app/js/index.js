const formularios = [
  document.getElementById("nombre"),
  document.getElementById("calle"),
  document.getElementById("ciudad"),
  document.getElementById("estado"),
  document.getElementById("pais"),
  document.getElementById("telefono"),
  document.getElementById("cumpleaños"),
];
const button = document.getElementById("button");

const personas = [];

button.addEventListener("click", (e) => {
  personas.push({
    name: formularios[0].value,
    street: formularios[1].value,
    city: formularios[2].value,
    state: formularios[3].value,
    country: formularios[4].value,
    telephone: formularios[5].value,
    birthday: formularios[6].value,
  });

  const lista = document.getElementById("ul");
  lista.innerHTML = "";
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < personas.length; i++) {
    const itemList = document.createElement("LI");
    itemList.classList.add("list");
    itemList.textContent = personas[i].name;
    fragment.appendChild(itemList);
  }
  lista.appendChild(fragment);

  unordered();
});

const mostrar = (index) => {
  const lista = document.getElementById("Ulist");
  lista.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const persona = personas[index];

  for (const person in persona) {
    const itemList = document.createElement("LI");
    itemList.textContent = person + ": " + persona[person];
    fragment.appendChild(itemList);
  }
  lista.appendChild(fragment);
};

const unordered = () => {
  const nombres = document.getElementById("ul");
  const datos = [...nombres.children];
  console.log(datos);
  datos.forEach((dato, index) => {
    dato.addEventListener("mouseenter", (e) => {
      e.target.classList.add("newList");
    });

    dato.addEventListener("mouseleave", (e) => {
      e.target.classList.remove("newList");
    });

    dato.addEventListener("click", () => {
      mostrar(index);
    });
  });
};
