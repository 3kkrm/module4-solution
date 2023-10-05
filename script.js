var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === "j" || names[i].charAt(0) === "J") {
        console.log("goodbye " + names[i])
    }
    else {
        console.log("hello " + names[i]);
    }
} 