// let products = fetch()
// console.log(products)

// /* операция, которая длится 2 сек */
// // function name() {
// //     let name = "arsen"
// //     return pro
// // }

// // let myName = name() // arsen
// // console.log(myName)

// // resolve - запускается тогда, когда промис выполнен. запрос к БД выполнен

// let promise = new Promise(function(resolve, reject) {
//     let data = { 
//         name : "Iphone 13"
//     }
//     resolve(data) // промис перешел в состояние загружено
// })

// // console.log(promise)
// // Методы promise - then(), catch()

// promise.then(function(data) {
//     data.json()
// })

// // json() - метод, который позвол


////// GET ЗАПРОС //////////// - получение данных
let options = {
    method : 'GET',
    headers : {
        'Content-Type' : "application/json"
    }
}

fetch('http://localhost:3000/products', options)

//////// POST Запрос //////// - добавление

let newProduct = {
    name : "Iphone 13 mini",
    price: 90000,
    color: "green"
}
// console.log(newProduct)
// console.log(JSON.stringify(newProduct)) // 

let optionsPost = {
    method : 'POST',
    headers : {
        'Content-Type' : "application/json"
    },
    body : JSON.stringify(newProduct)
}

let button = document.querySelector('.send-button')

button.addEventListener("click", function() {
    let unknown = fetch('http://localhost:3000/products', optionsPost)
    unknown.then(function(res) {
      return res.json() // == body == promise. внутри promise лежит body
    })
    .then(function(body) {
        console.log(body)
    })
})


/*
    fetch принимает два аргумента:
    1. ссылка на API (эндпоинт)
    2. параметры запроса (options)

    В параметрах запроса могут быть следующие данные:
    1. Метод http запроса (GET, POST, PUT/PATCH, DELETE)
    2. headers - заголовки запроса, в которых записывается информация о передаваемом контенте
    3. Тело запроса - указываются данные, которые нужны для передачи запроса, н-р, если вы
        хотите добавить новый продукт в базу данных, то в теле запроса должен быть json с данными продукта
        {
            "id": 5,
            "name": "Iphone 14 Pro Max",
            "price": 120000,
            "color": "black"
        }

        JSON.stringify() - метод, который конвертирует JS объект в json
*/