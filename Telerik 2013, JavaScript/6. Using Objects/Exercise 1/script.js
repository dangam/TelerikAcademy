var line1 = {
    point: {
        x: -2,
        y: 1
    },
    point2: {
        x: 1,
        y: 5
    }
}

var line2 = {
    point: {
        x: 5,
        y: 3
    },
    point2: {
        x: -4,
        y: 1
    }
}

var line3 = {
    point: {
        x: 6,
        y: 1
    },
    point2: {
        x: 1,
        y: 6
    }
}

jsConsole.writeLine("The distance between the ponts is : " + calculateDistanceBetweenTwoPoints(line1.point, line1.point2));
var lenghtLine1 = calculateDistanceBetweenTwoPoints(line1.point, line1.point2)
var lenghtLine2 = calculateDistanceBetweenTwoPoints(line2.point, line2.point2)
var lenghtLine3 = calculateDistanceBetweenTwoPoints(line3.point, line3.point2)
 
jsConsole.writeLine("The three lines can form triangle => "+canFormTriangle(lenghtLine1,lenghtLine2,lenghtLine3))

function canFormTriangle(line1, line2, line3) {
    return line1 + line2 > line3 && line2+line3>line1 && line3+line1>line2;
}

function calculateDistanceBetweenTwoPoints(pointOne, PointTwo) {
    return (Math.sqrt(Math.pow(PointTwo.x - pointOne.x, 2) + Math.pow(PointTwo.y - pointOne.y, 2)));
}