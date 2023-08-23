


















































// var list1 = [];
// var list2 = [];
// var list3 = [];
// var list4 = [];
// var n= 1;
// var x = 0;

// function AddRow(){

//     var AddRown = document.getElementsByClassName("parkingTable")
//     var newRown = AddRown.inserRow(n);

//     list1[x] = document.getElementById("carNumber").value
//     list2[x] = document.getElementById("carName").value
//     list3[x] = document.getElementById("checkin").value
//     list4[x] = document.getElementById("checkout").value

//      var cel1 = newRown.insertCell(0);
//      var cel2 = newRown.insertCell(1);
//      var cel3 = newRown.insertCell(2);
//      var cel4 = newRown.insertCell(3);

//      cel1.innerHTML = list1[x];
//      cel2.innerHTML = list2[x];
//      cel3.innerHTML = list3[x];
//      cel4.innerHTML = list4[x];

//      n++;
//      x++;



// }
























// // Parking lot array to store parked car numbers
// const parkingLot = [];

// // Form submit event handler
// document.getElementById('parkingForm').addEventListener('submit', function(event) {
//   event.preventDefault();
//   const carNumberInput = document.getElementById('carNumber');
//   const carNumber = carNumberInput.value.trim();

//   if (carNumber === '') {
//     alert('Please enter the car number.');
//     return;
//   }

//   if (parkingLot.includes(carNumber)) {
//     alert('Car with the same number is already parked.');
//     return;
//   }

//   parkCar(carNumber);
//   carNumberInput.value = '';
// });

// // Function to park a car
// function parkCar(carNumber) {
//   parkingLot.push(carNumber);
//   updateParkingLotTable();
// }

// // Function to unpark a car
// function unparkCar(index) {
//   parkingLot.splice(index, 1);
//   updateParkingLotTable();
// }

// // Function to update the parking lot table
// function updateParkingLotTable() {
//   const parkingTable = document.getElementById('parkingTable');
//   parkingTable.innerHTML = `
//     <tr>
     
//       <th>Car Number</th>
//       <th>car name</th>
//       <th>checkin</th>
//       <th>checkout</th>
//     </tr>
//   `;

//   parkingLot.forEach((carNumber, index) => {
//     const tr = document.createElement('tr');
//     const tdCarNumber = document.createElement('td');
//     tdCarNumber.textContent = carNumber;
//     const tdAction = document.createElement('td');
//     const unparkButton = document.createElement('button');
//     unparkButton.textContent = careName;
//     unparkButton.onclick = function() {
//       unparkCar(index);
//     };
//     tdAction.appendChild(unparkButton);
//     tr.appendChild(tdCarNumber);
//     tr.appendChild(tdAction);
//     parkingTable.appendChild(tr);
//   });
// }

