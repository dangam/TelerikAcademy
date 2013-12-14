function CheckNum() {
	var a = jsConsole.readInteger('#input-a');
	var b  = jsConsole.readInteger('#input-b');
	var c  = jsConsole.readInteger('#input-c');
	var temp = 0;
        if (a < b)
        {
            temp = a;
            a = b;
            b = temp;
            if (b < c)
            {
                temp = b;
                b = c;
                c = temp;
                if (a < b)
                {
                    temp = a;
                    a = b;
                    b = temp;
                }
            }
            if (a < c)
            {
                temp = a;
                a = c;
                c = temp;
            }
        }
        else
        {
            if (b < c)
            {
                temp = b;
                b = c;
                c = temp;
                if (a < b)
                {
                    temp = a;
                    a = b;
                    b = temp;
                }
            }
            if (a < c)
            {
                temp = a;
                a = c;
                c = temp;

            }
        }
        jsConsole.writeLine("First: " + a);
        jsConsole.writeLine("Second: " + b);
        jsConsole.writeLine("Third: " + c);
}