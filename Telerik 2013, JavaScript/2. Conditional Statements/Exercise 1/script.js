function CheckNum() {
	var a = jsConsole.readInteger('#input-a');
	var b  = jsConsole.readInteger('#input-b');
	if(a < b){
		jsConsole.writeLine("The Second number was greater than the first");
		var temp = b;
		b = a;
		a = temp;
		jsConsole.writeLine("Now they are:");
		jsConsole.writeLine("First Number: " + a);
		jsConsole.writeLine("second Number: " + b);
	} else if(a == b) {
		jsConsole.writeLine("they are equal");
	} else {
		jsConsole.writeLine("first number is greater than second");
	}
}