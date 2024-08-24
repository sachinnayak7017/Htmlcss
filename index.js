

//1 ways to pritn in javascript
//   alert("me")
// document.wright("this is wright a paragrapha");

// 2   javascript console API
// console.log("Hello world ")
// console.warn("this is worning");
// console.error("thsi is an error")

///3 java script variables 
//what are variables - containers to store data values
var num1 = 34;
var num2 = 45;
  console.log(num1 + num2);

//4 datatype in JavaScript
//number
// var num3 = 344;
// var num4 = 452;


//string
// var str1 = "this is a string ";
// var str2 = 'this is a string ';


///object 
// var marks = {
//     ravi: 35, shubham: 64,
//     sachin: 99.99
// }
//   console.log(marks);


/////Booleans
// var a = true;
// var b = false;
//   console.log(a);

//   var und = undefined;
// var und;
//   console.log(und);


// var n = null;
//   console.log(n);


//   at  a very high level, there are two types of data type in JavaScript
//   1. primitive data types: undefined , null ,number. string, boolean, symbol
//   2. referece data types: object and Arrays
// var arr = [3, 5, 6, "sachin", 7, 4, 6]
//    console.log(arr)


///////////////Operators in Javascript 
//Arithmetic operators
// var l = 34;
// var k = 56;
// console.log("the value of l+k", l+k);
// console.log("the value of l-k", l-k);
// console.log("the value of l*k", l*k);
// console.log("the value of l%k", l%k);
// console.log("the value of l/k", l/k);

//assignment oprators
// var c = k;
// c +=2;
// c -=2;
// c *=2;
// c %=2;
// c /=2;
// console.log(c)


//Comparison Oparators
// var x =34;
// var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);


//Logical Operators
// console.log(true && true);
// console.log(true && false);
// console.log(true || true);
// console.log(true || false);
// console.log(!false);
// console.log(!true);



//function  in javascript
// function avg(a,b){
//     return(a + b)/2;

// }
// ci = avg(4,5);
// c2  = avg(6,8);
// console.log(ci,c2);


// var age =65;
//if  statement
// if(age>18){
//     console.log('you can drink  rasan water')
// }


// //if - else statement
// if(age>18){
//     console.log('you can drink  rasan water')
// }
// else{
    //     console.log('you can not drink  rasan water')
    // }

//if - else  ladder statement
// age = 89;
// if(age>2){
//     console.log('you can drink  rasan water')
// }
// else if(age>45){
//     console.log('you can not drink  rasan water')
// }
// else if(age>25){
    //     console.log('  rasan water')
    // }
    // else if(age>35){
        //     console.log('you can not drink ')
        // }
        // else{
            //     console.log('bachhe nahi rahe')
// }


///for loop
// var arr = [1, 2, 3, 4, 5,5,5,5,5, 6, 7];
// console.log(arr);
// for( var i = 0; i<arr.length;i++){
//     console.log(arr[i]);
    // if(i = 4){
    // //     break;
    // continue;
    // }
// }

// var arr1 = [1, 2, 3, 4, 5, 6, 7];
// arr1.forEach(function(element){
//     console.log(element);
// })


// While loop
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log("while loop");
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j])
//     j++;
// }


////do while loop
// var arr = [1, 2, 3, 4, 5, 6, 7];
// let j = 0;
// do {

//     console.log(arr[j])
//     j++;
// }
// while (j < arr.length) ;



//Array Methods
// let myArr = ["Fan","Camera",34,null,true];
// console.log(myArr.lenght);
// myArr.pop();//end element delete
// myArr.push("sachin"); //insert element
// myArr.shift();///initale element delete 
// const newLen = myArr.unshift("sachin");
// console.log(newLen);
// myArr.toString();
// myArr.sort();
// console.log(myArr);



//String Method in JavaScript 
// let String = "sachin is a good boy good good";
// console.log(String.length);
// console.log(String.indexOf("good"));
// console.log(String.lastIndexOf("good"));
// console.log(String.slice(1,6));
// d = String.replace("sachin","himanshu");
// console.log(d,String);



////date and time 
//  let date = new Date();
// console.log(date);
// console.log(date.getTime());
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getMinutes());
// console.log(date.getHours());





///DON Manipilation 
// let elem = document.getElementById('clike');
//  console.log(elem);
//   let elemClass= document.getElementsByClassName("container");
//  console.log(elemClass);
// // elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-primary");
// elemClass[0].classList.remove("text-primary");
// console.log(elem.innerHTML);
// console.log( elem.innerText);
// tn  = document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "this is a created pare";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "this is a created bold";
// tn[0].replaceChild( createdElement2 ,createdElement);
// // removeChild(element)---remove an element



//////////selecting using Query 
// sel= document.querySelector('.container')
// console.log(sel);




/////Event in javascript
// function clicked(){
//     console.log("The button was clicked")
// }
// window.onload = function(){
//     console.log('the document')
// }
// firstContainer.addEventListener('mouseover',function()
// {
//     console.log("click on cantainer")
// })
// firstContainer.addEventListener('mouseout',function()
// {
//     console.log("click on mouseout")
// })
// firstContainer.addEventListener('mouseup',function()
// {
//     console.log("mouse up cantainer")
// })
// firstContainer.addEventListener('mousedown',function()
// {
//     console.log("mouse down when click on container")
// })
// firstContainer.addEventListener('click',function()
// {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have ckeckerd </b>"
//         console.log("mouse up cantainer")
// })




//Arrow functions
// function sum(a,b){
//     return a+b;
// }
/////second type of fuction  in js
// sum = (a,b)=>{
//     return a+b;
// }
// logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> set interval fired </b>"
//     console.log("I am your log");
// }

///////////// setTimeout  and setInterval
// setTimeout(logKaro,2000);
// setInterval(logKaro,2000);
//  clr = setInterval(logKaro,2000);
//  clearInterval(clr)  prigram ko rokne ke liye  used with cansole





//JavaScript localStorage 
// localStorage.setItem('name','sachin')
// localStorage
// storage  = {name:"sahcin",length:1}
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear()
// console.log(localStorage);





///JSON
// obj = {name: "sachin", length: 1}
// jso = JSON.stringify(obj);///how to convet all element in string 
// console.log(typeof jso)
// console.log(jso);
// parsed = JSON.parse('{"name":"sachin","length":1}')////convet the string to any element type
// console.log(parsed);






























