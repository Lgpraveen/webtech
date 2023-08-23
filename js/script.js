
// exteral js code
// console.log("this is js from external")
// console.log("hiii")
// console.log(window)


// //numders
// var numb = 99
// console.log(typeof num)
// // type of is used to check the datatypes
// console.log(numb)
// console.log(2**53-1)
// var range = 9007199254740991
// console.log(typeof range)
// console.log(Number.MAX_SAFE_INTEGER)

// bigint
// biginteger
// var range = 9007199254740991n
// console.log(range + 4n);
// console.log(typeof range)
//bigint is biginteger in suffix of numer should be add n 
// we should not mix number and bright
// bigint must be enter n


// string
// set of characters and character cosider as string in js

// var str = `this is my friend's pen brand is "hero"
// console.log(str)`
// console.log(str)
// console.log(typeof str)
// var age=20;
// var ename ='praveen';
// console.log('this is my name'+"\n"+'ename')
// console.log('this is my name ${ename}')
// var name='smith is ${age}'
// console.log(ename)


//null
// null is a keyword it has value in js
// type of null is nothing but object


// var praveen = 90;
// var ram = null;
// console.log(ram)
// console.log(typeof null)

//undefined
// it is a value in a js
// // when a variable declared in js ,
//  js engine implicitly assign a value
// not defied is a error udefined is a value 
// assigned for variable in js by js engine



// var a;
// console.log(a)
// console.log(typeof a)
// console.log(typeof typeof a)
// a=10;
// console.log(a)

//boolean
// it is defined either any true or false

// var boo1 = true;
// var boolean1 = false;
// console.log(typeof boo1)
// console.log(typeof boolean1)


//object
// non premitive datatype
// any entity which is existing in real world is 
// considered as WebGLVertexArrayObject

// every object have state and behaviour

// var person = {
//     ename : "smith",
//     color : "blue"
// }
// console.log(person.ename)
// console.log(person.color)
// console.log(typeof person)


//-----------------------10-07-23------------------------

// var a1 = "smith"
// a1[0] = "x";
// console.log(a1)

// var a1 = [1,2,3]
// a1[2] = 32
// console.log(a1)


// console.log(typeof a1)
// var a2 = new String("smith")
// console.log(a2 instanceof String)
// console.log(a2 instanceof Number)  

// var str1 = new String("smith")
// var str2 = str1[0]="x"
// console.log(str1)
// console.log(str2)


// var a = "smith"
// var b = new String("smith")
// var c = new String("smith")
// console.log(a==b)
// console.log(a==c)
// console.log(b==c. valueOf()) 

// equals in js represent with (==)
// equals is check for values 
// scenarious
//premitive data types and premitive which results true
// premitive data types and non premitive which results true
// we can not able to compare both non premitive datatypes
// if you want to campare both non premitive datatypes,either one of the members should change into premitive datatypes to help of valueof() method.


// var a= "smith"
// var b= "smith"
// var a1= new String("smith")
// var a2= new String("smith")
// console.log(a===b)
// console.log(a===a1)
// console.log(a1.valueOf() === a2.valueOf());


//------------------functions ----------------------------------------

//first class citizen
// to achieve code reusability
//every functionn a function call is important
//

//parameter places where you can hold arguments,values
//arguments: arguments are nothig but values ,you can pass in function caller



//call stack is block of memory store multiple object\\ place where js code will get execute
// fifo/lifo

// console.log("start")
// function sum(a,b)
// {
//     console.log(a+b)
//     console.log(a-b)
//     console.log(a*b)
//     console.log(a/b)
// }
// sum(30,20)
// console.log(a)
// console.log(b)
// console.log("end")

// console.log("start")
// function sum(a,b)
// {
//     var a= 10;
//     var b= 20;
//      console.log(a+b)
     
// }
// sum()
// console.log(a)
// console.log(b)
// console.log(sum)
// console.log("end")


// rule:1
//       parameter are local variale of the fuction
// rule:2
//       even though you are declarig var variables inside the function block it will have a local scope


// code reusability


// var num1 = Number(prompt("enetr the number"))
// var num2 = Number(prompt("enetr the number"))
// function sum(a,b){
//     console.log(a+b)
// }
// sum(num1,num2)

// var num1 = Number(prompt("enetr the number"))
// function posorneg(a){
//     if(a>0){
//         console.log("positive")
//     }
    
//     else{
//         console.log("negative")
//     }
// }
// posorneg(num1)

//convert positive to negative

// var num1 = Number(prompt("enetr the number"))
// function postoneg(a){
//     console.log(num1*-1)
// }
// postoneg(num1)

//convert negative to positive

// var num1 = Number(prompt("enetr the number"))
// function postoneg(a){
//     console.log(num1*-1)
// }
// postoneg(num1)

//get two integer from the user and find the greatest

