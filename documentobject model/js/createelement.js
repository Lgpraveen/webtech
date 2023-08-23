

// var mydiv = document.createElement("div")
// document.body.append(mydiv)
// mydiv.style.backgroundColor="gray"
// mydiv.style.height = "200px"


// var h1 = document.createElement("h1")
// var h2 = document.createElement("h1")
// h1.innerText="ename=smith"
// h2.innerText="location:chennai"
// mydiv.appendChild(h1)
// mydiv.appendChild(h2)

// h1.style.backgroundColor="gold"
// h2.style.backgroundColor="gold"


// var ul = document.createElement("ul")
// var li1 = document.createElement("li")
// var li2 = document.createElement("li")
// var li3 = document.createElement("li")

// ul.innerHTML="Animals"
// li1.innerHTML="lion"
// li2.innerHTML="donkey"
// li3.innerHTML="monkey"

// ul.appendChild(li1)
// ul.appendChild(li2)
// ul.appendChild(li3)

// mydiv.appendChild(ul)


//create element

// var mydiv = document.createElement("div")
// mydiv.textContent = "this is my div"
// console.log(document)
// document.body.append(mydiv)
// mydiv.style.backgroundColor="gray"
// mydiv.style.height = "200px"
// console.log(mydiv)

//child of div

// var para = document.createElement("p")
// para.textContent = "this is para1"
// mydiv.appendChild(para)

//set attributes
// mydiv.id = "mydiv"
// mydiv.className = "myclass" 

// mydiv.setAttribute("id","myclass")


// var h1 = document.createElement("h1")
// var h2 = document.createElement("h1")

// var ename = prompt("enteryour name")
// var elocation = prompt("enter your location")

// h1.innerHTML = "ename : "+ ename;
// h2.innerHTML = "location : "+ elocation;

// h1.textContent = `Ename : $(ename)`
// h2.textContent = `Elocation : $(elocation)`
// mydiv.appendChild(h1)
// mydiv.appendChild(h2)

// console.log(mydiv)

// var li = 5
// var arr = new Array(li)

// for(i=0;i<arr.length;i++){
//     arr[i]= "random text"

// }
// console.log(arr)

// var ul = document.createElement("ul")
// var no = Number(prompt("enter list items"))
// var arr = new Array(no)
// for(i=0;i<arr.length;i++){
//     arr[i]= document.createElement("li")
//     arr[i].textContent= prompt("enter animal : "+ (i+1))
//     ul.appendChild(li)
// }
// console.log(arr)

// var li = Number(prompt("enter list items"))
// var ul = document.createElement("ul")
// document.body.append(ul)
// var arr = new Array(li)
// for(i=0;i<arr.length;i++){
//         var li= document.createElement("li")
//         arr[i]=li.textContent= prompt("enter animal : "+ (i+1))
//         ul.appendChild(li)
//     }
//     console.log(arr)

// var li = Number(prompt("enter list items"))
// var ul = document.createElement("ul")
// document.body.append(ul)
// var arr = new Array(li)

// for(i=0;i<arr.length;i++){
//         var li= document.createElement("li")
//         arr[i]=li.textContent= prompt("enter animal : "+ (i+1))
//         if(arr[i] != ""){
//             ul.appendChild(li);
//     }
//     else{
//         i--;
//     }
//     console.log(arr)  
// }

// var table = document.createElement("table")
// var thead = document.createElement("thead")
// var tr1 = document.createElement("tr")
// var th1 = document.createElement("th")
// var th2 = document.createElement("th")
// var th3 = document.createElement("th")
// th1.textContent= "s.no"
// th2.textContent= "enmae"
// th3.textContent = "location"
// tr1.appendChild(th1)
// tr1.appendChild(th2)
// tr1.appendChild(th3)
// thead.appendChild(tr1)
// table.appendChild(thead)
// document.body.append(table)

// var tbody = document.createElement("tbody")

// var ir = Number(prompt("enter size of row:"))
// var jc = Number(prompt("enter size of row:"))

