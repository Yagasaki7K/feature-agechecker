function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var resultado = document.getElementById("resultado");

  if (fano.value.lenght == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      gênero = "HOMEM";
      if (idade >= 0 && idade < 10) {
        //CRIANÇA
        img.setAttribute("src", "img/foto-bebe-m.png");
      } else if (idade < 21) {
        //JOVEM
        img.setAttribute("src", "img/foto-jovem-m.png");
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute("src", "img/foto-adulto-m.png");
      } else {
        //IDOSO
        img.setAttribute("src", "img/foto-idoso-m.png");
      }
    } else if (fsex[1].checked) {
      gênero = "MULHER";
      if (idade >= 0 && idade < 10) {
        //CRIANÇA
        img.setAttribute("src", "img/foto-bebe-f.png");
      } else if (idade < 21) {
        //JOVEM
        img.setAttribute("src", "img/foto-jovem-f.png");
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute("src", "img/foto-adulto-f.png");
      } else {
        //IDOSO
        img.setAttribute("src", "img/foto-idoso-f.png");
      }
    }
    resultado.style.textAlign = "center";
    resultado.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`;
    resultado.appendChild(img);
  }
}
