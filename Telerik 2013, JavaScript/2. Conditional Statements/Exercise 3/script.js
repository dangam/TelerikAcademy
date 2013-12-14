function CheckNum() {
	var a = jsConsole.readInteger('#input-a');
	var b  = jsConsole.readInteger('#input-b');
	var c  = jsConsole.readInteger('#input-c');
	var biggest = a;
    if(biggest < b){
        biggest = b;
    }
    if(biggest < c){
        biggest = c;
    }
    jsConsole.writeLine("Biggest is: " + biggest);
}