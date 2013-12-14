function CheckNum(){
	var num = jsConsole.readInteger("#input-number");
	for (var i = 1; i<=3; i++){
		if(i==3){
			var thirdnum = num%10;
			(thirdnum > 7 && thirdnum < 8) ? jsConsole.writeLine("True") : jsConsole.writeLine("False");
		}
		num /= 10;
	}
}