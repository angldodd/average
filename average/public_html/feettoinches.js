function convert(feet) {
    var result = feet * 12;
    return result;
}

var feetinput = Number(window.prompt("Enter number of feet."));


var inches = convert(feetinput);
document.write("The number of inches is " + inches);


