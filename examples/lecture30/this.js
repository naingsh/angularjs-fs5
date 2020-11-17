function Person(){
  this.fullName = 'Naosagi';
  this.fav = 'cookies';

  this.describe = function(){
    // console.log('this is',this);
    console.log(this.fullName+' likes '+this.fav);
  };
}

function changeFacts(name, fav){
    if(name!==undefined && name!=='') this.fullName = name;
    if(fav!==undefined && fav!=='') this.fav = fav;
}

var rushia = new Person();
changeFacts.call(rushia,'Rushia','');
var describe = rushia.describe;
console.log('describe object before attaching owner object ----->');
describe();
console.log('describe object after attaching owner object ----->');
 describe.call(rushia);
changeFacts.call(rushia,'','boing boing');
describe.call(rushia);
 //'call' is used to invoke (call) a method with an owner object as an argument (parameter).
