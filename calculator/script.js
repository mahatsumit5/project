// document.getElementById("output").innerHTML = "";
var x = "";

showData1 = () => {
  var a = document.getElementById("button1").value;

  x = x + a;
  document.getElementById("output").innerHTML = x;

  console.log("vlaue of x is " + x);
};

showData2 = () => {
  var a = document.getElementById("button2").value;

  x = x + a;
  document.getElementById("output").innerHTML = x;

  console.log("vlaue of x is " + x);
};

showData3 = () => {
  var a = document.getElementById("button3").value;
  //   three = a + three;
  x = x + a;
  document.getElementById("output").innerHTML = x;
};

showData4 = () => {
  var a = document.getElementById("button4").value;
  x = x + a;
  document.getElementById("output").innerHTML = x;
};
showData5 = () => {
  var a = document.getElementById("button5").value;
  x = x + a;
  document.getElementById("output").innerHTML = x;
};
showData6 = () => {
  var a = document.getElementById("button6").value;
  x = x + a;
  document.getElementById("output").innerHTML = x;
};
showData7 = () => {
  var a = document.getElementById("button7").value;
  x = x + a;
  document.getElementById("output").innerHTML = x;
};
showData8 = () => {
  var a = document.getElementById("button8").value;
  x = x + a;
  document.getElementById("output").innerHTML = x;
};
showData9 = () => {
  var a = document.getElementById("button9").value;
  x = x + a;
  document.getElementById("output").innerHTML = x;
};
showData0 = () => {
  var a = document.getElementById("button0").value;
  x = x + a;
  document.getElementById("output").innerHTML = x;
};
decimal = () => {
  var a = document.getElementById("decimal").value;
  x = x + a;
  document.getElementById("output").innerHTML = x;
};
del = () => {
  var a = document.getElementById("del").value;
  const l = x.length;
  const y = l - 1;
  const c = x.charAt(y);
  x = x.replace(c, "");

  document.getElementById("output").innerHTML = x;
};
clearData = () => {
  location.reload();
};

//var sum = null;
addFunction = () => {
  var a = document.getElementById("addFunction").value;

  document.getElementById("output").innerHTML = x + a;
  console.log(a);
  console.log(x);
  x = x + a;
  //   console.log(`the value of one is ` + one);
  //   console.log(`the value of two is ` + two);
  //   console.log(`sum of one and two is ` + one + ` + ` + two);
  //  int = parseFloat(x);
  // console.log(int);
  // sum = sum + int;
  // console.log(x);
  //   console.log(eval(output));
  //x = "";
  //console.log("there value of x  is now changed to  " + x);
};

//var sub = 0;
subtractFunction = () => {
  var a = document.getElementById("subtractFunction").value;
  document.getElementById("output").innerHTML = x + a;
  x = x + a;
  //console.log(a);
  // console.log(x);
  //   console.log(`the value of one is ` + one);
  //   console.log(`the value of two is ` + two);
  //   console.log(`sum of one and two is ` + one + ` + ` + two);
  // int = parseFloat(x);
  // console.log(int);
  //  sub = sub - int;
  //  sub = sub * -1;
  //console.log(sub);

  // x = "";
  //   console.log("there value of x  is now changed to  " + x);
};

//var mul = 1;
multiplyFunction = () => {
  var a = document.getElementById("multiple").value;
  document.getElementById("output").innerHTML = x + a;
  x = x + a;
  //console.log(a);
  //console.log(x);
  //   console.log(`the value of one is ` + one);
  //   console.log(`the value of two is ` + two);
  //   console.log(`sum of one and two is ` + one + ` + ` + two);
  //int = parseFloat(x);
  //console.log(int);
  //mul = int * mul;
  // console.log("the value is " + mul);
  //x = "";
  //console.log("there value of x  is now changed to  " + x);
};

divideFunction = () => {
  var a = document.getElementById("divide").value;
  document.getElementById("output").innerHTML = x + a;
  x = x + a;
};
percentFunction = () => {
  var a = document.getElementById("percent").value;
  document.getElementById("output").innerHTML = (x + a) / 100;
  x = x + a;
};
equals = () => {
  var value = document.getElementById("output").innerHTML;
  var ans = eval(value);
  console.log(ans);
  document.getElementById("output").innerHTML = ans;
  x = ans;
};
