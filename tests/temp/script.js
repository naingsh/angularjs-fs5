var vowels =  {
  a:'a',
  e:'e',
  i:'i',
  o:'o',
  u:'u'
};
function eat(thing){
  var char = thing.charAt(0);
  var bool = false;
  for(var i in vowels){
    if(char==i) {
      bool=true;break;
    }
  }
  switch(bool){
    case true : console.log("Eating an "+thing);break;
    case false : console.log("Eating a "+thing);break;
    default : break;
  }
}

eat("ice-cream");

// nuts();
// function nuts(peanut){
//   var hazelnut = "hazelnut";
//   eat(almond);
//   function seeds(){
//       var almond = "almond";
//       eat(hazelnut);
//   }
// seeds();
// }
