const beasts = ['ant', 'bison', 'camel bison', 'duck', 'bison','pink','sheep bison'];

function bisonFilter(value){
  return value.indexOf('bison')!=-1;
}

console.log(beasts.filter(bisonFilter));

for(var i=0;i<beasts.length;i++){
  if(beasts[i].indexOf('bison')!=-1){
    console.log(beasts[i]);
  }

}
