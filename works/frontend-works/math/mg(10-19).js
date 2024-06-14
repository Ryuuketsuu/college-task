function displayElement(id) {
  let content = document.getElementById(id);
  if (content.style.display == "none") content.style.display = "block";
  else content.style.display = "none";
}

function calculateTen() {
  var aSideNum = parseInt(document.getElementById('aSide1').value);
  var bSideNum = parseInt(document.getElementById('bSide1').value);
  var cSideNum = parseInt(document.getElementById('cSide1').value);
  if(isNaN(aSideNum)) aSideNum = 0;
  if(isNaN(bSideNum)) bSideNum = 0;
  if(isNaN(cSideNum)) cSideNum = 0;

  var P = aSideNum + bSideNum + cSideNum;
  var p = P / 2;
  var s = Math.sqrt(p * (p-aSideNum) * (p-bSideNum) * (p-cSideNum));
  if(isNaN(s)) s = 0;

  document.getElementById('answerTen').value = s.toFixed(2), P.toFixed(2);
  document.getElementById('answerTen').innerHTML = `
  <p>Периметр: ${P.toFixed(2)} cm</p>
  <p>Площадь: ${s.toFixed(2)} cm<sup>2</sup></p>
  `;
}

function calculateEleven() {
  var radius = parseInt(document.getElementById('radius').value);
  var height = parseInt(document.getElementById('height').value);
  if(isNaN(radius)) radius = 0;
  if(isNaN(height)) height = 0;

  var s = Math.PI * radius ** 2;
  var v = s * height;

  document.getElementById('answerEleven').value = s.toFixed(2), v.toFixed(2);
  document.getElementById('answerEleven').innerHTML = `
  <p>Площадь: ${s.toFixed(2)} cm<sup>2</sup></p>
  <p>Объем: ${v.toFixed(2)} cm<sup>3</sup></p>
  `;
}

function calculateTwelve() {
  var aSideNum = parseInt(document.getElementById('aSide2').value);
  var bSideNum = parseInt(document.getElementById('bSide2').value);
  var cSideNum = parseInt(document.getElementById('cSide2').value);
  if(isNaN(aSideNum)) aSideNum = 0;
  if(isNaN(bSideNum)) bSideNum = 0;
  if(isNaN(cSideNum)) cSideNum = 0;

  var v = aSideNum * bSideNum * cSideNum;
  var s = aSideNum * bSideNum;

  document.getElementById('answerTwelve').value = s.toFixed(2), v.toFixed(2);
  document.getElementById('answerTwelve').innerHTML = `
  <p>Площадь: ${s.toFixed(2)} cm<sup>2</sup></p>
  <p>Объем: ${v.toFixed(2)} cm<sup>3</sup></p>
  `;
}

function calculateThirteen() {
  var radius = parseInt(document.getElementById('radius1').value);
  var height = parseInt(document.getElementById('height1').value);
  if(isNaN(radius)) radius = 0;
  if(isNaN(height)) height = 0;

  var s = Math.PI * radius ** 2;
  var v = s * height / 3;

  document.getElementById('answerThirteen').value = s.toFixed(2), v.toFixed(2);
  document.getElementById('answerThirteen').innerHTML = `
  <p>Площадь: ${s.toFixed(2)} cm<sup>2</sup></p>
  <p>Объем: ${v.toFixed(2)} cm<sup>3</sup></p>
  `;
}

function calculateFourteen() {
  var aSideNum = parseInt(document.getElementById('aSide3').value);
  var bSideNum = parseInt(document.getElementById('bSide3').value);
  if(isNaN(aSideNum)) aSideNum = 0;
  if(isNaN(bSideNum)) bSideNum = 0;

  var c = Math.sqrt(aSideNum ** 2 + bSideNum ** 2);
  var s = aSideNum * bSideNum / 2;

  document.getElementById('answerFourteen').value = s.toFixed(2), c.toFixed(2);
  document.getElementById('answerFourteen').innerHTML = `
  <p>Гипотенуза: ${c.toFixed(2)} cm</p>
  <p>Площадь: ${s.toFixed(2)} cm<sup>2</sup></p>
  `;
}

