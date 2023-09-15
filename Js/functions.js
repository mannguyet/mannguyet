//function (Ham)
// Khai bao function
// Cú pháp (Syntax) : function functionName(prameters: tham so, prameters){
// Your code here
//}
// Đề bài viết hàm tính tổng 2 số a và b
function sum(a,b){
//    console.log("Is it working?");
return a + b;
// return
// return value
// Khong co return thi kq tra ve la undefined
}
// sum() : invoke function
console.log(sum(5, 10));
// invoke function sum(arguments: đối số)
// Lưu function vào 1 biến rồi gọi sau 
function add(a= 0, b= 0){
    console.log(a+b);
    return a + b;
}
//add(500,1000);
const sum2= add; // gán function cho biến sum2 nhưng chưa được gọi 
// sum2(300, 400);
// Tham so la function
// Tính trung bình của a và b -> (a+ b)/2
//fn: function
// Function declaration
function average(a, b, fn){
  const total = fn(a, b);
  return total / 2;
}
let result = average(200, 300, sum2);
console.log(`result ${result}`);
// Anonymous function (function expression)
//Ko bi hoisting 
const logName = function(){ //function ko co ten -> anonymous
    console.log("your name");
};
logName();
// IIFE -> immmediately invoked function execution
(function(){
    console.log("this is IIFE function");
})();
// Scope pham vi cua bien ma co the truy set dc
// global scope , function scope
let myName = "evodev"; // global scope
function logYourName(){
    let myName2 = myName; // function scope
    console.log(myName);
}
logYourName();
// block scope chi chay trong {}
if(2>1){
    // let message = "Hello evondev";
    const message = "Hello evondev";
    // global scope
    // hoisting
    var message2 = "Hello N"; // ko phai block scope
}
// alert (message2);
// alert(message);
// lexical scope
let aNewName = "Evondev"; // global scope
function sayHello(){
    let message5 = "Hi";   // block scope
    console.log(`${message5} ${aNewName}`);
}
sayHello();
// Closure
// Function con co the truy xuat scope cua function cha
// parent function
// function sayHello2(){
//     let message = "Hi";
//     // inner function
//     function sayHi(){
//         console.log(message);
//     }
//     return sayHi;
// }
// let hello = sayHello2();
// hello();
function sayHello(message){
     return function hiYourName(name){
        console.log(`${message} ${name}`);
     };
}
let hello = sayHello("Welcome to javascript");
hello(" Closure");
// Welcome to javescript Closure
function anotherfunction(){
    let otherMessage = "hello";
    function sayHi(){
        console.log(otherMessage);

    }
    return sayHi;
}
let callFunc = anotherfunction(); // otherMessage ko còn chiết xuất dc nữa
callFunc();  // hello
// Arrow function; anonymous function (function ko co ten)
// ECMAScript 
// ko bi hoisting
// Normal function: anonymous function
const square = function(x){
    return x * x;
};
square(5); //25
//Arrow function
const square1 = () => {
    // if else
    return 1000;
};
// rut gon khi return
const square2 =  (x) => x * x;
/*
Arrow function khi xu ly nhieu dong
const squase = () => {
    handle code and return 
}
*/
