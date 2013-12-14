function CheckArrays() {
	var n = jsConsole.read("#arr");
	var arr = n.split(",");
	var bestNum = 0;
    var len = 1;
    var bestLen = 1;
	for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] == arr[i])
        {
            len++;            
            if (len > bestLen)
            {
                bestLen = len;
                bestNum = arr[i];
            }
        }
        else len = 1;      
    }
    jsConsole.write("{ ");
    for (var i = 0; i < bestLen; i++)
    {
        jsConsole.write(bestNum+" ");
    }
    jsConsole.writeLine("}");
}
