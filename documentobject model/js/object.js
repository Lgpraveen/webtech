

// var obj = {
//     ename : "praveen",
//     age :21,
//     isdeveloper : true,
//     gender: "male"
// }


// console.log(obj)
// console.log(obj.ename)
// console.log(obj["isdeveloper"])

// obj.ename = "praveenkumar"
// console.log(obj)

// delete obj.ename
// console.log(obj)

// -----------------------------------------------------------------

// var student1 = {
//     student_name : "praveen",
//     mark : 99
// }
// var student2 = {
//     student_name : "kumar",
//     mark : 97
// }
// var student_database = {
//     sno1 : student1,
//     sno2 : student2
// }
// console.log(student_database.sno1)
// console.log(student_database.sno2)

// ------------------------------------------------------------------

// var tv = {
//     brand : "meta",
//     size :64,
//     behaviour : function(){
//         console.log("dvd")
//     }
// }
// console.log(tv.brand)
// tv.behaviour()

// ----------------------------------------------------------

// var globe = "global"
// var person = {
    // ename : "praveen",
    // ename : this.globe,
    // age : 21,
    // behaviour_telling_nameage : function(){
    //     return "my name is " + this.ename + " and my age is "+ this.age;

    // }
// }
// console.log(person.behaviour_telling_nameage());
// console.log(person.ename);

// --------------------------------------------------------

// let subject = {
//     java : [
//         {introduction:"introduction",
//         datatype:"datatypes",},"datatypes",],

//     webtech : ["introduction","datatypes"],
    
   
// }
// console.log(subject.java[0].introduction)

// ------------------------------------------------------------

//destructing object 

// let obj = {
//     ename : "praveen",
//     age : 21,
//     gender : "male"

// }
// let {ename,age,...d} = obj
// console.log(ename)

// let {ename : firstname,age,...d} = obj
// console.log(firstname)

// console.log(age)
// console.log(d)

// -------------------------------------------

// let dates = [
//     {
//         ename : "praveen",
//         sal : 20000,
//         eid : 1,
//     },
//     {
//         ename : "praveen",
//         sal : 20000,
//         eid : 1,
//     },
//     {
//         ename : "praveen",
//         sal : 20000,
//         eid : 1,
//     }
// ];









// -----------------------------------------------------------


// var obj = {
//     ename : "praveen",
//         age : 20,
//         eid : 1,   
// }
// let {ename:firstname = "john",age,gender = "male"} = obj;

// console.log(firstname)
// console.log(age)
// console.log(gender)

// ------------------------------------------------------------

// var obj = new Object()
// obj.firstname = "praveen"
// obj.lastname = "kumar"
// obj.gender = "male"

// // access property

// console.log(obj.firstname)
// console.log(obj)

// // deletw proertty

// delete obj.gender
// console.log(obj)

// -----------------------------------------------------------------

// function Person(ename,age,gender){
//     this.ename = ename
//     this.age = age
//     this.gender = gender
//     // var a = 10
//     this.behave = function(){
//         console.log("my name is "+this.ename)
//     }
// }
// var p1 = new Person("praveen",21,"male")
// console.log(p1.age)
// console.log(p1.ename)
// console.log(p1)
// // console.log(p1.a)
// p1.behave()

// -----------------------------------------------------------------------------------------------
//--------------------------------  Prototype-----------------------------------------------------



// var a = new String("smith")
// console.log(a)

// String.prototype.mymethod = function(a){
//     for(i=0;i<a.length;i++){
//         console.log(a[i])
//     }
// }

// ------------------------------------------------------------------------------


// function Person(ename,age,gender){
//         this.ename = ename
//         this.age = age
//         this.gender = gender
//         // var a = 10
//         this.behave = function(){
//             console.log("my name is "+this.ename)
//         }
//     }

//     Person.companyname = "tyss"
//     console.log(Person.companyname)
//     Person.prototype.color = "red"
//     var p1 = new Person("praveen",21,"male")
//     console.log(p1.companyname)
//     console.log(p1.__proto__);
//     console.log(p1.color);
    
//     console.log(p1.a)
//     p1.behave()





// var p2 = new Person ("dany",21,"male")
// p2.eid = 333
// console.log(p2.__proto__.eid=333)
// console.log(p1,eid)
// -----------------------------------------------------------------------------


function Student(ename,subject){
    this.ename = ename
    this.subject = subject
}
function Studentid(sno){
    this.sno = sno
}
var student_details = new Student("smith","js")
var student_sno = new Studentid(333)

student_details.__proto__ = student_sno
// student_sno.__proto__ = student_details
console.log(student_details.sno)