// for(i=0;i<ir;i++)
// {
//     var trow = document.createElement("td")
//     for(j=0;i<jc;j++){
//         var td1 = document.createElement("td")
//         td.textContent= prompt("enter the values"+(i+1)+" "+(j+1)+":")
//         trow.append(td)
//     }
// }
// var tr2 = document.createElement("tr")
// var td1 = document.createElement("td")
// var td2 = document.createElement("td")
// var td3 = document.createElement("td")

// var no = Number(prompt("enter list items"))
// var arr = new Array(no)
// for(i=0;i<arr.length;i++){
//     var tr2 = document.createElement("tr")
//     for(j=0;j<=3;j++){
//         var td1 = document.createElement("td")
//         arr[i]
//     }
// }







// td1.textContent= "1"
// td2.textContent= "praveen"
// td3.textContent = "london"
// tr2.appendChild(td1)
// tr2.appendChild(td2)
// tr2.appendChild(td3)
// tbody.appendChild(tr2)
// table.appendChild(tbody)
// document.body.append(table)
// var tbody = document.createElement("tbody")
// var tr2 = document.createElement("tr")
// var td1 = document.createElement("td")
// var td2 = document.createElement("td")
// var td3 = document.createElement("td")
// td1.textContent= "2"
// td2.textContent= "smith"
// td3.textContent = "london"
// tr2.appendChild(td1)
// tr2.appendChild(td2)
// tr2.appendChild(td3)
// tbody.appendChild(tr2)
// table.appendChild(tbody)
// document.body.append(table)
// var tbody = document.createElement("tbody")
// var tr2 = document.createElement("tr")
// var td1 = document.createElement("td")
// var td2 = document.createElement("td")
// var td3 = document.createElement("td")
// td1.textContent= "3"
// td2.textContent= "david"
// td3.textContent = "chennai"
// tr2.appendChild(td1)
// tr2.appendChild(td2)
// tr2.appendChild(td3)
// tbody.appendChild(tr2)
// table.appendChild(tbody)
// document.body.append(table)
// var tbody = document.createElement("tbody")
// var tr2 = document.createElement("tr")
// var td1 = document.createElement("td")
// var td2 = document.createElement("td")
// var td3 = document.createElement("td")
// td1.textContent= "4"
// td2.textContent= "rose"
// td3.textContent = "vellore"
// tr2.appendChild(td1)
// tr2.appendChild(td2)
// tr2.appendChild(td3)
// tbody.appendChild(tr2)
// table.appendChild(tbody)
// document.body.append(table)


// var mydiv = document.createElement("div")
// mydiv.style.border = '2px solid black';
// document.body.append(div);
// var he = document.createElement("h1")
// he.textContent = "HEADING"
// document.div.append("h1")
// var navi = document.createElement("nav")
// var sec1 = document.createElement("section")
// var sec2 = document.createElement("section")
// var sec3 = document.createElement("section")
// var sec4 = document.createElement("section")
// sec1.textContent = "home"
// sec2.textContent = "register"
// sec3.textContent = "gallery"
// sec4.textContent = "home"
// navi.appendChild(sec1)
// navi.appendChild(sec2)
// navi.appendChild(sec3)
// navi.appendChild(sec4)

// var mydiv = document.createElement("div")
// mydiv.style.border = '2px solid black';
// document.body.append(div);

// var he = document.createElement("h1")
// he.textContent = "HEADING"
// document.body.div.append("he")

// var navi = document.createElement("nav")
// var sec1 = document.createElement("section")
// var sec2 = document.createElement("section")
// var sec3 = document.createElement("section")
// var sec4 = document.createElement("section")
// sec1.textContent = "home"
// sec2.textContent = "register"
// sec3.textContent = "gallery"
// sec4.textContent = "home"
// navi.appendChild(sec1)
// navi.appendChild(sec2)
// navi.appendChild(sec3)
// navi.appendChild(sec4)
// he.appendChild(navi)

// var mydiv = document.createElement("div")
// mydiv.textContent = "this is my div"
// // console.log(document)
// document.body.append(mydiv)
// mydiv.style.backgroundColor="gray"
// mydiv.style.height = "5000px"

// var he = document.createElement("header")
// he.textContent = "HEADING"
// mydiv.append(he)
// he.style.backgroundColor="blue"
// he.style.textAlign="center"

