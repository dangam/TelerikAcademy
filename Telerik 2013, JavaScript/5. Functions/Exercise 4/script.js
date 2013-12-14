
function CheckDivs() {
	var divs = document.getElementsByTagName('div');
	var ndivs = divs.length;
	var s = ""
	if(ndivs > 1) s = "s"
    jsConsole.writeLine("On the page are "+divs.length+" div"+s);
}
