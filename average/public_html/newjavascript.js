function avg(num1,num2,num3) {
    var result = (num1 + num2 + num3) / 3;
    return result;
}

var testscore1 = Number(window.prompt("Enter test score 1"));
var testscore2 = Number(window.prompt("Enter test score 2"));
var testscore3 = Number(window.prompt("Enter test score 3"));


var avgscore = avg(testscore1,testscore2,testscore3);
document.write("The average test score is " +avgscore);







