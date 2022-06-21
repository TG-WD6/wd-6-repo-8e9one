// let x = 2

// if (x === 3) {
//     console.log("you're number was 3")
// } else if (x > 4) {
//     console.log("you're number was greater than 4 but less than 12")
// } else if (x > 11) {
//     console.log("you're number was greater than 11")
// } else if (x < 3) {
//     console.log("you're number was less than 3")
// }

// let inputData = document.getElementById('inputData');

// function parameterFunction(inputData) {
//     console.log(`this is your input ${inputData}.`)
// }

// function functionHelloWorld() {
//     console.log('HELLO WORLD')

// }

// let inputData = document.getElementById('inputData');

// function parameterFunction(inputData) {
//     console.log(`this is your input ${inputData.value}.`)
//}

// function randomNumber() {
//     console.log(Math.random())
// }
// function randomNumber(x) {
//     x = 10;
//     console.log(Math.floor(Math.random() * x))
// }

// const group = ['Bob', 'luis', 'benn', 'john']

// function luisInGroup() {

//     if (group.includes('luis') === true) {
//         console.log('Yes luis is in this group.')
//     } else {
//         console.log('no luis is not in this group.')
//     }
// }

// const group = ['Bob', 'luis', 'benn', 'john']
// let inputData = document.getElementById('inputData');

// function parameterFunction(inputData) {
//     console.log(`this is your input ${inputData.value}.`)
//     if (group.includes(inputData.value) === true) {
//         console.log('Yes luis is in this group.')
//     } else {
//         console.log('no luis is not in this group.')
//     }
// }
// const arrayNummer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(arrayNummer);

// let arrayFruit = ['Appel', 'Aardbei', 'Druif', 'Bessen', 'Banaan']

// console.log(arrayFruit);

// console.log(arrayFruit[0], arrayFruit[1]);

// console.log(arrayFruit[Math.floor(Math.random() * 5)]);

// arrayFruit.splice(0, 1, 'Peer')

// arrayFruit.splice(0, 2, 'Aardbei', 'Peer')

// console.log(arrayFruit)

// const dutchSports = ['Voetbal', 'Hockey', 'Schaatsen']

// for (let i = 0; i < dutchSports.length; i++) {
//     console.log(`index ${i} is hier ${dutchSports[i]}`)
// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log([i]);
// }

// for (let i = 1; i <= 3; i++) {
//     console.log(`this is round ${i}`);
//     for (let q = 1; q <= 10; q++) {
//         console.log(q)
//     }
// }

// for (let i = 1; i <= 3; i++) {
//     console.log(`this is round ${i}`);
//     for (let q = 1; q <= 10; q++) {
//         console.log(q * i)
//     }
// }

// let fiboArray = [0, 1]
// for (let i = 2; i <= 50; i++) {
//     fiboArray[i] = fiboArray[i - 2] + fiboArray[i - 1];
// }
// console.log(fiboArray);

// let dutchSports = ['Voetbal', 'Hockey', 'Schaatsen']

// dutchSports.push('Zeilen', 'Zwemmen')
// dutchSports.unshift('Volleybal')

// let ballSports = dutchSports.splice(0, 3)
// console.log(ballSports);

// let dutchSports = ['Voetbal', 'Hockey', 'Schaatsen']

// dutchSports.push('Zeilen', 'Zwemmen')
// dutchSports.unshift('Volleybal')

// let ballSports = dutchSports.splice(0, 3)
// console.log(`ballSports zijn ${ballSports}`);

// dutchSports.shift(ballSports);

// console.log(`rest zijn ${dutchSports}.`)

// let dutchSports = ['Voetbal', 'Hockey', 'Schaatsen']

// dutchSports.push('Zeilen', 'Zwemmen')
// dutchSports.unshift('Volleybal')

// console.log(`Alfabetische volgorde ${dutchSports.sort()}.`)

// let dutchSports = ['Voetbal', 'Hockey', 'Schaatsen']

// dutchSports.push('Zeilen', 'Zwemmen')
// dutchSports.unshift('Volleybal')

// for (let i = 0; i < dutchSports.length; i++) {
//     console.log(dutchSports[i]);

// }


// let dutchSports = ['Voetbal', 'Hockey', 'Schaatsen']

// dutchSports.push('Zeilen', 'Zwemmen')
// dutchSports.unshift('Volleybal')

// for (let i = 0; i < dutchSports.length; i++) {
//     let sportsLength = dutchSports[i].length; console.log(`the length of the word ${dutchSports[i]} is ${sportsLength}`)
// }

// function pet(name, type) {
//     this.name = name
//     this.type = type
// }

// let functionPet = new pet('Mister', 'cat')
// console.log(functionPet)

// const Mister = Object.create(functionPet)
// Mister.name = 'MisterFunction';
// Mister.type = 'catFunction';

// console.log(Mister)

// let persoon1 = {
//     name: 'jo',
//     age: 12
// }
// let persoon2 = {
//     name: 'jojo',
//     age: 24
// }
// let persoon3 = {
//     name: 'jojojo',
//     age: 36
// }
// let persoon4 = {
//     name: 'mo',
//     age: 10
// }
// let persoon5 = {
//     name: 'momo',
//     age: 20
// }
// let persoon6 = {
//     name: 'momomo',
//     age: 30
// }
// let persoon7 = {
//     name: 'bob',
//     age: 14
// }
// let persoon8 = {
//     name: 'bobob',
//     age: 28
// }
// let persoon9 = {
//     name: 'bobobob',
//     age: 42
// }
// let persoon10 = {
//     name: 'kevin',
//     age: 2
// }

// let arrayPersonen = [persoon1, persoon2, persoon3, persoon4, persoon5, persoon6, persoon7, persoon8, persoon9, persoon10]

// arrayPersonen.sort(function (a, b) {
//     return a.age - b.age;
// });

// console.log(arrayPersonen)

// class clubClass {
//     constructor(name, type, amount) {
//         this.name = name
//         this.type = type
//         this.amount = amount
//     }
// }
// let clubInfo = new clubClass('Extreme breien', 'gevaarlijk', 10)

// console.log(clubInfo)

// class clubClass {
//     constructor(naam, type, aantal) {
//         this.naam = naam
//         this.type = type
//         this.aantal = aantal
//     }
// }
// let clubInfo = new clubClass('Extreme breien', 'gevaarlijk', 10)
// class contactInformatie {
//     constructor(adres, tel, contactPersoon) {
//         this.adres = adres
//         this.tel = tel
//         this.contactPersoon = contactPersoon
//     }
// }
// let persoonExample = new contactInformatie('pindakaasstraat 420', 064206666, 'Bob')

// clubInfo = { clubInfo, persoonExample }
// clubClass = { clubClass, contactInformatie }
// console.log(clubInfo)
// console.log(clubClass)

const group = ['bob', 'luis', 'benn', 'john']
let inputData = document.getElementById('inputData');

function parameterFunction() {
    console.log(`this is your input ${inputData.value}.`)
    if (group.includes(inputData.value) === true) {
        console.log(`yes ${inputData.value} is in this group.`)
    } else {
        console.log(`no ${inputData.value} is not in this group.`)
    }
}
