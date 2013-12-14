function CheckNum() {
	var n = jsConsole.readInteger('#input-number');
	for (var i = 1; i <= n; i++){
		if((i % 3 != 0) && (i % 7 != 0)){
			jsConsole.writeLine(i);
		}
	}
}