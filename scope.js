var name = "Jen";

var secretFunction = function() {
    var pinCode = [1,2,3,4];
    console.log("The name can be accessed inside the function:", name);
}

secretFunction()
// console.log(pinCode)


var filterNamesByFirstLetter = function (names, letter){
    var filteredNames = [];
    for (let name of names){
        if (name[0] === letter){
            filteredNames.push(name);
        }
    }
    console.log(name);
    return filteredNames;
}

var students = ["Alice", "Bob", "Ada", "Brian", "Adam"];

var filteredStudents = filterNamesByFirstLetter(students, 'A');
console.log(filteredStudents);

let isItFive = function (number){
    let result;
    if(number === 5){
        result = true;
    } else{
        result = false;
    }
    return result;
}



// let temperature = 30;

// if (temperature > 15) {
//     let jacket = false;
//     var happy = true;
// } else {
//     let jacket = true;
//     var happy = false;
// }

// console.log('jacket after if-else blocks:', jacket);
// console.log('happy after if-else blocks:', happy);


let calculateEnergy = function (mass) {
    const speedOfLight = 299792458;
    // speedOfLight++;
    return mass * speedOfLight **2;
}

let energyofme = calculateEnergy(75);
console.log(energyofme);

const song = {
    title: "Raspberry Beret",
    artist: "Prince"
}

console.log(song);
song.title = "When Doves Cry"
console.log(song);
