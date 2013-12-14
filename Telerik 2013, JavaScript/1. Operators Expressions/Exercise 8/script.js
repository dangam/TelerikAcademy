function Check() {
	var a = jsConsole.readInteger('#input-a');
	var b = jsConsole.readInteger('#input-b');
	var h = jsConsole.readInteger('#input-h');
	var area = ((a + b) * h) / 2;
	jsConsole.writeLine('The Area is: ' + area);
}