// var navi = document.createElement("nav")
// var sec1 = document.createElement("section")
// var sec2 = document.createElement("section")
// var sec3 = document.createElement("section")
// var sec4 = document.createElement("section")
// sec1.textContent = "home"
// sec2.textContent = "register"
// sec3.textContent = "gallery"
// sec4.textContent = "home"
// navi.appendChild(sec1)
// navi.appendChild(sec2)
// navi.appendChild(sec3)
// navi.appendChild(sec4)
// he.appendChild(navi)
// navi.style.backgroundColor="green"

// var mydiv1 = document.createElement("div")
// var sec5 = document.createElement("section")
// var sec6 = document.createElement("section")

// mydiv1.appendChild(sec5)
// mydiv1.appendChild(sec6)
// mydiv.append(mydiv1)

// sec5.style.backgroundColor="yellow"
// sec6.style.backgroundColor="yellow"






// var img1 = document.createElement("img")
// sec5.style.backgroundImage= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPz9U5Wob2nl8yF4mg029RwoKWVftOTOoTSjZ8-Z0qmKx1-W4w_qIY1x5_Gwg4dGR2LfU&s"

// sec5.style.height="100px"
// mydiv1.appendChild(sec5)
// mydiv.append(mydiv1)

// const footer1 = doc.createElement('footer');
// footer1.textContent = '<h1>the end</h1>';
// body.mydiv.appendChild(footer1);

// var ir = Number(prompt("enter size of row:"))
// var jc = Number(prompt("enter size of row:"))

// for(i=0;i<ir;i++)
// {
//     var trow = document.createElement("td")
//     for(j=0;i<jc;j++){
//         var td1 = document.createElement("td")
//         td.textContent= prompt("enter the values"+(i+1)+" "+(j+1)+":")
//         trow.append(td)
//     }
// }


// var heade = document.createElement("header")
var mydiv = document.createElement("div")
// mydiv.textContent = "this is my div"
// console.log(document)
document.body.append(mydiv)
mydiv.style.backgroundColor="gray"
mydiv.style.height = "800px"

var he = document.createElement("header")
he.textContent = "HEADING"
mydiv.append(he)
// he.style.backgroundColor="blue"
he.style.textAlign="center"
he.style.border = "2px solid black"

var navi = document.createElement("nav")
mydiv.append(navi)
navi.style.border = "2px solid black"
navi.style.height = "40px"
navi.style.width = "100%"

a = document.createElement("a")
a.textContent = "home"
// a.href =""
a.style.padding = "20px"
navi.appendChild(a)

a = document.createElement("a")
a.textContent = "register"
// a.href =""
a.style.padding = "400px"
navi.appendChild(a)

a = document.createElement("a")
a.textContent = "about"
// a.href =""
a.style.padding = "40px"
navi.appendChild(a)

// var mydiv1 = document.createElement("div")
// mydiv1.appendChild(mydiv)
var div1 = document.createElement("div")
mydiv.append(div1)
div1.style.border="2px solid black"
div1.style.height = "500px"
div1.style.width = "1350px"
div1.style.padding="30px"
div1.style.display = "flex"
// dib1.style.gap ="5px"




var sec1 = document.createElement("section")
var sec2 = document.createElement("section")
div1.appendChild(sec1)
div1.appendChild(sec2)



sec1.style.border="2px solid black"
sec1.style.height = "400px"
sec1.style.width = "50%"
sec1.style.padding="20px"

sec2.style.border="2px solid black"
sec2.style.height = "400px"
sec2.style.width = "40%"
sec2.style.padding="20px"




// var img1 = document.createElement()
// sec1.appendChild(img)
// img1.setAttribute("src","")
// img1.setAttribute("width","600px")
// img1.setAttribute("height","600px")



sec1.style.backgroundImage = `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNZUQlag8QMKCNWCMcJT8q26Vbe0xZhNxxg&usqp=CAU")`

video = createElement("video")
sec2.appendChild(video)

video.setAttribute("controls","true")

var src = document.createElement("source")
video.appendChild(src)
src.setAttribute("src","../video/20200314_132632.mp4")
video.setAttribute("width","500px")
video.setAttribute("height","400px")

