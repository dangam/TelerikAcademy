function findYoungest(array) {
    var index = 0;
    var age = array[0].age;
    for (var i = 1; i < array.length; i++) {
        if (array[i].age<age) {
            age = array[i].age;
            index = i;
        }
    }
    jsConsole.writeLine("The youngest person is " + array[index].firstName + " " + array[index].lastName );
}

var persons = [
                {firstName: "Pesho", lastName: "Hilkov", age: 47},
                {firstName: "Gosho", lastName: "Milkov", age: 34},
                {firstName: "Tosho", lastName: "Traikov", age: 12}
              ]

findYoungest(persons);