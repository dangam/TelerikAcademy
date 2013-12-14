function Go() {
    var text = document.getElementById('text').value;
    var index = text.indexOf("<a");
	while (index>-1) {
		text = text.replace("<a href", "[URL");
		text = text.replace("</a>", "[/URL]");
		text = text.replace('">', ']');
		index = text.indexOf("<a",index+1);
	}
	jsConsole.writeLine(text);
}