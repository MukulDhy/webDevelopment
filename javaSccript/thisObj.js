
let CurrName = "Bholu";

function myFunction(){
console.log(this.CurrName);
}
myFunction();
// const obj = {
//     name : " MuKul Dahiya",
//     age : this,
//     car : function(){
//         console.log(this);
//     }
// }

// console.log(obj.car());