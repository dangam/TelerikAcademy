function CheckArrays() {
	var n = jsConsole.read("#arr");
	var arr = n.split(",");
    var done = 0;
    var temp = 0;
    for (var i = 0; i < arr.length; i++)
    {
        arr[i] *= 1;
    }
    
    for (var i = 0; i < arr.length; i++)
    {
        for (var ii = done; ii < arr.length; ii++)
        {
            arr[ii]
            if (arr[ii] < arr[done])
            {
                temp = arr[done];
                arr[done] = arr[ii];
                arr[ii] = temp;
            }
        }
        done++;
    }

    for (var i = 0; i < arr.length; i++)
    {
        jsConsole.write(arr[i] + " ");
    }
}
