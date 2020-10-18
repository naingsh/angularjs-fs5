// document.addEventListener('DOMContentLoaded',run);
// function run(){
//   function Person(first,last,age,eye){
//     this.firstName=first;
//     this.lastName=last;
//     this.age=age;
//     this.eyeColor=eye;
//     this.changeName = function(name){
//       this.lastName = name;
//     };
//     this.fullName = function(){
//       return this.firstName+ " "+this.lastName;
//     }
//   }
//   var Zeke = new Person("Zeke","Jaegar",32,"Blue");
//   var Yimr = new Person("Yimr","",75,"Brown");
//   var Eren = new Person("Eren","Jaegar",22,"Blue");
//   Yimr.nationality = "Marley";
//   Eren.nationality = "Paradis Island";
//   // console.log("Zeke: ",Zeke);
//   // console.log("Yimr: ",Yimr);
//   // console.log("Eren: ",Eren);
//   Eren.titanAbility = "Attack Titan";
//   console.log("Eren's Titan Ability: ",Eren.titanAbility);
//   // Zeke.fullName = function(){
//   //   return this.firstName + " " + this.lastName;
//   // }
//   // console.log("Zeke's Fullname: ",Zeke.fullName());
//   var mikasa = new Person("Mikasa","Ackerman",21,"Blue");
//   console.log("Before Mikasa's Mirrage: ",mikasa.fullName());
//   mikasa.changeName("Jaegar");
//   console.log("After Mikasa's Mirrage: ",mikasa.fullName());
//   mikasa.changeName("Ackerman");
//   document.querySelector("#name").innerHTML=mikasa.fullName();
// }

//   var animal = {
//     limb: 4,
//     tail: true,
//     eyes:2
//   }
//
// var dog = Object.create(animal);
// dog.limb=4;dog.tail=true;dog.eyes=2;
//
// var spider = Object.create(animal);
// spider.tail=false;
// spider.limb=8;
// spider.eyes=4;
// console.log(spider);

  function Circle(radius){
    this.radius=radius;
  }

  Circle.prototype.getArea = function(){
    return Math.PI*(Math.pow(this.radius,2));
  }

  var circle1 = new Circle(10);
  // circle1.getArea = function(){
  //   return Math.PI*(Math.pow(this.radius,2));
  // }
  console.log(circle1.getArea());
