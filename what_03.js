//What is this even doing! 1-3

var value = 0;

//step 1
if(value == 0){
	value = 5;
} else {
	value = 50;
}

console.log(value);

//step 2
var a = 0;

while(a < 5){
	value++;
	a++;
}

console.log(value);

//step 3
if(value < 7){
	augmentA(value);
} else {
	value = augmentA(value + 2);
}

/*
function augmentA(val){
	for(var i = 0; i < 8; i++){
		val *= 2;
	}
	val += 12;
	return val;
}
*/

console.log(value);

//step 4
var b = 89;

value += b;

console.log(value);

//step 5
var i = 0;

for(i = 5; i < 7; i++){
	value -= 9;
}

console.log(value);

console.log("HERE IS i: ", i);

//step 6
while(i > 0){
	value++;
	i--;
}

console.log(value);

//step 7
var c = 98;

var d = 1;

value = value + c + d;

console.log(value);

function augmentA(val){
	for(var i = 0; i < 8; i++){
		val *= 2;
	}
	val += 12;
	return val;
}

//what is value + d?
console.log(value + d);