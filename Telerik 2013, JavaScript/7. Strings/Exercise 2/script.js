function check() {
	var str = jsConsole.read("#exp");
	str.trim();
	var nob = 0;
	var ncb = 0;
	var correct = true;
	for(var i = 0; i < str.length; i++){
		if(str[i] == "("){
			nob++;
		}
		if(str[i] == ")"){
			ncb++;
			if(nob < ncb){
				correct = false;
			}
		}
	}
	if(nob > ncb) correct = false;
	(correct) ? jsConsole.writeLine("Correct Expression") : jsConsole.writeLine("Incorrect Expression");
}
