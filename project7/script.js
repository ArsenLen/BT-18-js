// Запускать команду json-server-auth --watch db.json только в той папке, где файл db.json существует
// cd - change directory - изменить директорию
// cd api - войти в папку api

/* ссылка для отправки пост запроса для регистрации пользователя
    API_URL/register
    "http://localhost:3000/register" 
    ДЗ. По этой ссылке отправить POST запрос с помощью метода fetch()
    В теле POST запроса передать введенную пользователем в input информацию
    const userInfo = {
        email: "Email который пользователь ввел в инпут с типом email",
        password: "Пароль который пользовател ввел в инпут с типом пароль"
    } 
    В теле POST запроса не забыть JSON.stringify(userInfo)
    
    В ответ сервер пришлет записанного в db.json пользователя, его нужно
     отобразить в консоли.
     {
        id : 1,
        email: "Hello@mail.ru",
        password: "$542e21get35254573236352341423537uf2"
     }
*/
const API_URL = "http://localhost:3000/register"
// Статичные данные. Динамичные(считываем input после сабмита)
const userInfo = {
    email: "user2@mail.ru",
    password: "12345678",
    age: "24",
    name: "Login login",
    sex: "male" 
}

async function register(event) {
    event.preventDefault()
    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        const currentUser = await res.json()
        console.log(currentUser)
    } catch(err) {
        console.log(err)
    }
}

const sendBtn = document.querySelector('input[type="submit"]')
sendBtn.addEventListener('click', register)



/*  Валидация - проверка на правильность
    1. на фронтенде
        во время считывания и сабмита формы, узнаем, количество симловов в input
        узнаем наличие тех или иных символов в инпуте
    ДО ОТПРАВКИ ЗАПРОСА
    2. на бэкенде
        запрашивает email в БД, если такой там уже существует, выкидываем ошибку "Email already exists"


    elem.addEventListener(eventType, handlerFunction) принимает несколько параметров(аргументов)
    1. eventType - тип события, строка, содержащая название события 
        'click', 'submit', 'focus'. Какое событие произошло?
    2. handlerFunction - функция-обработчик. Что сделать, когда произошло событие?
        cb - callback - функция обратного вызова. Функция запускается не сразу, а 
            ее вызов передан в другую функцию или метод

            .forEach(function(elem) {})
*/
function sum(a,b) {
    return a+b
}

sum() // immediately invoke function - немедленный вызов функции


/*
    GET https://whispering-river-87788.herokuapp.com/api/products
    [
        {
            
        },
        {},
    ]
    Title - название продукта
    img - ссылка на картинку продукта
    price - цена продукта
    {
        "_id": "636d4a500884c7fb351bda26",
        "title": "Trenton modular sofa_3",
        "descr": "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
        "img": "https://whispering-river-87788.herokuapp.com/images/asgaard-sofa.png",
        "categories": [
            "sofa",
            "soft"
        ],
        "price": 25000,
        "createdAt": "2022-11-10T19:00:32.537Z",
        "updatedAt": "2022-11-10T19:00:32.537Z",
        "__v": 0
    },
*/


// Email, Password
// Пол, фио, Возраст

// Добавить input с полями ПОЛ, ФИО, ВОЗРАСТ
// Отправлять эти данные при регистрации
// Закончить и разобраться с регистрацией