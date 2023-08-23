var box=document.getElementById("box")
box.style.display="none"

var reg=document.getElementById("reg")
reg.addEventListener("click",(element)=>{
    box.style.display="inline-block"
    element.stopPropagation()

})
var nav=document.getElementById("nav")
nav.addEventListener("click",(element)=>{
    box.style.display="none"
    element.stopPropagation()
})
var hm=document.getElementById("home")
hm.addEventListener("click",(element)=>{
    box.style.display="none"
    element.stopPropagation()
})