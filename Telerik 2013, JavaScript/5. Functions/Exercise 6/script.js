function CheckNum() {
	var numpos = jsConsole.read("#num");
	var array = jsConsole.read("#array");
	array.trim();
	var arr = array.split(",");
	numpos *= 1;
	if(numpos < arr.length && numpos != 1){
		var n = arr[numpos-1]*1;
		var before = arr[numpos-2]*1;
		var next = arr[numpos]*1;
		var is = "";
		jsConsole.writeLine("The number "+n+" is at position "+numpos);
		if(n > before) is = "greater than";
		else if(n == before) is = "equal with";
		else is = "lower than";
		jsConsole.writeLine(n+" is "+is+" the num before it");
		if(n > next) is = "greater than";
		else if(n == next) is = "equal with";
		else is = "lower than";
		jsConsole.writeLine(n+" is "+is+" the num after it");
	}
	else if(numpos == arr.length){
		var n = arr[numpos-1]*1;
		var before = arr[numpos-2]*1;
		if(n > before) var is = "greater";
		else if(n == before) var is = "equal";
		else var is = "lower";
		jsConsole.writeLine("The input position "+numpos+" ("+n+") is in the last index of the array. So I will compare its num only with the num before ("+before+"), and its: "+is);
	}
	else if(numpos == 1){
		var n = arr[numpos-1]*1;
		var next = arr[numpos]*1;
		if(n > next) var is = "greater";
		else if(n == next) var is = "equal";
		else var is = "lower";
		jsConsole.writeLine("The input position "+numpos+" ("+n+") is in the first index of the array. So I will compare its num only with the next num ("+next+"), and its: "+is);
	
	}
	else {
		jsConsole.writeLine("The input position is out of the array!");
	}
}
