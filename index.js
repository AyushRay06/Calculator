let num1 = 5;
let num2 = 10;

var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");

number1.innerText = num1
number2.innerText = num2


var ans = document.getElementById("result")

var result;

function additon(){
    result = num1 + num2;
    ans.innerText = "Sum: " + result;

}

function subtraction(){
    result = num1 - num2;
    ans.innerText = "Difference: " + result;

}

function multiplication(){
    result = num1 * num2
    ans.innerText = "product: " + result;
}

function division(){
    result = num1 / num2
    ans.innerText = "fraction: " + result;
}

