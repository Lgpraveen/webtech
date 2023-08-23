


var un=document.getElementById("un")
un.addEventListener("keydown",(element)=>{
    let un=document.getElementById("un").value
    if(un.length<3)
    {
        let valun=document.getElementById("valun")
        valun.style.display="inline-block"
        valun.style.color="red"
        valun.textContent="Username must contain minimum 3 characters"
    }
    else
    {
        let valun=document.getElementById("valun")
        valun.style.display="inline-block"
        valun.style.color="green"
        valun.textContent="Entered username is valid"
    }
    element.stopPropagation()
})
un.addEventListener("focusout",(element)=>{
    let un=document.getElementById("un").value
    if(un.length<3)
    {
        let valun=document.getElementById("valun")
        valun.style.display="inline-block"
        valun.style.color="red"
        valun.textContent="Username must contain minimum 3 characters"
    }
    else
    {
        let valun=document.getElementById("valun")
        valun.style.display="inline-block"
        valun.style.color="green"
        valun.textContent="Entered username is valid"
    }
    element.stopPropagation()
})

var ps=document.getElementById("ps")
ps.addEventListener("focus",(element)=>{
    let un=document.getElementById("un").value
    console.log(un)
    if(un.length==0)
    {
        let valun=document.getElementById("valun")
        valun.style.display="inline-block"
        valun.style.color="red"
        valun.textContent="Enter username first"
    }
    element.stopPropagation()
})

ps.addEventListener("keydown",(element)=>{
    let ps=document.getElementById("ps").value
    if(ps.length<7)
    {
        let valps=document.getElementById("valps")
        valps.style.display="inline-block"
        valps.style.color="red"
        valps.textContent="Password must contain 8 letters"
    }
    else
    {
        let valps=document.getElementById("valps")
        valps.style.display="inline-block"
        valps.style.color="green"
        valps.textContent="Entered password is valid"
    }
    element.stopPropagation()
})

var reset=document.getElementById("reset")
reset.addEventListener("click",(element)=>{
    let valun=document.getElementById("valun")
    let valps=document.getElementById("valps")
    valun.style.display="none"
    valps.style.display="none"
    element.stopPropagation()
})

//=======Captcha
var str="Lorem ipsum dolor sit amet consectetur adipisicing elit Id delectus tempora dolor quidem asperiores ullam magni accusantium aliquam facere dolorem Perferendis ab obcaecati fugit eos recusandae unde quod dolorum quae"
var arr=str.split(" ")
var ran=Math.round(Math.random()*arr.length-2)
console.log(arr[ran])
let cap=document.getElementById("captcha")
cap.setAttribute("value",arr[ran])
//==============

var bdiv=document.getElementById("main")
var lgn=document.getElementById("lgn")
var Sdiv=document.getElementById("boxS")
lgn.addEventListener("click",(element)=>{
    bdiv.style.display="block"
    Sdiv.style.display="none"
    let cap=document.getElementById("captcha")
    cap.setAttribute("value",arr[ran])
    element.stopPropagation()
})

var signup=document.getElementById("red")
var Sdiv=document.getElementById("boxS")
var bdiv=document.getElementById("main")
signup.addEventListener("click",(element)=>{
    Sdiv.style.display="block"
    bdiv.style.display="none"
    element.stopPropagation()
})

// var submit=document.getElementById("login")
// submit.addEventListener("click",(element)=>{
//     let un=document.getElementById("un").value
//     let ps=document.getElementById("ps").value
//     var na="zamiil",pas="123456789"
//     if(un==na)
//     {
//         if(ps==pas)
//         {

//         }
//         else
//         {
//             let valps=document.getElementById("valps")
//             valps.style.display="inline-block"
//             valps.style.color="red"
//             valps.textContent="Invalid password"
//         }
//     }
//     else
//     {
//         let valun=document.getElementById("valun")
//         valun.style.display="inline-block"
//         valun.style.color="red"
//         valun.textContent="Invalid Username"
//     }
//     element.stopPropagation()
// })



//===============================================
//===============================================


var Sdiv=document.getElementById("boxS")
var bdiv=document.getElementById("main")
var sgup=document.getElementById("sgup")
sgup.addEventListener("click",(element)=>{
    Sdiv.style.display="block"
    bdiv.style.display="none"
    element.stopPropagation()
})

var login=document.getElementById("bck")
login.addEventListener("click",(element)=>{
    Sdiv.style.display="none"
    bdiv.style.display="block"
    let valsps=document.getElementById("valsps")
    valsps.style.display="none"
    let valcsps=document.getElementById("valcsps")
    valcsps.style.display="none"
    let cap=document.getElementById("captcha")
    cap.setAttribute("value",arr[ran])
    element.stopPropagation()
})

var sps=document.getElementById("sps")
var csps=document.getElementById("csps")
sps.addEventListener("keydown",(element)=>{
    var sps=document.getElementById("sps").value
    if(sps.length<7)
    {
        let valsps=document.getElementById("valsps")
        valsps.style.color="red"
        valsps.innerHTML="Password must contain 8 characters"
    }
    else
    {
        let valsps=document.getElementById("valsps")
        valsps.style.color="green"
        valsps.innerHTML="Valid password"
    }
    element.stopPropagation()
})

csps.addEventListener("keydown",(element)=>{
    var sps=document.getElementById("sps").value
    var csps=document.getElementById("csps").value
    if(sps==csps)
    {
        let valcsps=document.getElementById("valcsps")
        valcsps.style.color="green"
        valcsps.innerHTML="Password matched"
    }
    else{
        let valcsps=document.getElementById("valcsps")
        valcsps.style.color="red"
        valcsps.innerHTML="Enter the same password"
    }
    element.stopPropagation()
})

sps.addEventListener("focus",(element)=>{
    let valsps=document.getElementById("valsps")
    valsps.innerHTML="Enter Atleast 8 characters"
    valsps.style.color="red"
    element.stopPropagation()
})

var capval=document.getElementById("capval")
capval.addEventListener("focusout",(element)=>{
    let captcha=document.getElementById("captcha").value
    let capval=document.getElementById("capval").value
    console.log(capval)
    console.log(captcha)
    if(capval==captcha){
        let valcap=document.getElementById("valcap")
        valcap.style.color="green"
        valcap.textContent="Captcha matched"
    }
    else{
        let valcap=document.getElementById("valcap")
        valcap.style.color="red"
        valcap.textContent="Captcha did'nt match"
    }
})
