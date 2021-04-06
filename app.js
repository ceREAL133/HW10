// -Створити класс для об 'єкту який описує теги
//  Властивості - назва тегу - опис його дій - масив з атрибутами(2 - 3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити - назву атрибуту - опис дії атрибуту

// function Tag(titleOfTag, action, attrs = []) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }

// let attr = {
//     titleOfAttr: 'accesskey',
//     actionOfAttr: 'Переход к области с помощью комбинации клавиш'
// } 
// let attr2 = {
//     titleOfAttr: 'accesskey',
//     actionOfAttr: 'Переход к области с помощью комбинации клавиш'
// }

// let tag = new Tag(
//     'area',
//     `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     [attr, attr2]
// );

// console.log(tag);


// Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function CarMaker(model, maker, year, maxSpeed, engCapacity, driver) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engCapacity = engCapacity;
    this.driver = addDriver;
    
    this.drive = function () {
        console.log(`driving with ${this.maxSpeed} speed`);
    }
    
    this.info = function () {
        console.log(
            this.maker, 
            this.model, 
            this.engCapacity, 
            this.year, 
            this.maxSpeed
            );
    }
    
    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed = newSpeed;
    }
    
    this.changeYear = function (newValue) {
        this.year = newValue;
    }

}



function addDriver(id, driverName, yearsOfWork) {
    this.driver.id = id;
    this.driver.driverName = driverName;
    this.driver.yearsOfWork = yearsOfWork;
}

let car1 = new CarMaker('Camry', 'Toyota', 2015, '180km/h', 3.5);

car1.driver('34', 'Vitaly', 25) 
console.log(car1);
car1.info()
