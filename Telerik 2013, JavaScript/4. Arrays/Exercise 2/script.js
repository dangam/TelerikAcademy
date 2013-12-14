function CheckArrays() {
	var a = jsConsole.read("#firstarr");
	var b = jsConsole.read("#secarr");
	var firstarr = a.split(",");
	var secarr = b.split(",");
	for (var i = 0; i < firstarr.length; i++) {
		firstarr[i] = firstarr[i].trim();
		if(i < secarr.length){
			secarr[i] = secarr[i].trim();
			jsConsole.write("Compare "+firstarr[i]+" & "+secarr[i]+" = ");
			if(firstarr[i] == secarr[i]){
	    		jsConsole.writeLine("Equal");
	    	}
	    	else {
	    		jsConsole.writeLine("Not Equal");
	    	}
		}
		else {
			jsConsole.writeLine("Empty element in Second Array");
		}
	}
}
