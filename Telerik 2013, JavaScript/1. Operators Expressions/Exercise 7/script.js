function CheckNum() {
	var num = jsConsole.readInteger("#input-number");
    while ((num < 1) || (num > 100))
    {
        jsConsole.writeLine("n <= 100");
    }
    var divide = 2;
    var MaxDivide = Math.Sqrt(num);
    var prime = true;
    while (prime && (divide <= MaxDivide))
    {
        if (num % divide == 0)
        {
            prime = false;
        }
        divide++;
    }
    jsConsole.WriteLine("Its prime = " + prime);
}