function CheckArrays() {
	var n = jsConsole.read("#arr");
	var arr = n.split(",");     
    var length = 1;
    var lastElement = 0;
    var bestLength = 0;
    for (var i = 0; i < arr.length-1; i++)
    {
        arr[i] *= 1;
        if (arr[i + 1] > arr[i])
        {
            length++;
        }
        else
        {
            length = 1;
        }
        if(length > bestLength)
        {
            bestLength = length;
            lastElement = i+1;
        }
    }
    jsConsole.write("{ ");
    for (var i = lastElement - (bestLength - 1); i <= lastElement; i++)
    {
        jsConsole.write(arr[i]+ " ");
    }
    jsConsole.writeLine(" }"); 
}
