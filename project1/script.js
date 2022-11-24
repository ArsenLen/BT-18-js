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

let orangeBtn = document.querySelector("#orange")
orangeBtn.style.backgroundColor = "orange"

// Задача. Найти тег button со значением Orange и поменять его цвет на orange. querySelector("")

/*
    Element = тег
    document = родительский узел всей html страницы
    Для того, чтобы найти любой элемент на странице из JS, нужно применить метод document.querySelector("selector")
    Селекторы:
        1) По тегу main {}
        2) По классу .btn {}
        3) По id #red{}

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