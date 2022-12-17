/*  
    textContent 
    style
    classList
    innerHTML - возвращает HTML контент тега и позволяет его изменять
    child
    parent

    querySelector
    querySelectorAll
    getAttribut
*/

// console.log(document.body.innerHTML)

// let main = document.querySelector("main")
// // main.innerHTML = "<h1>Hello World</h1>"

// let user = {
//     name : "Arsen",
//     age: 24,
//     sex: "male",
//     phone: "0555555555",
//     prof: "Frontend Developer",
//     hobbies: ["Football", "Design"]
// }
// let user1 = {
//     name : "Kenan",
//     age: 24,
//     sex: "male",
//     phone: "035421323",
//     prof: "Frontend Developer",
//     hobbies: ["Football", "CSGO"]
// }
// let mr = "Mr."
// Добавить тег h1 в main с именем пользователя из объекта user и приставкой Mr.
// main.innerHTML = `
//     <div class="user">
//         <h1>Mr. ${user.name}</h1>
//         <p>Age ${user.age}</p>
//         <div>Hobbies ${user.hobbies}</div>
//     </div>
//     `

// В тег main вывести карточку пользователя user1, с именем, возрастом и хобби, чтобы предыдущий
// пользователь тоже оставался
// main.innerHTML += `
//     <div class="user">
//         <h1>Mr. ${user1.name}</h1>
//         <p>Age ${user1.age}</p>
//         <div>Hobbies ${user1.hobbies}</div>
//     </div>
// `

// function showUser(obj) {
//     main.innerHTML += `
//         <div class="user">
//             <h1>Mr. ${obj.name}</h1>
//             <p>Age ${obj.age}</p>
//             <div>Hobbies ${obj.hobbies}</div>
//         </div>
//     `
// }

// showUser(user) // immediately invoke function. недемленный вызов функции
// showUser(user1)

// showUser({
//     name : "Aleksandr",
//     age : 39,
//     hobbies : ["Fishing"]
// })

// Входные данные
let productsContainer = document.querySelector(".products-container")

let products = [
    {
        name : "Iphone 14",
        price : 100000,
        color: "pink"
    },
    {
        name : "Samsung S20",
        price : 120000,
        color: "Черный"
    },
    {
        name : "Xiaomi Redmi M523",
        price : 150000,
        color: "Белый"
    }
]

/* 
    {
        name: 'Test',
        price: '4535', 
        color: '#e60a0a'
    }
*/

// function showProduct(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         productsContainer.innerHTML += `
//                 <div class="product">
//                     <h5 class="product-name">
//                         ${arr[i].name}
//                     </h5>
//                     <p class="product-color">${arr[i].color}</p>
//                     <p class="product-price">${arr[i].price}</p>
//                 </div>
//             `
//     }
// }
// showProduct(products)

function showProductForEach(arr) {
    productsContainer.innerHTML = '' 
    arr.forEach(function(element) {
        productsContainer.innerHTML += `
                <div class="product">
                    <h5 class="product-name">
                        ${element.name}
                    </h5>
                    <p class="product-color">${element.color}</p>
                    <p class="product-price">${element.price}</p>
                </div>
            `
    })
}
showProductForEach(products) 


/* обрабатываем форму */
let productForm = document.querySelector("form")
let productName = document.querySelector("input[name='product-name']")
let productPrice = document.querySelector("input[name='product-price']")
let productColor = document.querySelector("input[name='product-color']")
let notification = document.querySelector(".notification")
let productSearch = document.querySelector(".product-search")

// Слушаем отправку формы, т.е добавление продукта
productForm.addEventListener("submit", function(event) {
    event.preventDefault() /* отмена действий по умолчанию */
    let newName = productName.value
    let newPrice = Number(productPrice.value)
    let newColor = productColor.value
    
    let productInfo = {
        name: newName,
        price: newPrice,
        color: newColor
    }
    //products =  [{}, {}, {}]
    products.push(productInfo)
    //products = [{}, {}, {}, {}]
    // products.shift()
    // products = [{}]
    // Отображение продуктов после добавление нового продукта
    showProductForEach(products)
    // Очистка полей ввода после добавления продукта
    clearInputs() 
})

// Очищаем поля ввода после отправки формы
function clearInputs() {
    productName.value = ''
    productPrice.value = ''
    productColor.value = '#000000'
}
// Отображаем уведомление об отправке
function showNotification() {
    notification.style.display = "block"
    setTimeout((
        notification.style.display = "none"
    ), 3000)
}

function filterProducts(str) {
    // содержится ли подстрока str в свойстве name каждого объекта
    // содержится ли введенное значение в имени продукта
    return products.filter(product => {
        product.name.includes(str)
    })
}

/*
    Алгоритм поиска
    1. Содержится ли подстрока в строке
    2. Отфильтровать массив по условию 1
 */

/*
    setTimeout() - сделать действие единожды через несколько секунд
    setInterval() - сделать действие несколь раз через определенный промежуток времени
*/

/*
    {
        newColor: "#c41717";
        newName: "Test";
        newPrice: "4545";
    }   
    {
        name : "Iphone 14",
        price : 100000,
        color: "Розовый"
    }
    1. по тегу
    2. по классу
    3. по id
    4. по доп.атрибутам, например name 
*/
/*
    1* При отправке формы, в консоли отображать введенные пользователем данные
    
    1. https://doka.guide/js/array-foreach/  - разобрать forEach()
    2. https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-push 5 заданий, начиная с этого
*/

// Задача. 
// 1.На форму повесить слушатель события.
// 2. Тип события - submit, которое создается, когда
// нажимаем на кнопку отправить. 
// 3. Когда происходит это событие в консоли отображать "Отправлено"

/*
    addEventListener("type", function() {
        тело функции // действие
    })
*/














// let main = document.querySelector('main')
// main.innerHTML += "<h2>hello</h2>"
// main.innerHTML += "<h2>hello</h2>" // main.innerHTML = main.innerHTML + "<h2>hello</h2>"

// let num = 10. num = num + 5

/*
    0. Делаем запрос на сервер
    0.1. Сервер возвращает json
    0.2 ИЗ JSON превращаем в массив объектов
    1. Вызываем функцию showProduct(products) -> products = [{iphone}, {samsung}, {xiaomi}]
    2. Функция принимает массив products, называет его arr и проходимся по нему с помощью цикла
        а) i = 0, 0 < 3 - true,  productsContainer.innerHTML = "<div>ProductInfo1</div>"
        б) i = 1, 1 < 3 - true,  productsContainer.innerHTML = "<div>ProductInfo2</div>"
        в) i = 2, 2 < 3 - true,  productsContainer.innerHTML = "<div>ProductInfo3</div>"
    
*/

// Создать функцию showProduct, которая добавляет карточки продуктов. Разметка указана ниже
/* 
<div class="product">
    <h5 class="product-name">
        Iphone 14
    </h5>
    <p class="product-color">Розовый</p>
    <p class="product-price">100000</p>
</div>
*/

// let num = 10
// num = num + 15
// num += 15
/*
    `` - шаблонные литералы, шаблонная строка - позволяют комбинировать строки и js код
*/


// Как изменить номер телефона?
// user.phone = "0777777777"
// Как добавить к имеющемуся name приставку Mr. 
// console.log(user.name) // "Arsen" 
// user.name = "Mr." + user.name
// В консоли отобразить второе хобби
// console.log(user.hobbies[1]) // let hobbies = ["Football", "Design"] hobbies[1]


