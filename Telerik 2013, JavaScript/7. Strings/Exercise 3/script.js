function CheckOcc(word, text){
	var regExp = new RegExp(word, "gi");
   	return text.match(regExp) ? text.match(regExp).length : 0;  
}
function CheckNum() {
	var text = jsConsole.read("#text");
	var word = jsConsole.read("#word");
	var occurences = CheckOcc(word, text);
	if(occurences > 0){
		var s = ""
		if(occurences > 1) var s = "s"
		jsConsole.writeLine("the word was found: "+occurences+" time"+s);
	}
	else {
		jsConsole.writeLine("the word wasnt found in the text");
	}
}
