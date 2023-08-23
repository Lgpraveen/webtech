var btn=document.getElementById("btn")
var d1=document.getElementById("d1")
d1.style.border="1px solid black"
d1.style.padding="20px"
d1.style.position="absolute"

var d2=document.getElementById("d2")
d2.style.height="100vh"
d2.style.display="none"
d2.style.position="absolute"
d2.style.top="25%"
d2.style.left="35%"

btn.addEventListener("click",()=>{
    let cna=document.getElementById("cna").value
    let cbn=document.getElementById("cbn").value
    let cin=document.getElementById("cin").value
    let cout=document.getElementById("cout").value

    d2.style.display="block"
    d1.style.display="none"
    var tab=document.getElementById("table")

    let tbody=document.getElementById("tbody")
    let tr2=document.createElement("tr")
    tbody.appendChild(tr2)

    let th21=document.createElement("td")
    th21.textContent=cna
    tr2.appendChild(th21)
    let th22=document.createElement("td")
    th22.textContent=cbn
    tr2.appendChild(th22)
    let th23=document.createElement("td")
    th23.textContent=cin
    tr2.appendChild(th23)
    let th24=document.createElement("td")
    th24.textContent=cout
    tr2.appendChild(th24)

    let back=document.getElementById("ret")
    back.addEventListener("click",()=>{
        d2.style.display="none"
        d1.style.display="block"
    })

    const upd=document.getElementById("upd")
    upd.style.display="none"
    const edit=document.getElementById("edit")
    edit.addEventListener("click",()=>{
        upd.style.display="inline-block"
        tab.setAttribute("contenteditable","true")

        upd.addEventListener("click",()=>{
            tab.setAttribute("contenteditable","false")
            upd.style.display="none"
        })
    })
})