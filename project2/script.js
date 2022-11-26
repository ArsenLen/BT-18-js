// let text = document.querySelector(".item")
// console.log(text.textContent)

let texts = document.querySelectorAll(".item") // найти все элементы с классом item [p1, p2, .. p5]
// console.log(texts[0].textContent) // 1й
// console.log(texts[1].textContent) // 2й
// console.log(texts[2].textContent) // 3й
// console.log(texts[3].textContent) // 4й
// console.log(texts[4].textContent) // 5й
// [{textContent: "HelloWorld"}, {textContent: "Текст 2"}]

// вывести свойство textContent каждого элемента массива
for(let i = 0; i < texts.length; i++) { // сколько должен длиться цикл
    console.log(texts[i].textContent)
}
/* 
    text.length - длина массива - 5
    1. i = 0, i < texts.length, 0 < 5 - true, console.log(texts[0].textContent), i++, 
    2. i = 1, i < texts.length, 1 < 5 - true, console.log(texts[1].textContent), i++,
    3. i = 2, 2 < 5 - true, console.log(texts[2].textContent), i++,
    4. i = 3, 3 < 5 - true, console.log(texts[3].textContent), i++,
    5. i = 4, 4 < 5 -true, console.log(texts[4].textContent), i++
    6. i = 5, 5 < 5 - false - цикл окончен
*/

/*
    let i = 5
    i = i + 1 // в переменную i сохраняем значение переменной i + 1
    i += 1
    i++
    console.log(i) // 6

    let i = 5
    i = i + 2  // i = 7
    i += 2
*/

/*
    array.length - свойство, которое возвращает количество элементов в массиве
    Цикл - повторяющиеся действия; функция языка программирования, которая делает одинаковые вещи.
    Цикл for - for loop
*/

// let numbers = ["10", "50", "60", "100"] 
// let result = numbers[0] + numbers[1] + numbers[2] + numbers[3]
// console.log(result)
// Как получить текст 3го тега

let numbers = [20, 35, 50, 100, 200, 700] // numbers[3] -
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
/*
    i < numbers.length ==> i < 6
    1. i = 0, 0 < 6 - true, console.log(numbers[0]), i++,
    2. i = 1, 1 < 6 - true, consoel.log(numbers[1]), i++,
    3. i = 2, 2 < 6 - true, console.log(numbers[2]), i++,
    4. i = 3 , 3 < 6 - true, console.log(numbers[3]), i++
    5. i = 4 , 4 < 6 -true, console.log(numbers[4]), i++,
    6.i = 5, 5 < 6 -true, console.log(numbers[5]), i++
    7. i = 6, 6 < 6 - false, цикл окончен 
*/

let arr = [10, 20, 30, 40, 50]
let names = ["Arsen", "Kenan", "Ivan"]
// ДЗ.0 Есть массив arr, нужно вывести каждый элемент в консоли
// ДЗ.1 Есть массив arr, найти сумму всех чисел в массиве с помощью цикла for
// ДЗ.2 Есть массив names, вывести в консоли склеенные элементы "ArsenKenanIvan" с помощью for

// numbers.forEach(el => {
//     console.log(el)
// })
// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])
// console.log(numbers[3])
// console.log(numbers[4])
// console.log(numbers[5])
// Задача. С помощью цикла for вывести каждый элемент массива в консоль

/*
    Конкатенация строк - склеивание. 
    let fullName = "Arsen" + "Iusupov" // ArsenIusupov
    let sum = 20 + 50 // 70
    let sum = "20" + "50" // "2050"

    undefined - ничего, пустота, не объявлено. 
    NodeList - список узлов. список тегов. 

    textContent - возвращает текстовый контент тега, текст внутри тега

    querySelector() - метод, который возвращает первый попавшийся элемент по селектору
    querySelectorAll() - метод, к-й возвращает все элементы по селектору
*/