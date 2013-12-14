function goURL() {
    var url = jsConsole.read("#url");
    jsConsole.writeLine(url);
    var protokol = url.substring(0, url.indexOf(":"));
    var server = url.substring(url.indexOf(":") + 3, url.indexOf("/", url.indexOf(":") + 3));
    var resource = url.substr(url.indexOf("/", url.indexOf(":") + 3) + 1)
    var URLJSON = { "Protokol": protokol, "Server": server, "Resource": resource };
    jsConsole.writeLine("Protokol :"+ URLJSON.Protokol);
    jsConsole.writeLine("Server :" + URLJSON.Server);
    jsConsole.writeLine("Resource :" + URLJSON.Resource);
}