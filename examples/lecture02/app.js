var student ={
	name: "",
	type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
	document.addEventListener("keyup", keyUp);
}

//output student.name's total numeric value
function keyUp(event){
	var total=retrieveTotalNumber();
	outputMsg(total);
}

//shows a particular character's ascii value
function calculateAlphabetNumbers(name, index){
	return name.charCodeAt(index);
}

//calculate total numeric value of name
function retrieveTotalNumber(){
student.name=document.querySelector("#name").value;
var totalNumber=0;
for(var i=0;i<student.name.length;i++){
	totalNumber+=calculateAlphabetNumbers(student.name, i);
}
return totalNumber;
}

//output(display) total numeric value
function outputMsg(total){
	var msg = "Total numeric value of who you are typing is ";
	document.querySelector("#output").innerText = msg+total;
}


//**** The following code can calculate total numeric value of the name, just a few bugs

// document.addEventListener('DOMContentLoaded', contentLoaded);

// function contentLoaded(event){
// 	document.querySelector("#name").addEventListener("keyup",keyUp);
// }
// var count=0;
// var pastNum=0;
// function keyUp(event){
// 	student.name=document.querySelector("#name").value;
// 	// console.log(student.name);
// 	var total = calculateAlphabetNumbers(student.name, count);
// 	pastNum+=total;
// 	outputMessage(pastNum);
// 	count++;
// }
// // alp = alphabet
// function calculateAlphabetNumbers(alpNum, index){
// 	var number=alpNum.charCodeAt(index);
// 	console.log(number);
// 	return number;
// }

// function outputMessage(total){
// 	var msg="Total numeric value of person's name is ";
// 	document.querySelector("#output").innerText=msg+total;
// }