function calculateFifteen() {
  var aSideNum = parseInt(document.getElementById('aSide4').value);
  var bSideNum = parseInt(document.getElementById('bSide4').value);
  var angle = parseInt(document.getElementById('angle4').value);
  if(isNaN(aSideNum)) aSideNum = 0;
  if(isNaN(bSideNum)) bSideNum = 0;
  if(isNaN(angle)) angle = 0;

  var h = ((bSideNum - aSideNum) / 2) * Math.tan(angle);
  var s = ((bSideNum + aSideNum) / 2) * h;

  document.getElementById('answerFifteen').value = h.toFixed(2), s.toFixed(2);
  document.getElementById('answerFifteen').innerHTML = `
  <p>Высота: ${h.toFixed(2)} cm<sup>2</sup></p>
  <p>Площадь: ${s.toFixed(2)} cm<sup>3</sup></p>
  `;
}

function calculateSixteen() {
  var radius = parseInt(document.getElementById('radius2').value);
  if(isNaN(radius)) radius = 0;

  var s = 4 * Math.PI * radius ** 3;
  var v = (4 / 3) * Math.PI * radius ** 3

  document.getElementById('answerSixteen').value = s.toFixed(2), v.toFixed(2);
  document.getElementById('answerSixteen').innerHTML = `
  <p>Площадь: ${s.toFixed(2)} cm<sup>2</sup></p>
  <p>Объем: ${v.toFixed(2)} cm<sup>3</sup></p>
  `;
}

function calculateSeventeen() {
  var v0 = parseInt(document.getElementById('startSpeed').value);
  var time = parseInt(document.getElementById('time1').value);
  var boost = parseInt(document.getElementById('boost1').value);
  if(isNaN(v0)) v0 = 0;
  if(isNaN(time)) time = 0;
  if(isNaN(boost)) boost = 0;

  var v = v0 + boost * time;
  var s = v0 * time + ((boost * time ** 2) / 2);

  document.getElementById('answerSeventeen').value = s.toFixed(2), v.toFixed(2);
  document.getElementById('answerSeventeen').innerHTML = `
  <p>Путь: ${s.toFixed(2)} cm<sup>2</sup></p>
  <p>Скорость в конце пути: ${v.toFixed(2)} cm<sup>3</sup></p>
  `;
}

function calculateEighteen() {
  var aSide = parseInt(document.getElementById('aSide5').value);
  var bSide = parseInt(document.getElementById('bSide5').value);
  var cSide = parseInt(document.getElementById('cSide5').value);
  if(isNaN(aSide)) aSide = 0;
  if(isNaN(bSide)) bSide = 0;
  if(isNaN(cSide)) cSide = 0;

  var p = (aSide + bSide + cSide) / 2;
  var r = Math.sqrt(((p - aSide) * (p - bSide) * (p - cSide)) / p);
  if(isNaN(r)) r = 0;

  document.getElementById('answerEighteen').value = r.toFixed(2), p.toFixed(2);
  document.getElementById('answerEighteen').innerHTML = `
  <p>Радиус: ${r.toFixed(2)} cm<sup>2</sup></p>
  <p>Пол периметра: ${p.toFixed(2)} cm</p>
  `;
}

function calculateNineteen() {
  var bodyMass = parseInt(document.getElementById('mass').value);
  var speed = parseInt(document.getElementById('speed').value);
  if(isNaN(bodyMass)) bodyMass = 0;
  if(isNaN(speed)) speed = 0;

  var Ek = (bodyMass * speed ** 2) / 2;

  document.getElementById('answerNineteen').value = Ek.toFixed(2);
  document.getElementById('answerNineteen').innerHTML = `
  <p>Кинетическая энергия: ${Ek.toFixed(2)} Дж</p>
  `;
}