const userName = document.querySelector('.user-name');
const userAge = document.querySelector('.user-age');
const userSex = document.querySelector('.user-sex');
const logoutBtn = document.querySelector('.logout-btn');

logoutBtn.addEventListener('click', function() {
    // удаляем данные пользователя из localStorage
    localStorage.removeItem('user')
    // редиректим на страницу логина
    window.location.href = '../login.html'
})



// Задача. Получить данные из локалстредж
// localStorage.getItem('user')

// JSON строка --> объект. JSON.parse(jsonString)

// Вытащить из объекта name, age, sex
// каждое свойство кладем в соответствующий тег
// .innerText, .textContent

// userName.innerText = "hello"

