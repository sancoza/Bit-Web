// // objekti
// //ovo je objekat sastoji se od key value parova ima atribut i vrednost
// var car1 = {
//   color: 'red',
//   year: 2020,
//   name: 'Peugeot',
//   model: '2008',
// };
// var car2 = {
//   color: 'green',
//   year: 2018,
//   name: 'Audi',
//   model: 'A6',
// };

// var car1Color = car1.color;
// console.log(car1Color);

// var cars = [car1, car2];

// var cars = [
//   {
//     color: 'red',
//     year: 2020,
//     name: 'Peugeot',
//     model: '2008',
//     honk:function() {
//       return 'ćao ćao'
//     }
//   },
//   {
//     color: 'green',
//     year: 2018,
//     name: 'Audi',
//     model: 'A6',
//     honk:function() {
//       return 'ćao ćao'
//     }
//   },
// ];

// var car1Funct= car1.honk();

// var arr = [2,'dd',true, function() {return 'ćao'}];
// var secondEl=arr[3];

// var car1 = {
//   color: 'red',
//   year: 2020,
//   name: 'Peugeot',
//   owner:{
//     firstName:'Ime',
//     lastName:'Prezime'
//   },
//   model: '2008',
// };

// console.log(car1);
// // console.log(window);

// var carOwnerFirstName = car1.owner.firstName;
// console.log( carOwnerFirstName);

// var a = 22;
// window.a;//a je properti window objkta

// console.log(window.navigator);//ovde se nalaze informacije o browser-u
// console.log(window.screen);

// console.log(window.location)

// window.localStorage.setItem('userAge',50);

// var userAge = window.localStorage.getItem('userAge');
// console.log(userAge);
// window.localStorage.removeItem('userAge',50);

// console.log(window.history);

// window.alert('ćao');
// var response = window.confirm('Dali imate više od 18 godina?');
// if(response) {
//   console.log('prikazaću sadržaj')
// }

// var response = window.prompt('Koje Vam je omiljeno jelo?');

// window.localStorage.setItem('userFavoriteDish', response);

// setTimeout(function() {
//   console.log('ćao')
// },7000);

// setInterval(function() {
//   console.log('ćao')
// },1000);

// var intervalRef = setInterval(function() {
//   console.log('ćao')
// },1000);

// setTimeout(function() {
//   clearInterval(intervalRef)
// },3000);
