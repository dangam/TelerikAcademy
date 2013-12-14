function CheckNum() {
	var a = jsConsole.readInteger('#input-a');
	var b = jsConsole.readInteger('#input-b');
	var c = jsConsole.readInteger('#input-c');
	var D = 0;
        if (a != 0)
        {
            if (b != 0)
            {
                if (c != 0)
                {
                    jsConsole.writeLine(a+"x^2+"+b+"x+"+c+"=0");
                    jsConsole.writeLine("D = b^2 - 4 * a * b");
                    jsConsole.writeLine("D = "+b+" * "+b+" - 4 * "+a+" * "+c);
                    D = (b * b) - 4 * a * c;
                    jsConsole.writeLine("D = " + D);
                    if(D > 0){
                        jsConsole.writeLine("x1x2 = (- b +- Sqrt(D))/2*a");
                        jsConsole.writeLine("x1x2 = (- "+b+" +- Sqrt("+D+")/2*"+a);
                        jsConsole.writeLine("x1 = (- "+b+" + Sqrt("+D+"))/2*"+a);
                        var x1 = (-b + Math.sqrt(D)) / 2 * a;
                        jsConsole.writeLine("x1 = " + x1);
                        jsConsole.writeLine("x2 = (- "+b+" - Sqrt("+D+"))/2*"+a);
                        var x2 = (-b - Math.sqrt(D)) / 2 * a;
                        jsConsole.writeLine("x2 = " + x2);
                    } else if (D = 0){
                        jsConsole.writeLine("D = 0 => Tova e formula (a + b)^2");
                    }
                    else {
                        jsConsole.writeLine("D < 0 => Nqma realni koreni. Vsqko X");
                    }
                }
                else
                {
                    jsConsole.writeLine("ax^2+bx=0 ");
                    jsConsole.writeLine(a+"x^2+"+b+"x=0 ");
                    jsConsole.writeLine("x("+a+"x+"+b+")=0 ");
                    var x1 = 0;
                    var x2 = b / a;
                    jsConsole.writeLine("x1 = " + x1);
                    jsConsole.writeLine(a+"x+"+b+"=0 ");
                    jsConsole.writeLine("x= -"+b+"/"+a);
                    jsConsole.writeLine("x2 = -" + x2);
                }
            }
            else
            {
                if (c == 0)
                {
                    jsConsole.writeLine("ax^2 = 0");
                    jsConsole.writeLine(a+"x^2 = 0");
                    jsConsole.writeLine("x^2 = "+a);
                    var x = Math.sqrt(a);
                    jsConsole.writeLine("x1= " + x);
                    jsConsole.writeLine("x2= -" + x);
                }
                else
                {
                    jsConsole.writeLine("ax^2 + c=0 ");
                    jsConsole.writeLine(a+"x^2 + "+c+"=0 ");
                    jsConsole.writeLine("x^2 = -"+c+"/"+a);
                    var x = Math.sqrt(c / a);
                    jsConsole.writeLine("x1x2 = +-" + x);
                }
            }
        }
        else
        {
            if (b != 0)
            {
                if (c != 0)
                {
                    jsConsole.writeLine("bx+c=0");
                    jsConsole.writeLine(b+"x+"+c+"=0");
                    var x = c / b;
                    jsConsole.writeLine("x = " + x);
                }
            }
            else
            {
                if (c != 0)
                {
                    jsConsole.writeLine("Not Exist! "+c+" != 0");
                }
                else
                {
                    jsConsole.writeLine("0 = 0");
                }
            }
        }
}