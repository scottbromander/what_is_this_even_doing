//What is this even doing! 1-1

var value = 0;

var a = "4";

// step 1
for(var i = 3; i < 5; i++){
	value++;
}

// step 2
if(value >= a){
	value = 1;
} else {
	value = 9;
}

// step 4
for(var i = 0; i < 3; i++){
	value++;
}

// step 5
var b = 2;

while(b < 10){
	value *= 2;
	b++;
}

// step 6
b = 0;

while (b < 2){
	value /= 2;
	b++;
}

// step 7
while (b < 4){
	value++;
	b++;
}

// step 8
for(i = 0; i < 7; i++){
	value += 3;
}

// step 9
var c = "97";

//what is value + c?
console.log(value + c);