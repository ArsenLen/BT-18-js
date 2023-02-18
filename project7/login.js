// 1. Прочитать данные, введенные пользователем в инпуты
// 2. Подготовить объект из данных
// 3. Отправить POST запрос на нужный URL
// 3*. Сохранять данные в локальное хранилище(LocalStorage)
// 4. После успешного входа в систему, редиректить на главную страницу

const loginForm = document.querySelector('form')
const emailInput = document.querySelector('input[name="email"]')
const passwordInput = document.querySelector('input[name="pass"]')

loginForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value
    }
    login(userInfo)
})

async function login(user) {
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const currentUser = await response.json()
        localStorage.setItem('user', JSON.stringify(currentUser.user))
        if(response.ok) {
            window.location.href = "./userProfile/userProfile.html"
        }
    } catch (error) {
        console.log(error)
    }
}

// Задача. Перед редиректом(перенаправление) пользователя, сохранять
// данные из объекта currentUser.user в LocalStorage

// localStorage.setItem('user', JSON.stringify(объект,который хотим сохранить)); сохранить в LS
// localStorage.getItem('user') // взять из localStorage

// response.ok это и так true
// if(response.ok) = if(response.ok === true)

// if(true) { если true, то выполняем }

// www.mysite.com // setItem // www.mysite.com/index  /about.hmtl /info.html