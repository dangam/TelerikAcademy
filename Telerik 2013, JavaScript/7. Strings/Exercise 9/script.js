function Go() {
	var text = jsConsole.read("#text")+" ";
	var emailArr = [];
	var index = text.indexOf("@");
	while (index > -1) {
		if (text[index-1]!=" " && text[index+1]!=" ") {
			var identifier = text.substring(text.lastIndexOf(" ", index - 1), index);
			var host = text.substring(index + 1, text.indexOf(".", index + 1));
			var domain = text.substring(text.indexOf(".", index + 1) + 1, text.indexOf(" ", text.indexOf(".", index + 1) + 1));
			var email = identifier + "@" + host + "." + domain;
			emailArr.push(email);
			index = text.indexOf("@",index+1);
		}
	}
	for(var i = 0; i < emailArr.length; i++){
		jsConsole.writeLine(emailArr[i]);
	}
}