function reverseNum(num){
	var rnum = "";
	num *= 1;
	while(num > 0){
		rnum = rnum + num%10;
		num /= 10;
		num = parseInt(num);
	}
	return rnum;
}
function CheckNum() {
	var num = jsConsole.read("#num");
	num = reverseNum(num);
	jsConsole.writeLine(num);
}
