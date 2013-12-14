function CheckArrays() {
	var n = jsConsole.read("#arr");
	var arr = n.split(",");
    var tempmost = 1;
    var tempnumber = 0;
    var most = 1;
    var mostnumber = 0;
    for (var i = 0; i < arr.length; i++)
    {
        arr[i] *= 1;
    }
    for (var i = 0; i < arr.length; i++)
    {
        tempnumber = arr[i];
        for (var ii = i+1; ii < arr.length; ii++)
        {
            if (tempnumber == arr[ii])
            {
                tempmost++;
            }
        }
        if (tempmost > most)
        {
            most = tempmost;
            mostnumber = tempnumber;
        }
        tempmost = 0;
    }
    jsConsole.writeLine(mostnumber+" ("+most+" times)");
}
