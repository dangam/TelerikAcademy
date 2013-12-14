function CheckNum() {
	var num = jsConsole.read("#num");
	var array = jsConsole.read("#array");
	array.trim();
	var arr = array.split(",");
	var have = 0;
	for (var i = 0; i < arr.length; i++){
		arr[i].trim();
		if(arr[i] != "") arr[i] *= 1;
		if(arr[i] == num) have++;
	}
	if(have > 0) jsConsole.writeLine("the num is found inside the array: "+have+" times"); else jsConsole.writeLine("num is not found in the array");
}
