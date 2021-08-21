const binario = document.getElementById("binario");
const convertir = document.getElementById("convertir");
const texto = document.getElementById("texto");

const valuesBinaries = {
  0: 128,
  1: 64,
  2: 32,
  3: 16,
  4: 8,
  5: 4,
  6: 2,
  7: 1,
};

convertir.addEventListener("click", () => {
  bin = binario.value.toString();
  let arr = [0, 0, 0, 0, 0, 0, 0, 0];
  let res = 0;
  if (verificar(bin)) {
    if (bin.length < 8) {
      ln = arr.length - bin.length;
      arr.length = ln;
      const arrTrunc = arr.join("").concat(bin);
      res = conversion(arrTrunc);
      texto.innerHTML = res;
    } else if (bin.length === 8) {
      res = conversion(bin);
      texto.innerHTML = res;
    } else {
      texto.innerHTML = "Dato mayor a 8 digitos";
    }
  } else {
    texto.innerHTML = "Error, ingresa un numero entre 0 y 1";
  }
});

const conversion = (arrBinarie) => {
  let sumBinarie = 0;
  for (let i = 0; i < arrBinarie.toString().length; i++) {
    if (arrBinarie.toString()[i] === "1") {
      sumBinarie += valuesBinaries[i];
    }
  }
  return sumBinarie;
};

const verificar = (binario) => {
  const ver = binario.split("");
  let verifica = ver.filter((x) => x > 1);
  return verifica[0] > 1 ? false : true;
};
