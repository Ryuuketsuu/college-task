function displayElement(id) {
  let content = document.getElementById(id);
  if (content.style.display == "none") content.style.display = "block";
  else content.style.display = "none";
}

function calculateOne() {
  var base = parseInt(document.getElementById('baseOne').value);
  var height = parseInt(document.getElementById('heightOne').value);
  if(isNaN(base)) base = 0;
  if(isNaN(height)) height = 0;

  var s = (base * height) / 2;
  var a = Math.atan(2 * height / base);

  document.getElementById("answerOne").innerHTML = `
  <p>Площадь: ${s.toFixed(2)} cm<sup>2</sup></p>
  <p>Угол: ${a.toFixed(2)}</p>
  `;
}

function calculateTwo() {
  var aSideNum = parseInt(document.getElementById('aSquare').value);
  var bSideNum = parseInt(document.getElementById('bSquare').value);

  if(isNaN(aSideNum)) aSideNum = 0;
  if(isNaN(bSideNum)) bSideNum = 0;

  var s = aSideNum * bSideNum;
  var p = 2 * (aSideNum + bSideNum);

  document.getElementById('answerTwo').innerHTML = `
  <p>Площадь: ${s.toFixed(2)} cm<sup>2</sup></p>
  <p>Периметр: ${p.toFixed(2)} cm</p>
  `;
}

function calculateThree() {
  var boostNum = parseInt(document.getElementById('boost').value);
  var timeNum = parseInt(document.getElementById('time').value);

  if(isNaN(boostNum)) boostNum = 0;
  if(isNaN(timeNum)) timeNum = 0;

  var s = boostNum * timeNum ** 2 / 2;
  var v = boostNum * timeNum;

  document.getElementById('answerThree').innerHTML = `
  <p>Путь: ${s.toFixed(2)} m</p>
  <p>Скорость в конце пути: ${v.toFixed(2)} m/s</p>
  `;
}

function calculateFour() {
  var aSide = parseInt(document.getElementById('squareOneSide').value);

  if(isNaN(aSide)) aSide = 0;

  var s = aSide ** 2;
  var p = 4 * aSide;

  document.getElementById('answerFour').innerHTML = `
  <p>Площадь: ${s.toFixed(2)} cm<sup>2</sup></p>
  <p>Периметр: ${p.toFixed(2)} cm</p>
  `;
}

function calculateFive() {
  var aSideNum = parseInt(document.getElementById('parallelSideA').value);
  var bSideNum = parseInt(document.getElementById('parallelSideB').value);
  var cSideNum = parseInt(document.getElementById('parallelSideC').value);

  if(isNaN(aSideNum)) aSideNum = 0;
  if(isNaN(bSideNum)) bSideNum = 0;
  if(isNaN(cSideNum)) cSideNum = 0;

  var s = 2 * (aSideNum + bSideNum) * cSideNum;
  var v = aSideNum * bSideNum * cSideNum;

  document.getElementById('answerFive').innerHTML = `
  <p>Площадь: ${s.toFixed(2)} cm<sup>2</sup></p>
  <p>Объем: ${v.toFixed(2)} cm<sup>3</sup></p>
  `;
}

function calculateSix() {
  var outerNum = parseInt(document.getElementById('outRadius').value);
  var innerNum = parseInt(document.getElementById('inRadius').value);

  if(isNaN(outerNum)) outerNum = 0;
  if(isNaN(innerNum)) innerNum = 0;

  var s = Math.PI * (outerNum ** 2 - innerNum ** 2);

  document.getElementById('answerSix').innerHTML = `
  <p>Площадь: ${s.toFixed(2)} cm<sup>2</sup></p>
  `;
}

function calculateSeven() {
  var radiusNum = parseInt(document.getElementById('cilRadius').value);
  var heightNum = parseInt(document.getElementById('cilHeight').value);
  
  if(isNaN(radiusNum)) radiusNum = 0;
  if(isNaN(heightNum)) heightNum = 0;

  var s = 2 * Math.PI * radiusNum * heightNum;
  var v = Math.PI * radiusNum ** 2 * heightNum;

  document.getElementById('answerSeven').innerHTML = `
  <p>Площадь: ${s.toFixed(2)} cm<sup>2</sup></p>
  <p>Объем: ${v.toFixed(2)} cm<sup>3</sup></p>
  `;
}

function calculateEight() {
  var aSideNum = parseInt(document.getElementById('aSide').value);
  var bSideNum = parseInt(document.getElementById('bSide').value);
  var cSideNum = parseInt(document.getElementById('cSide').value);

  if(isNaN(aSideNum)) aSideNum = 0;
  if(isNaN(bSideNum)) bSideNum = 0;
  if(isNaN(cSideNum)) cSideNum = 0;

  var s = aSideNum * bSideNum / 2;
  var p = aSideNum + bSideNum + cSideNum;

  document.getElementById('answerEight').innerHTML = `
  <p>Площадь: ${s.toFixed(2)} cm<sup>2</sup></p>
  <p>Периметр: ${p.toFixed(2)} cm</p>
  `;
}

function calculateNine() {
  var cubeSide = parseInt(document.getElementById('oneSide').value);

  if(isNaN(cubeSide)) cubeSide = 0;

  var s = 6 * cubeSide ** 2;
  var v = cubeSide ** 3;

  document.getElementById('answerNine').innerHTML = `
  <p>Площадь: ${s.toFixed(2)} cm<sup>2</sup></p>
  <p>Объем: ${v.toFixed(2)} cm<sup>3</sup></p>
  `;
}
