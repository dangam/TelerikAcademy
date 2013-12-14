function CheckNum() {
	var a = jsConsole.readInteger('#input-a');
	var b  = jsConsole.readInteger('#input-b');
	var c  = jsConsole.readInteger('#input-c');
	if (a == 0 || b == 0 || c == 0)
    {
        jsConsole.writeLine("Number will be 0");
    }
    else
    {
        if (a > 0)
        {
            if (b > 0)
            {
                if (c > 0)
                {
                    jsConsole.writeLine("Sign will be +");
                }
                else
                {
                    jsConsole.writeLine("Sign will be -");
                }
            }
            else
            {
                if (c > 0)
                {
                    jsConsole.writeLine("Sign will be -");
                }
                else
                {
                    jsConsole.writeLine("Sign will be +");
                }
            }
        }
        else
        {
            if (b > 0)
            {
                if (c > 0)
                {
                    jsConsole.writeLine("Sign will be -");
                }
                else
                {
                    jsConsole.writeLine("Sign will be +");
                }
            }
            else
            {
                if (c > 0)
                {
                    jsConsole.writeLine("Sign will be +");
                }
                else
                {
                    jsConsole.writeLine("Sign will be -");
                }
            }
        }
    }
}