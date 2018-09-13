var add = function(number1, number2){
	return number1 + number2;
};
var subtract = function(number3, number4){
	return number3 - number4;
};
var multiply = function(number5, number6){
	return number5 * number6;
};
var divide = function(number7, number8){
	return number7 / number8;
};
$(document).ready(function() {
  $("#calculator form").submit(function(event) {
    var number1 = parseInt($("input#number1").val());
    var number2 = parseInt($("input#number2").val());
    var number3 = parseInt($("input#number3").val());
    var number4 = parseInt($("input#number4").val());
    var number5 = parseInt($("input#number5").val());
    var number6 = parseInt($("input#number6").val());
		var number7 = parseInt($("input#number7").val());
    var number8 = parseInt($("input#number8").val());
		var result1 = add(number1, number2);
		$(".result1").text(result1);
		var result2 = subtract(number3, number4);
		$(".result2").text(result2);
		var result3 = multiply(number5, number6);
		$(".result3").text(result3);
		var result4 = divide(number7, number8);
		$(".result4").text(result4);


		event.preventDefault();
  });




});












// var add = function(number1, number2){
// 	return number1 + number2;
// };
//
// var number1 = parseInt(prompt("enter a number:"));
// var number2 = parseInt(prompt("enter another number:"));
//
// alert(add(number1, number2));
//
// var subtract = function(number1, number2){
// 	return number1 - number2;
// };
//
// var number1 = parseInt(prompt("enter a number:"));
// var number2 = parseInt(prompt("enter another number:"));
//
// alert(subtract(number1, number2));
//
// var multiply = function(number1, number2){
// 	return number1 * number2;
// };
//
// var number1 = parseInt(prompt("enter a number:"));
// var number2 = parseInt(prompt("enter another number:"));
//
// alert(multiply(number1, number2));
//
// var divide = function(number1, number2){
// 	return number1 / number2;
// };
//
// var number1 = parseInt(prompt("enter a number:"));
// var number2 = parseInt(prompt("enter another number:"));
//
// alert(divide(number1, number2));
