 
var weight = prompt("what is your weight?", "");
var time = prompt ("what was your time on the field sprint?", "");
if (parseInt(weight) > 300 && parseInt(time) < 6) {
    alert("Come to our tryout!");
}
else {
    alert("Come to our cookout!");
}

var question = "What does the dog wag?";
var defaultAnswer = "";
var myAlertText = "Correct!!!";
var correctAnswer = "tail"

var spec = prompt(question, defaultAnswer);

if (spec === correctAnswer){
    alert(myAlertText);
}
else { 
    alert("you are wrong!");
}

