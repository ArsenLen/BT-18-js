// Входные данные
let productsContainer = document.querySelector(".products-container") // контейнер для отображения продуктов
let productForm = document.querySelector("form")
let productName = document.querySelector("input[name='product-name']")
let productPrice = document.querySelector("input[name='product-price']")
let productColor = document.querySelector("input[name='product-color']")
let productImg = document.querySelector("input[name='product-img']")
let notification = document.querySelector(".notification")
let productSearch = document.querySelector(".product-search")
const API_URL = 'http://localhost:3000/products'


// функция, которая выполняет GET-запрос и вызывает первую отрисовку
function getProducts() {
    let data = fetch(API_URL)
    data
        .then(function(res) {
            return res.json() // вычленяем полезные(payload) данные из ответа от сервера(response=res) 
        })
        .then(function(products) {
            showProductForEach(products) //products = [{product}, {products}, {}]
        })
}
getProducts() // вызов функции для первой отрисовки

// функция отрисовки в html, которая использует данные с сервера ([{}, {}])
function showProductForEach(arr) {
    productsContainer.innerHTML = '' 
    arr.forEach(function(element) {
        productsContainer.innerHTML += `
                <div class="product">
                    <img src="${element.img}" class="product-img">
                    <h5 class="product-name">
                        ${element.name} 
                    </h5>
                    <p class="product-color"><b>Цвет</b>: ${element.color}</p>
                    <p class="product-price"><b>Цена</b>: ${element.price} сом</p>
                    <button class="delete-btn" id=${element.id}>Удалить</button>
                    <button class="edit-btn" id=${element.id}>Редактировать</button>
                </div>
            `
    })
}

// Слушаем отправку формы, т.е добавление продукта
productForm.addEventListener("submit", function(event) {
    event.preventDefault() /* отмена действий по умолчанию */
    let newName = productName.value
    let newPrice = Number(productPrice.value)
    let newColor = productColor.value
    let newImg = productImg.value
    
    let productInfo = {
        name: newName,
        price: newPrice,
        color: newColor,
        img: newImg
    }
    // Отправка post запроса с телом, в котором лежит JSON строка. 
    // JSON строка конвертируется из объекта productInfo
    // addProduct(productInfo)
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(productInfo)
    }) // В ответ на fetchPOST приходит ответ с добавленным в БД объектом
    .then(function(res) { // функция выполнится только если промис перешел в fullfilled(зарезолвился) успешно
        // Вызываем GET-запрос для того, чтобы получить обновленную БД
        getProducts()
        showNotification() // можем вызывать уведомление только внутри then
    })
    .catch(function(err) {  // функция выполнится если произошла ошибка
        console.log(err)
    })
    // Очистка полей ввода после добавления продукта
    clearInputs() 
})

async function addProduct(product) {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
        getProducts()
        showNotification()
    } catch (err) {
      console.log(err);
    }

}

// Очищаем поля ввода после отправки формы
function clearInputs() {
    productName.value = ''
    productPrice.value = ''
    productColor.value = '#000000'
    productImg.value = ''
}
// Отображаем уведомление об отправке
function showNotification() {
    notification.style.display = "block"
    setTimeout((
        notification.style.display = "none"
    ), 3000)
}

// Вешаем слушатель события на input и вызываем фукнция фильтрации каждый раз, когда пользователь что-то вводит
// productSearch.addEventListener("input", function(e) {
//     // e.target - элемент, который вызвал событие
//     console.log(productSearch.value) // строка, которую вводит пользователь
//     let queryStr = productSearch.value // строка запроса фильтрации
//     let filteredProducts = filterProducts(queryStr) // отфильтрованный массив
//     showProductForEach(filteredProducts)
// })


// // функция, которая принимает строку и фильтрует массив
// function filterProducts(str) {
//     // содержится ли подстрока str в свойстве name каждого объекта
//     // содержится ли введенное значение в имени продукта
//     return products.filter(function(product) {
//         return product.name.includes(str)
//     })
// }


// слушаем нажатие по кнопкам delete-btn, чтобы удалить элемент
document.addEventListener("click", function(e) {
    if(e.target.className === "delete-btn") {
        deleteProduct(e.target.id, e.target.parentElement) // 4
    }
    if(e.target.className === "edit-btn") {
        // операция редактирование
        console.log("update")
    }
})
// фукнция удаления документа с сервера.
function deleteProduct(id, elem) {
    fetch(`http://localhost:3000/products/${id}`, { // http://localhost:3000/products/4
        method : "DELETE"
    })
    .then(function(res) {
        elem.remove()
    })
}

// функция редактирования 

/*
  После удаления элемента с сервера, удалить его в html
*/
/* 
    ДЗ. После удаления продукта перерисововать интерфейс без перезагрузки страницы
        Отобразить уведомление об удалении, если оно прошло успешно. 
*/

// задача. при нажатии на кнопку "удалить" в консоли отобразить
//  id этой кнопки
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

// Сделать так, чтобы фильтрация работала без учета регистра введных букв.
// https://doka.guide/js/function/
// 














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

// GET запрос - запрос на получение данных
// https://randomuser.me/api/ - ссылка на random user
// http://localhost:3000/products - ссылка на json server

    
    

// Request - запрос на сервер
// Response - ответ от сервера


// Есть ссылка https://randomuser.me/api?results=5
// 

console.log(products)
products = {
    results: [{name: "Arsen"}, {}, {}] , 
    info: {}
}
products.results[0].name


products.results[0].name = {title: 'Mr', first: 'Luukas', last: 'Lahti'}


// Сделать карточки для 5 пользователей, которых вы получаете с сервера
// В каждой карточке должно быть имя, пол, email, телефон и картинка пользователя