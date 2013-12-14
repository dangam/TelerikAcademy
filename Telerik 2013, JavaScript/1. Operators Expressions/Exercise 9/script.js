function Check() {
        var X = jsConsole.readInteger('#input-x');
        var Y = jsConsole.readInteger('#input-y');
        var KR = 3;
        var KOX = 1;
        var KOY = 1;
        if (((X - KOX) * (X - KOX) + (Y - KOY) * (Y - KOY)) <= KR * KR)
        {
            jsConsole.writeLine("Point ("+X+","+Y+") is inside circle K(("+KOX+","+KOY+"), "+KR+")");
        }
        else
        {
            jsConsole.writeLine("Point ("+X+","+Y+") is outside circle K(("+KOX+","+KOY+"), "+KR+")");
        }
        if (((X >= -1) && (X <= 5) && (Y <= 1) && (Y >= -1)))
        {
            jsConsole.writeLine("Point ("+X+","+Y+") is inside the rectangle.");
        }
        else
        {
            jsConsole.writeLine("Point ("+X+","+Y+") is outside the rectangle.");
        }
}