// var Grade =75;
// // Grade = 72;
//
// if (Grade <=100 && Grade >=75) {
//   alert("Grade is A")
// }
//
// else if (Grade <=74 && Grade >=69) {
// alert("Grade is B")
// }
//
// else if (Grade <=68 && Grade >=61) {
//
// }
//
// var friends=["sholaye","pearl","timi","danexx"];
// for (var i = 0; i < friends.length; i++) {
//   alert(friends[i]);
// }

var modal=document.getElementById('modal');
// var form22=document.getElementById('form22');
var form22=document.getElementById('form22');
form22.onsubmit=function() {
  modal.style.display="none";
  alert("Your order is being proccessed");
}

var buys=document.getElementsByClassName('buys');
for (var i = 0; i < buys.length; i++) {
  buys[i].onclick=function() {
    modal.style.display="block";
  }
}
