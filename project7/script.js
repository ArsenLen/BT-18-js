// Запускать команду json-server-auth --watch db.json только в той папке, где файл db.json существует
// cd - change directory - изменить директорию
// cd api - войти в папку api
const API_URL = "http://localhost:3000"

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