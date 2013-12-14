function reverse() {
	var str = jsConsole.read("#num");
	var rstr = "";
	for(var i = 0; i < str.length; i++){
		rstr += str[str.length - i - 1];
	}
	jsConsole.writeLine(rstr);
}
