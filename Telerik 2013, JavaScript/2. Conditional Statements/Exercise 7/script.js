function CheckNum() {
	var a = jsConsole.readInteger('#input-a');
	var b = jsConsole.readInteger('#input-b');
	var c = jsConsole.readInteger('#input-c');
    var d = jsConsole.readInteger('#input-d');
    var e = jsConsole.readInteger('#input-e');
	var biggest = a;
    var whichnum = "first";
    if(biggest < b){
        biggest = b;
        whichnum = "second";
    }
    if(biggest < c){
        biggest = c;
        whichnum = "third";
    }
    if(biggest < d){
        biggest = d;
        whichnum = "fourth";
    }
    if(biggest < e){
        biggest = e;
        whichnum = "fifth";
    }
    jsConsole.writeLine("The Biggest number is the "+whichnum+" and its value is: "+biggest);
}
