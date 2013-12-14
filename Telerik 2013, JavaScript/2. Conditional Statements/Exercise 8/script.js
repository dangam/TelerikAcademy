function CheckNum() {
	var n = jsConsole.readInteger('#input-n');
    if(n >= 100 && n < 1000){
        var c1 = parseInt(n / 100);
        var c2 = parseInt(n / 10 % 10);
        var c3 = parseInt(n % 10);
        var teen = parseInt( n % 100);
        switch (c1)
        {
            case 1: jsConsole.write("One Houndred"); break;
            case 2: jsConsole.write("Two Houndred"); break;
            case 3: jsConsole.write("Three Houndred"); break;
            case 4: jsConsole.write("Four Houndred"); break;
            case 5: jsConsole.write("Five Houndred"); break;
            case 6: jsConsole.write("Six Houndred"); break;
            case 7: jsConsole.write("Seven Houndred"); break;
            case 8: jsConsole.write("Eight Houndred"); break;
            case 9: jsConsole.write("Nine Houndred"); break;
            default: break;
        }
        if (teen >= 20)
        {
            switch (c2)
            {
                case 2: jsConsole.write(" Twenty "); break;
                case 3: jsConsole.write(" Thirty "); break;
                case 4: jsConsole.write(" Fourty "); break;
                case 5: jsConsole.write(" Fifty "); break;
                case 6: jsConsole.write(" Sixty "); break;
                case 7: jsConsole.write(" Seventy "); break;
                case 8: jsConsole.write(" Eighty "); break;
                case 9: jsConsole.write(" Ninety "); break;
                default: break;
            }
            switch (c3)
            {
                case 1: jsConsole.write("One"); break;
                case 2: jsConsole.write("Two"); break;
                case 3: jsConsole.write("Three"); break;
                case 4: jsConsole.write("Four"); break;
                case 5: jsConsole.write("Five"); break;
                case 6: jsConsole.write("Six"); break;
                case 7: jsConsole.write("Seven"); break;
                case 8: jsConsole.write("Eight"); break;
                case 9: jsConsole.write("Nine"); break;
                default: break;
            }
        }
        else
        {
            jsConsole.write(" and ");
            switch (teen)
            {
                case 1: jsConsole.write("One"); break;
                case 2: jsConsole.write("Two"); break;
                case 3: jsConsole.write("Three"); break;
                case 4: jsConsole.write("Four"); break;
                case 5: jsConsole.write("Five"); break;
                case 6: jsConsole.write("Six"); break;
                case 7: jsConsole.write("Seven"); break;
                case 8: jsConsole.write("Eight"); break;
                case 9: jsConsole.write("Nine"); break;
                case 10: jsConsole.write("Ten"); break;
                case 11: jsConsole.write("Eleven"); break;
                case 12: jsConsole.write("Twelve"); break;
                case 13: jsConsole.write("Thirteen"); break;
                case 14: jsConsole.write("Fourteen"); break;
                case 15: jsConsole.write("Fifteen"); break;
                case 16: jsConsole.write("Sixteen"); break;
                case 17: jsConsole.write("Seventeen"); break;
                case 18: jsConsole.write("Eighteen"); break;
                case 19: jsConsole.write("Nineteen"); break;
                case 0: jsConsole.write("Zero"); break
                default: break;
            }
        }
    } else if (n >= 10 && n < 99){
        var c1 = parseInt(n / 10);
        var c2 = parseInt(n % 10);
        var teen = parseInt( n % 100);
        switch (c1)
        {
            case 2: jsConsole.write("Twenty "); break;
            case 3: jsConsole.write("Thirty "); break;
            case 4: jsConsole.write("Fourty "); break;
            case 5: jsConsole.write("Fifty "); break;
            case 6: jsConsole.write("Sixty "); break;
            case 7: jsConsole.write("Seventy "); break;
            case 8: jsConsole.write("Eighty "); break;
            case 9: jsConsole.write("Ninety "); break;
            default: break;
        }
        switch (teen)
        {
            case 10: jsConsole.write("Ten"); break;
            case 11: jsConsole.write("Eleven"); break;
            case 12: jsConsole.write("Twelve"); break;
            case 13: jsConsole.write("Thirteen"); break;
            case 14: jsConsole.write("Fourteen"); break;
            case 15: jsConsole.write("Fifteen"); break;
            case 16: jsConsole.write("Sixteen"); break;
            case 17: jsConsole.write("Seventeen"); break;
            case 18: jsConsole.write("Eighteen"); break;
            case 19: jsConsole.write("Nineteen"); break;
            case 0: jsConsole.write("Zero"); break
            default: break;
        }
    } else if (n >= 0 && n < 10) {
        switch (n)
        {
            case 0: jsConsole.write("Zero"); break;
            case 1: jsConsole.write("One"); break;
            case 2: jsConsole.write("Two"); break;
            case 3: jsConsole.write("Three"); break;
            case 4: jsConsole.write("Four"); break;
            case 5: jsConsole.write("Five"); break;
            case 6: jsConsole.write("Six"); break;
            case 7: jsConsole.write("Seven"); break;
            case 8: jsConsole.write("Eight"); break;
            case 9: jsConsole.write("Nine"); break;
            default: break;
        }
    } else {
        jsConsole.writeLine("Nubmer must be in range (0, 999)");
    }
}