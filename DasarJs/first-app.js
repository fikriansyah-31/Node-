// const fs = require('fs') ;

// fs.writeFileSync('Hello guys', 'Hello From Node js')

const name = 'Fikri'; // String
var age = 24; // Number 
const hasHobbies = true ; // Boolean (true or false )

age = 65;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is a ' + 
        userName + 
        ', Age a ' + 
        userAge + 
        ' And the user has hobbies: ' + 
        userHasHobby 
    );
};

// const add = (a,b) => a + b;
// const addOne = a => a + 1;
const addRandom = () => 1 + 2;

console.log(addRandom());
// console.log(addOne(1));
// console.log(add(1,2));

console.log(summarizeUser(name, age, hasHobbies));