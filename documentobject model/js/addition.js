

var btn_add = document.getElementById("btn_add")
btn_add.addEventListener("click",function(){
    var num1 = document.getElementById("num1").
    value;
    var num2 = document.getElementById("num2").
    value;
    var sum = Number(num1)+ Number(num2);
    var result = document.getElementById("result");
    result.textContent = `the sum of two numbers ${num1} and  ${num2} : ${sum}`
    // var mydiv = document.getElementById("main-div")
    // mydiv.appendChild("btn_add")
    // btn_add.appendChild("mydiv")
    
    




})

// var btn_sub = document.getElementById("btn_sub")
// btn_sub.addEventListener("click",function(){
//     var num1 = document.getElementById("num1").
//     value;
//     var num2 = document.getElementById("num2").
//     value;
//     var subtraction = Number(num1)- Number(num2);
//     var result = document.getElementById("result");
//     result.textContent = `the subtraction of two numbers ${num1} and  ${num2} : ${subtraction} `
// })

// var btn_mul = document.getElementById("btn_mul")
// btn_mul.addEventListener("click",function(){
//     var num1 = document.getElementById("num1").
//     value;
//     var num2 = document.getElementById("num2").
//     value;
//     var multiplication = Number(num1)* Number(num2);
//     var result = document.getElementById("result");
//     result.textContent = `the sum of two numbers ${num1} and  ${num2} : ${multiplication}`
// })

// var btn_div = document.getElementById("btn_div")
// btn_div.addEventListener("click",function(){
//     var num1 = document.getElementById("num1").
//     value;
//     var num2 = document.getElementById("num2").
//     value;
//     var division = Number(num1)/ Number(num2);
//     var result = document.getElementById("result");
//     result.textContent = `the sum of two numbers ${num1} and  ${num2}  : ${division}`
// })

