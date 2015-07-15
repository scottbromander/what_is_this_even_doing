//What is this even doing! 1-5

var value = 0;

//step 1
var i = 10;

while(i > 5){
	value += 12;
	i--;
}

//step 2
if(value > 60){
	value = 6;
} else {
	value = 5;
}

//step 3
var a = 92;
var b = 41;
var c = 37;

a = a + (b - c);

value += a;

//step 4
for(i = i; i > 0; i--){
	value--;
}

//step 5
value = augmentA(value);

//step 6
b = augmentA(c - 7);
b = (b/100);

for(i = 0; i < 6; i++){
	value += b;
}

//step 7
i = 3;

while(i > 0){
	value -= 2;
	i--;
}

//step 8
value = value - 9200;
var d = "856";

function augmentA(val){
	val = val * val;
	return val;
}

//What is value + d?
console.log(value + d);