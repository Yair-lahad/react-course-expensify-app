// const person = {
//   name: "Yair",
//   age: 27,
//   location: {
//     city: "Tel-aviv",
//     temp: 23,
//   },
// };
// const { name = "Anonymous", age } = person;
// const { temp: temperature, city } = person.location;
// console.log(name + " is " + age);
// console.log("its " + temperature + " degrees in " + city);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
console.log( 'You are i in: ' +address[1] + ' ' + address[2]+ '.')
const [, city, state] = address;
console.log( 'You are i in: ' +city + ' ' + state+ '.')

