
// sychronous
// console.log("start")
// console.log("a")
// console.log("b")
// alert("c")
// console.log("end")

//asynchronnous

// console.log("start")
// console.log("a")
// setTimeout(()=>{
//     console.log("b")
//     // alert("b")
// },1000);
// console.log("c")
// console.log("end")

// console.log("start")
// console.log("a")


var temp = 0;
function start(){
    var funtime = setInterval(()=>{
        console.log("b")
        // alert("b")
        var head = document.getElementById("heading");
        head.textContent = temp++;
    },1000);
    function stop(){
        clearInterval(funtime)
    }
    return this.stop = stop
}


console.log("c")
console.log("end")

var temp = 0;
var start = document.getElementById("start")
var stop = document.getElementById("stop")
start.addEventListener("click",
    function start(){
            var funtime = setInterval(()=>{
                console.log("b")
                // alert("b")
                var head = document.getElementById("heading");
                head.textContent = temp++;
            },1000);


})



// latentflip.com

// ------------------------------------------------------------------------------------



// // const calendarContainer = document.getElementById('calendar');

// // function generateCalendar(year, month) {
// //   const firstDay = new Date(year, month, 1);
// //   const lastDay = new Date(year, month + 1, 0);
// //   const today = new Date();
  
// //   let calendarHTML = '<table>';
// //   calendarHTML += '<tr><th colspan="7">' + firstDay.toLocaleString('default', { month: 'long', year: 'numeric' }) + '</th></tr>';
// //   calendarHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';
  
// //   let currentDate = new Date(firstDay);
// //   currentDate.setDate(currentDate.getDate() - currentDate.getDay());
  
// //   while (currentDate <= lastDay) {
// //     calendarHTML += '<tr>';
// //     for (let i = 0; i < 7; i++) {
// //       if (currentDate.getMonth() === month) {
// //         const isToday = currentDate.toDateString() === today.toDateString() ? 'toxday' : '';
// //         calendarHTML += `<td class="${isToday}">${currentDate.getDate()}</td>`;
// //       } else {
// //         calendarHTML += '<td></td>';
// //       }
// //       currentDate.setDate(currentDate.getDate() + 1);
// //     }
// //     calendarHTML += '</tr>';
// //   }
  
// //   calendarHTML += '</table>';
// //   return calendarHTML;
// // }

// // const today = new Date();
// // calendarContainer.innerHTML = generateCalendar(today.getFullYear(), today.getMonth());


// // ---------------------------------------------------------------------

