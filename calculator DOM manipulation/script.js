document.querySelectorAll(".btn").addEventListener("click", displayData());
var x = "";
displayData = () => {
  var a = document.querySelectorAll(".btn").value;
  var a = 7;
  x = x + a;
  document.getElementById("output").innerHTML = x;
};
