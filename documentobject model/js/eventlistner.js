


function fun(){
    alert("this is from event handler")
}

function fun(){
    var ename = prompt("neter name0")
    var elocation = prompt("enter location")
    var empname = document.getElementById("ename")
    var emlocation = document.getElementById("elocation")
    empname.textContent = `ename : ${ename}`
    emlocation.textContent = `elocation :${elocation}`
}


function fun(){
    var ul1 = prompt("enter ul name")
    var li1 = prompt("enter li1")
    var li2 = prompt("enter li2")
    var li3 = prompt("enter li3")
    var ul1 = document.createElement("ul")
    var li1 = document.createElement("li")
    var li2 = document.createElement("li")
    var li3 = document.createElement("li")

    ul1.textContent = `ul1: ${"ul1"}`
    li1.textContent = `li1: ${"li1"}`
    li2.textContent = `li2: ${"li2"}`
    li3.textContent = `li3: ${"li2"}`
    ul1.appendChild(li1)
    ul1.appendChild(li2)
    ul1.appendChild(li3)
    document.body.append(ul1)

}