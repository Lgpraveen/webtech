// var arr =["fam 1","fam 2","fam 3"]
// console.log(arr[1])



//If u want to store single value use variables
// let bag1="java"
// console.log(bag1)

//If u want to store multiple values use arrays
// let bag2=["java","sql","webtech"]
// console.log(bag2)

//To store key and value of element use object
// var obj1={
//     java:2,
//     sql:1,
//     web:2
// }
// console.log(obj1.web)

// let bag1=["dev","hamee","zamiil","loki","venky"]

// for(i=0;i<=bag1.length-1;i++)
// {
//     console.log(bag1[i])
// }

// for (const f of bag1) {
//     console.log(f)
// }

// console.log(bag1[bag1.length-2])

// for(i=1;i<bag1.length;i+=2)
// {
//     console.log(bag1[i])
// }

// for(let i in bag1)
// {
//     console.log(i+"="+bag1[i])
// }

// for(let i in bag1)
// {
//     if(i%2==0 && i!=0)
//     {
//         console.log(bag1[i])
//     }
// }

// let hetrogenous =["string",true,25,25n,function(){
//     console.log("function in array")
// },null,{name:"zamiil"},false]

// console.log(hetrogenous)

// var count=0;
// for (const val of hetrogenous) {
//     if(val==true || val==false){
//         count++;
//     }
// }
// console.log("boolean type element present inside the array="+count)


//rest and spread operators
//      If u want to destructure an object we use rest and spread
//     syntax:  ...
//      Both rest and spread have the same syntax based on the situation we decide it.

// var arr=[1,2,3,4,5]
// console.log(arr)
// console.log(...arr)

// let [a,b,...c]=arr
// console.log(a)
// console.log(b)
// console.log(c)


// function add(a,b,...c){
//     for (const i of c) {
//         if(i>0)
//         {
//             console.log("positive values "+i)
//         }
//     }

// }
// add(1,3,5,-7,9,11,-4)


// var arr=["java","sql","webtect","python","react","angular","node","j2ee","php","c++",]

// var ul=document.createElement("ul")
// document.body.append(ul)

// for (let sub of arr) {
//     let li=document.createElement("li")
//     li.textContent=sub
//     ul.appendChild(li)  
// }

// var tab=document.createElement("table")
// document.body.append(tab)
// tab.style.borderCollapse="collapse"
// var thead=document.createElement("thead")
// tab.appendChild(thead)
// var th=document.createElement("th")
// th.textContent="Subject"
// thead.appendChild(th)
// th.style.border="1px solid black"
// th.style.borderCollapse="collapse"
// var tbody=document.createElement("tbody")
// tab.appendChild(tbody)

// for (let sub of arr) {
//     let tr=document.createElement("tr")
//     tbody.appendChild(tr)
//     let td=document.createElement("td")
//     tr.appendChild(td)
//     td.textContent=sub
//     td.style.border="1px solid black"
//     td.style.borderCollapse="collapse"
// }


//Ways to create an array:

//=================array literal===================
// var arr=[1,2,3,4,5]

//=================new keyword=====================
// var arr1=new Array()
// arr1[0]=2
// arr1[1]=3
// arr1[100]=5
// console.log(arr1)

//===============initialising new keyword===========
// var arr2=new Array(5,6,7,8,9)
// console.log(arr2)


//merging two arrays using rest operators.
// var ar1=[1,2,3,4,5]
// var ar2=[6,7,8,9,10]
// var array=[...ar1,...ar2]
// console.log(array)


//de-structuring the array
// var [a,b,c,...d]=array
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)



// var hobbies=[
//     "football",
//     "singing",
//     "reading",
//     "cooking",
//     "travelling",
//     "stalking",
//     "sleeping",
//     "partying",
//     "learning"
// ]

// console.log(hobbies)
// console.log(hobbies.length)

//push will add elements at the tail of an array. We can add multiple elements at a time
// hobbies.push("studying","cricketing")
// console.log(hobbies)
// console.log(hobbies.length)

//pop will remove the tail element in an array. It will remove only one at a time
// hobbies.pop()
// console.log(hobbies.length)

//unshift is used to add multiple elements in the head of an array
// hobbies.unshift("cricket","basketball")
// console.log(hobbies)

//shift is used to remove the head element of an array
// hobbies.shift()
// console.log(hobbies)

//it is used to check if it is an array or not
// var isarray=Array.isArray(hobbies)
// console.log(isarray)
// console.log(Array.isArray(hobbies))

//check whether the element is present inside or not
// console.log(hobbies.includes("football"))

//find th index of a particular element
// console.log(hobbies.indexOf("cooking"))


//splice will modify original array it will accept 3 values
// console.log(hobbies.splice(2,4,"smith"))
// console.log(hobbies)


//slice won't modify original array.It will accept two values
// console.log(hobbies.slice(2,4))
// console.log(hobbies)


// var date1=new Date()
// console.log(date1)

// var min=Math.min(2,3,4,5,6,7)
// console.log(min)

// var power=Math.pow(8,2)
// console.log(power)


// create captcha
// var str="Lorem ipsum dolor sit amet consectetur adipisicing elit Id delectus tempora dolor quidem asperiores ullam magni accusantium aliquam facere dolorem Perferendis ab obcaecati fugit eos recusandae unde quod dolorum quae"
// var arr=str.split(" ")
// var ran=Math.round(Math.random()*arr.length-1)
// console.log(arr[ran])



//textcontent=It will consider space and text.



// var x=[1,2,3,4,5]
// let map1=x.map(function(value,index,x){
//     return value+2;
// })
// console.log(x)
// console.log(map1)

// let map_element=x.map(value=>{
//     return value+2;
// })
// console.log(map_element)

// function addelement(number){
//     console.log(number)
//     let map1 = number.map((numb)=>{
//         return numb +2;
//     })
//     return map1
// }
// console.log(addelement(x))

//Map is used to map the elements in the array.We use map for operations in array.
//Map will accept one callback function.And in the function it accepts 3 parameters (value,index,array)

// var x=[1,2,3,4,5]

// function oddeven(number){
    
//     let odd=number.map((num)=>{
//         if(num%2==0)
//         {
//             return num*100
//         }
//         else
//         {
//             return num*10
//         }
//     })
//     return odd
// }
// console.log(oddeven(x))
// let odev=oddeven(x);


// function big(num){
//     let fil=odev.filter((value)=>{
//         return value > 50
//     })
//     return fil;
// }
// console.log(big(odev))

//Filter is used to do logic in the array.
//Filter accepts a callback function.And the function accepts (value,index,arr)



// let tot=x.reduce((acc,val,ind,arr)=>{
//     return acc+=val
// },0)
// console.log(tot)

//Reduce is used to add the elements in an array and make it as a single memory
//reduce accepts a callback function.And the function accepts (accumulator,value,index,originalarr)
//accumulator is used as a temp variable

// var all=[200,300,400]
// let tot=all.reduce((acc,val)=>{
//     return acc+=val
// },2000)
// console.log(tot)


// var x=[1,2,3,4,1,2,3,1,2,4,7,4,5]
// var x=["chick","monkey","duck","chick","monkey","chick"]

// let out=x.reduce((acc,val)=>{
//     if(!acc[val]){
//         acc[val]=1
//     }
//     else{
//         acc[val]++;
//     }
//     return acc;
// },{})

// console.log(out)