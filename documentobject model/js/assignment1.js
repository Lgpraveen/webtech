



let select_place = document.getElementById("select_place")
select_place.addEventListener("change",()=>{
    let select_place = document.getElementById("select_place").value
    console.log(select_place)
    var result = document.getElementById("result")
    result.textContent = `"the selected place is ${select_place   }"`
    


})