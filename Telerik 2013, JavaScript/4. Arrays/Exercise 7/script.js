function SortArray(n) {
    var arr = n;
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
    return arr;
}

function CheckArrays() {
	var n = jsConsole.read("#arr");
	var arr = n.split(",");
    var key = jsConsole.read("#key");
    key *= 1;
    for (var i = 0; i < arr.length; i++)
    {
        arr[i] *= 1;
    }

    var found = false;
    var index = 0;

    SortArray(arr);

    var middle = arr.length / 2;
    middle = parseInt(middle);

    if (key == arr[middle])
    {
        found = true;
        index = middle;
    }
    else if (key < arr[middle])
    {
        for (var i = 0; i < middle; i++)
        {
            if (key == arr[i])
            {
                found = true;
                index = i;
            }
        }
    }
    else
    {
        for (var i = middle+1; i < arr.length; i++)
        {
            if (key == arr[i])
            {
                found = true;
                index = i;
            }
        }
    }

    if(found) {
        jsConsole.writeLine(key+" is found inside the array. arr["+index+"] = "+key);
    }
    else {
        jsConsole.writeLine(key+" is not found inside the array");
    }
}
