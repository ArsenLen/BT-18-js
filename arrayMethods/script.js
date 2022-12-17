// forEach - выполняет коллбэк функцию для каждого из элементов массива
//////////////////////////////  forEach   //////////////////////////////

// Вывести в консоли Hello + имя. 1)Hello, Arsen. 2)Hello, Kenan
// let arr = ["Arsen", "Kenan", "Aleksandr"]

// arr.forEach(function(el) {
//     console.log(`Hello ${el}`)
// })

// // Вывести в консоль квадрат каждого числа из массива
// let numbers = [2, 4, 6, 8, 10] // 4, 16, 36, 64, 100

// numbers.forEach(function(el) {
//     console.log(el)
// })

// // Вывести в консоли имя пользователя каждого объекта из массива
// let users = [
//     {
//         name: "Arsen",
//         lastName: "Iusupov"
//     },
//     {
//         name: "Kenan",
//         lastName: "Aliev"
//     },
//     {
//         name: "Aleksandr",
//         lastName: "Piskorskiy"
//     }
// ]

// let user = {
//     name: "Arsen",
//     lastName: "Iusupov"
// }
// console.log(user.name)
// Arsen 
// Kenan
// Aleksandr

// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

/*  
    forEach возвращает undefined. Используем тогда, когда просто нужно сделать действие над каждым 
    Выполнится столько раз, сколько элементов в массиве
*/


//////////////////////////////  filter   //////////////////////////////
/*
    filter - возвращает новый массив, в котором остаются только те элементы, которые 
    удовлятворяют условию, которое указано в коллбек функции, переданной в filter
*/

// Создать новый массив, в котором будут только числа больше 50
// Создать новый массив, в котором будут только числа меньше 50
// let arr = [30, 40, 50, 60, 70, 80]

// let fitleredNums = arr.filter(function(num) {
//     return num > 50
// })

// console.log(fitleredNums)

// let fitleredNums1 = arr.filter(function(num) {
//     return num < 50
// })

// console.log(fitleredNums1)

// Отфильтровать массив объектов таким образом, чтоб остались только продукты цена которых больше 70

let products = [
    {
        name: "Молоко",
        price: 80
    },
    {
        name: "Кефир",
        price: 75
    },
    {
        name: "Сахар",
        price: 90
    },
    {
        name: "Помидоры",
        price: 30
    },
    {
        name: "Сода",
        price: 10
    }
]



/* Методы строк */

///////////////////////// includes /////////////////////////////// 
let str = "Hello"

console.log(str.includes("h")) // Есть ли буква l внутри строки str


// Проверить содержится ли подстрока "ed" в марке машины

let cars = [
    { mark : "Mercedes-Benz", model : "S600", year : "1999", price : 15000 },
    { mark : "BMW", model : "M3", year : "2002", price : 18000 },
    { mark : "Audi", model : "Q3", year : "2006", price : 14000 },
    { mark : "VW", model : "Golf-4", year : "1998", price : 8000 },
    { mark : "Toyota", model : "MarkX", year : "2005", price : 13000 },
    { mark : "Lexus", model : "RX300", year : "2007", price : 20000 },
    { mark : "Mercedes-Benz", model : "S500", year : "1995", price : 12000 },
]


// Исправьте функцию filterCarsByString() таким образом, чтобы она проверяла любую строку, которую
// мы передадим ей аргументом
function filterCarsByString(str) {
    // Проверяет содержится ли полученная аргументом подстрока в строке свойства mark каждого автомобиля
    return cars.filter(function(car) {
        // условие по которому происходит фильтрация
        // console.log(car.mark) - получаю доступ к свойсвту марки каждого авто
        return car.mark.includes(str)
        // return car.price > 13000
    })
}
/*
    1. Что функция filterCarsByString должна принимать аргументом?
    2. Что функция должна возвращать?
*/

console.log(filterCarsByString("ed")) // [{Mercedes-Benz}, {Mercedes-Benz}]
console.log(filterCarsByString("e")) // [{Mercedes-Benz}, {Lexus} ,{Mercedes-Benz}]
console.log(filterCarsByString("Iph")) // []
console.log(filterCarsByString("Ip"))

// console.log(filteredCars)

/*
    Метод фильтр возвращает отфильтрованный
    1. 
    { mark : "Mercedes-Benz", model : "S600", year : "1999", price : 15000 } - текущий элемент - car
     car.mark = "Mercedes-Benz"
     car.mark.includes("ed") Есть ли буквы "ed" внутри строки car.mark? TRUE
     Если условие верно, то добавляем полностью элемент в итоговый массив
    
     2.
     { mark : "BMW", model : "M3", year : "2002", price : 18000 },
     car.mark = "BMW"
     car.mark.includes("ed") Есть ли буквы "ed" внутри строки car.mark? FALSE
     Если условие ложно, то не добавляем элемент в итоговый массив

*/


// Написать функцию, которая принимает строку и возвращает ту же строку, но все буквы переводит в верхний регистр
// makeStringUppercase("hello") => HELLO
// str.toUpperCase() - метод, который позволяет перевести строку в верхний регистр
// makeStringUppercase("hello") // HELLO
// makeStringUppercase("fsdgdfd") // FSDGDFD

function makeStringUppercase(lowerCaseStr) {
    return lowerCaseStr.toUpperCase()
}

console.log(makeStringUppercase("hello")) // hello
// makeStringUppercase("world") // world
console.log(makeStringUppercase("world"))






// let name = function() {
//     return "Arsen"
// }
// console.log(name()) // Arsen 