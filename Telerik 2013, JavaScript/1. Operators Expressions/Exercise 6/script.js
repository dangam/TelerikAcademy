function CheckNums() {
	var X = jsConsole.readInteger('#input-x');
	var Y = jsConsole.readInteger('#input-y');
	var radius = 5;
	((X * X + Y * Y) < radius * radius) ? jsConsole.writeLine("Its inside the circle") : jsConsole.writeLine("Its outside the circle");
}
