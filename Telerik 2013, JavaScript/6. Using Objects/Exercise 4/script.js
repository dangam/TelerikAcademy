function hasProperty(object, property) {
    
    for (var i in object) {
        
        if (i==property) {
            return true;
            break;
        }
    }
    return false;
}

var Student = {
    age: 19,
    name:"Joro"
}
var point = {
    x: 1,
    y: 2
}

var studentProperty = hasProperty(Student, "name");
var pointProperty = hasProperty(point, "name");

jsConsole.writeLine(studentProperty);
jsConsole.writeLine(pointProperty);