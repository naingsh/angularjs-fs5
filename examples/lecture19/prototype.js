var parent = {
  value : 'parentValue',
  obj : {
    objValue: 'parentObjValue'
  },
  walk: function(){
    console.log("walking...")
  }
}
//
var child = Object.create(parent);  //creat object with a prototype
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child);
//
// function log(arg){
//   console.log(arg);
// }
// console.log(Object.is(parent.value,child.value));
// child.value = 'childValue';
// console.log(Object.is(parent.value,child.value));
// log(Object.is(parent.obj.objValue,child.obj.objValue));
// child.obj = {objValue:'childValue'};
// console.log(Object.is(child.obj.objValue,parent.obj.objValue));

// child.value = 'childValue';
// child.obj.objValue = 'childObjValue';
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child);
//
// console.log(child.obj.objValue===parent.obj.objValue);
// child.walk();
// var grandChild = Object.create(parent);
// console.log(grandChild.obj.objValue);
// grandChild.obj = {
//   objValue:'grandChildObj'
// };
// console.log(grandChild.obj.objValue);

//part 2
// function Dog(name){
//   this.name = name;
// }
//
// var myDog = new Dog("Max");
// console.log("I named my dog \"",myDog.name,"\"");

// var student1 = {
//   message: "I LOVE this course!"
// };
//
// var student2 = Object.create(student1);
// student2.getMessage = function () {
//   this.message = "Student 1 was paid off by Yaakov to say that!";
//   return this.message;
// };
// var coverUp = student2.getMessage();
// console.log(student2.message);
