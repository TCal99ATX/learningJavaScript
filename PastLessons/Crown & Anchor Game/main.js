var funds = 50;
var faces = ["crown", "anchor", "heart", "spade", "club", "diamond"];

while(funds >1 && funds < 100){
	funds = funds + 2;
	funds = funds -1;
	console.log('the value of funds is ' + funds);
}

function rand (firstNum, lastNum){
	return firstNum +Math.floor((lastNum-firstNum + 1) * Math.random()); 
}

/*
*randFace
*Randomly returnes a string respresenting one of
*the six Crown and Anchor face
*/
function randFace(){
	var randomIndex = rand(0,5);
	return faces[randomIndex];
}

console.log(randFace());