// var num1 = Number(prompt("enetr the number"))
// var num2 = Number(prompt("enetr the number"))
// function greatest(a,b){
//     if(a>b)
//     {
//         console.log("a is greatest ")
//     }
//     else{
//         console.log("b is greatest ")
//     }
// }
// greatest(num1,num2)

//get two integer from the user and find the smallest

// var num1 = Number(prompt("enetr the number"))
// var num2 = Number(prompt("enetr the number"))
// function smallest(a,b){
//     if(a<b)
//     {
//         console.log("a is smallest ")
//     }
//     else{
//         console.log("b is smallest ")
//     }
// }
// smallest(num1,num2)


// var start = Number(prompt("enetr the number"))
// var end = Number(prompt("enetr the number"))
// function range(i){
//     for(var i=start;i<=end;i++){
//         console.log(i)
//     }
// }
// range(start,end)

// var start = Number(prompt("enetr the number"))
// var end = Number(prompt("enetr the number"))
// function range(i){
//     for(var i=end;i>start;i--){
//         console.log(i)
//     }
// }
// range(start,end)

// var num1 = Number(prompt("enetr the number"))
// function evenorodd(a){
//     if(a%2==0)
//     {
//         console.log("even")
//     }
//     else
//     {
//         console.log("odd")
//     }

// }
// evenorodd(num1)

//function declaration
// console.log("start")
// sum(10,20)
// function sum(a,b){
//     console.log(a+b)
// }
// console.log("end")

// console.log("start")
// add(10,20)
// var add = function (a,b){
//     console.log(a+b)
    
// }

// console.log("end")

// var temp = true
// while(temp){

// var num1 = Number(prompt("enetr the num1"));
// var num2 = Number(prompt("enetr the num2"));
// var result =Number(prompt("enter 0 for sum and 1 for subtraction 2 for multiplication 3 for division"));
// if(!isNaN(num1) && !isNaN(num2)){


//     function Math(task,a,b)
// {
//     return task(a,b);

// }
// function sum(a,b)
// {
//     return alert("the result of sum is " + (a+b));

// }
// function sub(a,b)
// {
//     return alert("the result of sub is " + (a-b));

// }
// function mul(a,b)
// {
//     return alert("the result of mul is " + (a*b));

// }
// function div(a,b)
// {
//     return alert("the result of div is " + (a/b));

// }
// var arr = [sum,sub,mul,div];
// Math(arr[result],num1,num2)
// temp = false

// }
// else{
//     alert("enter proper range")
//     temp = true
// }
// }

// ----------------- immediate invoke functiomn expression -------------------
// use nd throw function


// let exp =(function(a,b){
//     console.log(a+b)
//     console.log(a-b)
//     console.log(a*b)
//     console.log(a/b)
// })(10,20)

//------------------- arrow function --------------------------


// implicit return : if it is one line of statement js , engine itself assign return keyword . if it is one line of statement block is not mandatory

// explicit return : when you are having multiple lines to execute return keyword is important block is important.

// let exp = (a,b) => a+b;
// console.log(exp(10,20))
// let exp = (a,b) => 10-20;
// console.log(exp())


// var exp = ()=>{
//     var a = 50;
//     var b = 20;
//     return(a+b)
// }
// console.log(exp())   

// var start = Number(prompt("enetr the starting number"))
// var end = Number(prompt("enetr the ending number"))
// const printNumbers = () => {
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//   }
// };

// printNumbers();


// var start = Number(prompt("enetr the starting number"))
// var end = Number(prompt("enetr the ending number"))
// const printNumbers = () => {
//   for (let i = start; i >= end; i--) {
//     console.log(i);
//   }
// };

// printNumbers();

// const printstars = () =>{
//     for(let i=0;i<=5;i++){
//         for(let j=0;j<=5;j++){
//             console.log("*")
//         }
//     }
// }
// printstars()


// const printFloydsTriangle = (n) => {
//     let num = 1;
//     for (let i = 1; i <= n; i++) {
//       let row = "";
//       for (let j = 1; j <= i; j++) {
//         row += num + " ";
//         num++;
//       }
//       console.log(row);
//     }
//   };
  
//   // Example usage
//   printFloydsTriangle(5);
  
// const printTriangle = (rows) => {
//     for (let i = 1; i <= rows; i++) {
//       let stars = '';
//       for (let j = 1; j <= i; j++) {
//         stars += '*';
//       }
  
//       console.log(stars);
//     }
//   };
//   printTriangle(5);

// var start = Number(prompt("enetr the starting number"))
// var end = Number(prompt("enetr the ending number"))
// const oddnumbers = () => {
//     for (let i = start; i <= end; i++) {
//        if(i=i+1){
//         console.log((i))
//        }
        
//     }

// }
// oddnumbers();

// const sumOfOddNumbers = () => {
//     let sum = 0;
//     let count = 0;
  
//     for (let i = 0; count < 5; i += 2) {
//       sum += i;
//       count++;
//     }
  
//     return sum;
//   };
  
//   // Call the arrow function to get the sum
//   const result = sumOfOddNumbers();
  
//   console.log(result);
  