function replace() {
	var text = document.getElementById('text').value;
	jsConsole.writeLine(replaceWith(text, '&nbsp'));
}
function replaceWith(text, newSymbol) {
    var result = '';
    for (var i=0;i<text.length;i++) {
        if (text[i] == ' ') {
            result += newSymbol;
        }
        else {
            result += text[i];
        }
    }
    return result;
}