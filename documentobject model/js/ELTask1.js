var d1=document.getElementById("div1")
var d2=document.getElementById("div2")
d2.style.display="none"
d2.style.height="100vh"

var adbtn=document.getElementById("abt")
adbtn.addEventListener("click",()=>{
    var n1=document.getElementById("n1").value
    var n2=document.getElementById("n2").value
    let res=Number(n1)+Number(n2)
    d2.style.display="block"
    d1.style.display="none"
    let h3=document.getElementById("res")
    h3.innerHTML=`Addition of two numbers is ${res}`
})

var subtn=document.getElementById("sbt")
subtn.addEventListener("click",()=>{
    var n1=document.getElementById("n1").value
    var n2=document.getElementById("n2").value
    let res=Number(n1)-Number(n2)
    d2.style.display="block"
    d1.style.display="none"
    let h3=document.getElementById("res")
    h3.innerHTML=`Subtraction of two numbers is ${res}`
})

var mubtn=document.getElementById("mbt")
mubtn.addEventListener("click",()=>{
    var n1=document.getElementById("n1").value
    var n2=document.getElementById("n2").value
    let res=Number(n1)*Number(n2)
    d2.style.display="block"
    d1.style.display="none"
    let h3=document.getElementById("res")
    h3.innerHTML=`Multiplication of two numbers is ${res}`
})

var dibtn=document.getElementById("dbt")
dibtn.addEventListener("click",()=>{
    var n1=document.getElementById("n1").value
    var n2=document.getElementById("n2").value
    let res=Number(n1)/Number(n2)
    d2.style.display="block"
    d1.style.display="none"
    let h3=document.getElementById("res")
    h3.innerHTML=`Division of two numbers is ${res}`
})

var bbt=document.getElementById("back")
bbt.addEventListener("click",()=>{
    d1.style.display="block"
    d2.style.display="none"
})