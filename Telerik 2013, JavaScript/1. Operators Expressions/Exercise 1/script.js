function CheckNum() {
	var n = jsConsole.readInteger('#input-number');
	if(n%2 == 0){
		jsConsole.writeLine("Even");
	} else {
		jsConsole.writeLine("Odd");
	}
}