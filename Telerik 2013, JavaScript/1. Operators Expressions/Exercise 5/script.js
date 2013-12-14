function CheckNum() {
	var num = jsConsole.readInteger("#input-number");
	var p = 3;
	var mask = 1 << p;
	var numAndmask = num & mask;
	var bit = numAndmask >> p;
	jsConsole.writeLine("the number in binary is: " + num.toString(2));
	var flag = false;
	if(bit == 1) flag = true;
	(flag) ? jsConsole.writeLine("True") : jsConsole.writeLine("False");
}