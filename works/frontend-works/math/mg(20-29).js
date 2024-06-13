function displayElement(id) {
  let content = document.getElementById(id);
  if (content.style.display == "none") content.style.display = "block";
  else content.style.display = "none";
}

function calculateTwenty() {
  var a = parseInt(document.getElementById('catet').value);
  var c = parseInt(document.getElementById('gipotenuse').value);
  if(isNaN(a)) a = 0;
  if(isNaN(c)) c = 0;

  var b = Math.sqrt(c ** 2 - a ** 2);
  var s = (a * b) / 2;
  if(isNaN(b, s)) b = 0, s = 0;

  document.getElementById('answerTwenty').value = s.toFixed(2), b.toFixed(2);
  document.getElementById('answerTwenty').innerHTML = `
  <p>Катет (b): ${b.toFixed(2)} см</p>
  <p>Площадь: ${s.toFixed(2)} см<sup>2</sup></p>
  `;
}

function calculateTwentyOne() {
  var aCat = parseInt(document.getElementById('aCat').value);
  var bCat = parseInt(document.getElementById('bCat').value);
  if(isNaN(aCat)) aCat = 0;
  if(isNaN(bCat)) bCat = 0;

  var p = aCat + bCat + Math.sqrt(aCat ** 2 + bCat ** 2);
  var s = (aCat * bCat) / 2;

  document.getElementById('answerTwentyOne').value = p.toFixed(2), s.toFixed(2);
  document.getElementById('answerTwentyOne').innerHTML = `
  <p>Периметр: ${p.toFixed(2)} см</p>
  <p>Площадь: ${s.toFixed(2)} см<sup>2</sup></p>
  `;
}

function calculateTwentyTwo() {
  var a = parseInt(document.getElementById('base').value);
  var d = parseInt(document.getElementById('angBase').value);
  if(isNaN(a)) a = 0;
  if(isNaN(d)) d = 0;

  var h = a / 2 * Math.tan(d);
  var s = (a * h) / 2;

  document.getElementById('answerTwentyTwo').value = h.toFixed(2), s.toFixed(2);
  document.getElementById('answerTwentyTwo').innerHTML = `
  <p>Высота: ${h.toFixed(2)} см</p>
  <p>Площадь: ${s.toFixed(2)} см<sup>2</sup></p>
  `;
}

function calculateTwentyThree() {
  var aSide = parseInt(document.getElementById('aSide6').value);
  var bSide = parseInt(document.getElementById('bSide6').value);
  var cSide = parseInt(document.getElementById('cSide6').value);
  if(isNaN(aSide)) aSide = 0;
  if(isNaN(bSide)) bSide = 0;
  if(isNaN(cSide)) cSide = 0;

  var p = (aSide + bSide + cSide) / 2;
  var r = (aSide * bSide * cSide) / 4 * Math.sqrt(p * (p - aSide) * (p - bSide) * (p - cSide));
  if(isNaN(r)) r = 0;

  document.getElementById('answerTwentyThree').value = p.toFixed(2), r.toFixed(2);
  document.getElementById('answerTwentyThree').innerHTML = `
  <p>Пол периметра: ${p.toFixed(2)} см</p>
  <p>Радиус: ${r.toFixed(2)} см</p>
  `;
}

function calculateTwentyFour() {
  var a = parseInt(document.getElementById('aSide7').value);
  var b = parseInt(document.getElementById('bSide7').value);
  var d = parseInt(document.getElementById('sharpAng').value);
  if(isNaN(a)) a = 0;
  if(isNaN(b)) b = 0;
  if(isNaN(d)) d = 0;

  var p = 2 * (a + b);
  var s = a * b * Math.sin(d);

  document.getElementById('answerTwentyFour').value = p.toFixed(2), s.toFixed;
  document.getElementById('answerTwentyFour').innerHTML = `
  <p>Периметр: ${p.toFixed(2)} см</p>
  <p>Площадь: ${s.toFixed(2)} см<sup>2</sup></p>
  `;
}