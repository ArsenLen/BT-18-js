// let text = document.querySelector(".item")
// console.log(text.textContent)

// let texts = document.querySelectorAll(".item") // найти все элементы с классом item [p1, p2, .. p5]
// console.log(texts[0].textContent) // 1й
// console.log(texts[1].textContent) // 2й
// console.log(texts[2].textContent) // 3й
// console.log(texts[3].textContent) // 4й
// console.log(texts[4].textContent) // 5й
// [{textContent: "HelloWorld"}, {textContent: "Текст 2"}]

// вывести свойство textContent каждого элемента массива
// for(let i = 0; i < texts.length; i++) { // сколько должен длиться цикл
//     console.log(texts[i].textContent)
// }
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

// let numbers = [20, 35, 50, 100, 200, 700] // numbers[3] -
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }
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

// let arr = [10, 20, 30, 40, 50]
// let names = ["Arsen", "Kenan", "Ivan"]
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


// Есть массив numbers. Вывести только положительные числа.  
// let numbers = [0, -10, 20, -30, 50, 85, -100]

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 0) {
//         console.log(numbers[i])
//     }
// }

// let i = 0
// i++
// console.log(i) // 1
/*
    numbers.length = 7

    1. i = 0, 0 < 7 - true, numbers[0](0) > 0 - false - не выполняем console.log(), i++
    2. i = 1, 1 < 7 - true, numbers[1](-10) > 0 - false - не выполняем console.log(), i++
    3. i = 2, 2 < 7 - true, numbers[2](20) > 0 - true - console.log(numbers[2]) log(20), i++   
    4. i = 3, 3 < 7 - true, numbers[3](-30) > 0 false - не выполняем console.log(), i++
    5. i = 4, 4 < 7 - true, numbers[4](50) > 0 true - console.log(numbers[4]) log(50), i++
    6. i = 5, 5 < 7 - true, numbers[5](85) > 0 true- console.log(numbers[5]) log(85), i++
    7. i = 6, 6 < 7 - true, numbers[6](-100) > 0 false - не выполняем console.log()
    8. i = 7, 7 < 7 - false цикл окончен
*/

// Если переменная degree(градусы) больше 10, то в консоли отображать "Надеть ветровку"
// Если равны, то вывести в консоли "Выбирай сам"
// иначе надеть куртку. 

// let degree = 10

// if(degree > 10) {
//     console.log("Надень ветровку")
// } else if(degree == 10) {
//     console.log("Выбирай сам")
// } else {
//     console.log("Надень куртку")
// }

// Задача. Есть переменная sum. Если сумма покупок пользователя больше 1000, то в консоли отображаем
// "Ваша скидка = 10%"
// Если сумма больше 1500, то "Ваша скидка 15%"
// Иначе "У вас нет скидок"
// && - and - логическое И или булевое И

// let sum = 50
// if(sum > 1500) {
//     console.log("Скидка 15%")
// } else if(sum > 1000) {
//     console.log("Скидка 10%")
// } else {
//     console.log("Нет скидок")
// }

/*
    1. Degree больше 10 - if()
    2. Degree не больше 10 - else

    10 не больше чем 10. true
    3 > 10 - false

*/

/*
    if(условие) {

    }

    if(условие) {
        действие, тело, выражение
    } else {
        действие, тело, выражение
    }

    if(условие) {
        действие, тело, выражение
    } else if(условие, если первое не подошло) {

    } else if(условие, если верхние не true){
        действие, тело, выражение
    } else {
        действие, тело, выражение
    }
    

    Типы данных:
    1. String - строка - "Hello World" -> ["H", "e"] 
    2. Number - число - 10, 20, 20.23423432. NaN - not a number. 
    3. Boolean - булевый - true/false. Операторы сравнения >, <, >=, <=, ==, ===
    4. Object - объект - {
        name: "Arsen", 
        age : 24
        profession: "Frontend Developer",
        hobbies : ["Football", "Design"]
    }.
        Array - частный случай объекта
    5. undefined - пустота. 

*/



/*
    getAttribute("attributeName") - метод, который позволяет найти значение любого атрибута
    setAttribute("attributeName", "attributeValue") - метод, который позволяет добавить атрбибут со значением к тегу

    <img src="./img1.jpg" alt="" />
    src - attributeName - название атрибута
    "./img1.jpg" - attributeValue - значение атрибута
*/


// let link = document.querySelector("a")
// console.log(link.getAttribute("href"))

// link.setAttribute("href", "https://instagram.com")
// console.log(link.getAttribute("href"))
// attr()

// Задача. 1. Добавить к атрибуту src путь к картинке, чтобы она отобразилась
// Задача.2. Добавлять картинку только после нажатия на кнопку. 
// Задача.3. Создать вторую кнопку - убрать картинку и при нажатии на нее удалять картинку с экрана.


// Задача. Вывести в консоли ссылки каждого тега a

// let links = document.querySelectorAll("a")

// for(let i = 0; i < links.length; i++) {
//     // links[i] - каждый элемент
//     console.log(links[i].getAttribute("href"))    
// }

// Задача2. Вывести в консоли ссылки каждого тега a по нажатию на кнопку "Получить ссылки"
// let button = document.querySelector("button")
// let links = document.querySelectorAll("a")

// button.addEventListener("click", function() {
//     for(let i = 0; i < links.length; i++) {
//         // links[i] - каждый элемент
//         console.log(links[i].getAttribute("href"))    
//     }
// })
/*
    addEventListener() - метод, который позволяет сделать действие в ответ на событие
    первым аргументов получаем строку типа события - "click", "submit"
    вторый аргументов получаем коллбэк функцию
    function() {} - анонимная коллбэк функция
*/


/*
ДЗ. 
    При нажатии на каждый продукт отображать его название и его цену в div.total

*/


let firstProduct = document.querySelector(".product")
let products = document.querySelectorAll(".product")

for(let i = 0; i < products.length; i++) {
    // console.log(products[i])
    products[i].addEventListener("click", function() {
        products[i].classList.toggle("active")
    })
}
/*
    ДЗ. При нажатии на каждый элемент удалять класс active у всех, а к нажатому элементу добавлять
*/

// console.log(firstProduct.classList.value)

// Задача. Добавить класс active к элементу
// firstProduct.classList.add("active")
// Задача. При нажатии на каждый элемент добавлять класс active к нему. 

/*
    classList - свойство тега, которое отображает список классов тега
    classList.value - отображает классы тега в текстовом формате - типДанных - строкаString
    classList.add(className) - метод, который позволяет добавить класс
    classList.remove(className) - метод, который позволяет удалить класс
    classList.toggle(className) - метод, который позволяет добавить класс, если его нет
                                и удалить его, если он есть
*/


