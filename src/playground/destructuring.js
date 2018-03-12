

//
//  Object destructing



// const person ={
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 88
//     }
// }


// const {name: firstName = 'Anonymous', age} = person;


// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;


// if(city && temperature){
//     console.log(`It's ${temperature} is ${city}`);
// }



// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//        // name: 'Penguin'
//     }
// }


// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);


//
// Array Destructuring
//


//const address = ['1299 s Juniper street', 'Philadephia', 'Pennsylvania', '19147'];

const address = [];

const [, city, state = 'New York', zip] = address

console.log(`You are in ${state}`)

const item = ['Coffee (iced)', '$2.00', '$2.70', '$2.75'];

const [coffee, ,medium] = item


console.log(`A medium ${coffee} costs ${medium}`)