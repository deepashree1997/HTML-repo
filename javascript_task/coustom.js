var a = [];
function addElement() {
  var b1 = document.getElementById("b1").value;
  a.push(b1);
  console.log(a);
}
function addElement1() {
  a.pop(b1);
  console.log(a);
}
function addElement2() {
  for (var i = 0; i < a.length; i++) {
    console.log(a[i] + "");
    console.log("");
  }
}
var b9 = [];
function addElement3() {
  var b7 = document.getElementById("b7").value;
  b9.push(b7);
  console.log(b9);
}
function addElement4() {
  var b8 = a.concat(b9);
  console.log(b8);
}
function addElement5() {
  var abc = Number(aaa.value);
  var def = ccc.value;
  a.splice(abc, 0, def);
  console.log(a);
}
function addElement6() {
  var b12 = Number(b11.value);
  a.splice(b12, 1);
  console.log(a);
  console.log(b12);
}
function addElement7() {
  a.shift(b1);
  console.log(a);
}
function addElement8() {
  a.unshift("deepa", "divya");
  console.log(a);
}
function dupli() {
  function removeDuplicates(a) {
    return a.filter((item, index) => a.indexOf(item) === index);
  }
}
function addElement0() {
  var count = {};
  a.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  console.log(count);
}
