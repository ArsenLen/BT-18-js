/*
    ПРИ НАЖАТИИ НА КНОПКУ RED МЕНЯТЬ ЦВЕТ ФОНА BODY НА КРАСНЫЙ
    1. НАЙТИ КНОПКУ
    2. СЛУШАТЬ НАЖАТИЕ ПО НЕЙ
    3. ПО НАЖАТИЮ ДЕЛАТЬ ДЕЙСТВИЕ ИЗМЕНЕНИЯ ЦВЕТА
*/

// document.body.style.backgroundColor = "green"
// document.body.style.backgroundColor = "red"

// let bodyStyle = document.body.style // {width: "", height: "", backgroundColor: ""}
// console.log(bodyStyle)

// bodyStyle.backgroundColor = "red"
// bodyStyle.backgroundColor = "green"

// console.log(document.body.childNodes) // childNodes - дочерние узлы

// console.log(document.querySelector("main"))

// let main = document.querySelector("main")
// main.style.backgroundColor = "red"

// document.querySelector("main").style.backgroundColor = "red"
// document.querySelector("main").style.backgroundColor = "green"

// let main = document.querySelector("main")
// main.style.backgroundColor = "red"
// main.style.backgroundColor = "green"

// Найти последний элемент тега main 
// let main = document.querySelector("main")
// console.log(main.lastChild)
// let title = document.querySelector("h1") // в title лежит тег h1

// let orangeBtn = document.querySelector("#orange")
// orangeBtn.addEventListener("click", function() { // callback-функция обратного вызова
//     document.body.style.backgroundColor = "orange" // меняем цвет фона body
//     let descr = document.querySelector("h1")
//     // перемеенная descr видна только внутри фигурных скобок, где она была создана
//     console.log(descr) 
// })
// // console.log(descr) // не видна 
// let redBtn = document.querySelector("#red")
// redBtn.addEventListener("click", function() { // callback-функция обратного вызова
//     document.body.style.background = "red" // меняем цвет фона body
//     // ваш код
// })

// let greenBtn = document.querySelector("#green")
// greenBtn.addEventListener("click", function() { // callback-функция обратного вызова
//     document.body.style.background = "green" // меняем цвет фона body
// })

// let blueBtn = document.querySelector("#blue")
// blueBtn.addEventListener("click", function() { // callback-функция обратного вызова
//     document.body.style.background = "blue" // меняем цвет фона body
// })

// let imgBtn = document.querySelector("#img")
// imgBtn.addEventListener("click", function() {
//     document.body.style.background = "url(./images/img1.jpg)"
// })

// // console.log(title.textContent) 
// title.textContent = "Hello Arsen"


// Задача. При нажатии на каждую кнопку менять цвет body на соответствующий
// и в h1 должен появляться текст с цветом,который вы добавили
// redBtn -> цвет body = red  -> в h1 должно быть "Красный"
// blueBtn -> цвет body = blue
//  

// Задача. Внутри коллбэк функции написать действие, которое поменяет цвет фона body на orange

// Задача. Найти тег button со значением Orange и поменять его цвет на orange. querySelector("")
// function hello() {}; hello() - immediately invoke function. вы инициатор вызова
/*
    textContent - свойство, которое позволяет вернуть или изменить текст внутри тега(текстовый контент)

    Element = тег
    document = родительский узел всей html страницы
    Для того, чтобы найти любой элемент на странице из JS, нужно применить метод document.querySelector("selector")
    Селекторы:
        1) По тегу main {}
        2) По классу .btn {}
        3) По id #red {}

    bodyStyle = {
        width: "", 
        height: "", 
        backgroundColor: ""
    }
    let - если значение переменной будет меняться
    const - если значение переменной не будет меняться

    Сначала в переменной bodyColor будет храниться свойсвто backgroundColor
    а потом просто строка "green"

    Element.lastChild - свойство, которое позволяет вернуть последний дочерний узел
    Element.firstChild - свойство, которое позволяет вернуть первый дочерний узел
*/

/*
    Найти каждую кнопку по id.
    И поменять цвет каждой кнопки на соответствующий.
*/


/*
    При нажатии на каждую кнопку менять цвет фона body на соответсвующий

    1. Найти все кнопки. querySelectorAll() 
    2. На каждую кнопку повесить слушатель события. for() addEventListener()
    3. При нажатии на каждую кнопку выводить в консоли "hello"
    4. При нажатии на каждую кнопку в консоли выводить значение атрибута id каждой кнопки
    5. При нажатии на каждую кнопку в h1 добавлять значение id каждой кнопки
*/

// red, green

let buttons = document.querySelectorAll("button")

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
       let btnId = buttons[i].getAttribute("id") // red, green, blue, img
       if(btnId == "img") {
        document.body.style.background = "url(./images/img1.jpg)"
       } else {
        document.body.style.background = btnId 
       }
    })
}
