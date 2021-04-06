// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// class Car {
//     constructor(model, maker, year, maxSpeed, engCapacity, driver = {}) {
//         this.model = model;
//         this.maker = maker;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engCapacity = engCapacity;
//         this.driver = driver;

//     }

//     drive() {
//         console.log(`driving with ${this.maxSpeed} speed`);
//     }

//     info() {
//         console.log(this.maker, this.model, this.engCapacity, this.year, this.maxSpeed);
//     }

//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     }

//     changeYear(newValue) {
//         this.year = newValue;
//     }

// }

// class Driver {
//     constructor(driverId, driverName) {
//         this.driverId = driverId;
//         this.driverName = driverName;
//     }
// }

// let driver1 = new Driver(123, 'Tolyan');
// let driver2 = new Driver(911, 'Vanya');
// let camry = new Car(
//     'Camry',
//     'Toyota',
//     2015,
//     '180km/h',
//     3.5,
//     {driver1, driver2}
// );

// console.log(camry);
// camry.info();
// camry.increaseMaxSpeed('200km/h');
// camry.changeYear(2019);

// console.log(camry);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Cinderella {
    constructor(name, age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;

    }
}

class Prince{
    constructor(name, age, foundedCrocs){
        this.name = name;
        this.age = age;
        this.foundedCrocs = foundedCrocs;
    } 
}

let cinderella1 = new Cinderella('True Cinderella', 19, 26);
let cinderella2 = new Cinderella('Ann', 19, 28);
let cinderella3 = new Cinderella('Sophie', 29, 27);
let cinderella4 = new Cinderella('Claire', 21, 28);
let cinderella5 = new Cinderella('Martha', 18, 29);
let cinderella6 = new Cinderella('Sof', 29, 30);
let cinderella7 = new Cinderella('Helga', 29, 31);
let cinderella8 = new Cinderella('Kate', 21, 32);
let cinderella9 = new Cinderella('Chris', 21, 33);
let cinderella10 = new Cinderella('Julia', 30, 34);

let cinderellasArr = [
    cinderella1,
    cinderella2,
    cinderella3,
    cinderella4,
    cinderella5,
    cinderella6,
    cinderella7,
    cinderella8,
    cinderella9,
    cinderella10
]

let erick = new Prince('Erick', 23, 26);

console.log(erick);

for (let i = 0; i < cinderellasArr.length; i++) {
    if (erick.foundedCrocs === cinderellasArr[i].footSize){
        console.log(`this is the true Cinderella- ${cinderellasArr[i].name}`);
    }
    
}