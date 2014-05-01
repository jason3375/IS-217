
/*
 * GET home page.
 */
var math = require("../public/javascripts/math.js");


exports.index = function(req, res){
  res.render('index', { title: 'Welcome to my Calculator' });
};

exports.result = function(req, res){
	var num1 = Number(req.body.x);
	var num2 = Number(req.body.y);
	var operation = req.body.operation;
  var answer;
	if (operation == '+') {
		answer = math.add(num1,num2);
	} else if (operation == '-') {
		answer = math.subtract(num1,num2);
	} else if (operation == '*') {
		answer = math.multiply(num1,num2);
	} else {
		answer = math.divide(num1,num2);
	}

	res.render('index', { title: '', answer: answer });
  answer = null;
};

