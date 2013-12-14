function CheckNum() {
	var n = jsConsole.readInteger('#input-number');
	var flag = false;
	if (n%5==0 && n%7==0){
		flag = true;
	}
	(flag) ? jsConsole.writeLine('True') : jsConsole.writeLine('False');
}