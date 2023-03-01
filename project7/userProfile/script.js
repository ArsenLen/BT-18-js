if(!JSON.parse(localStorage.getItem('user'))) {
    window.location.href = '../login.html'
}

// получаем залогиненного пользователя из localStorage
const user = JSON.parse(localStorage.getItem('user'));

// Данные пользователя
const userName = document.querySelector('.user-name');
const userAge = document.querySelector('.user-age');
const userSex = document.querySelector('.user-sex');
const logoutBtn = document.querySelector('.logout-btn');
// Посты пользователя
const postsContainer = document.querySelector('.posts-container');


// Вызов функций
logout(); // Функция выхода пользователя
renderUserPosts(); // Функция отрисовки постов пользователя

function logout() {
    logoutBtn.addEventListener('click', function() {
        // удаляем данные пользователя из localStorage
        localStorage.removeItem('user')
        // редиректим на страницу логина
        window.location.href = '../login.html'
    })
}



async function fetchUserPosts() {
   const res = await fetch(`http://localhost:3000/posts?author=${user.id}`);
   const data = await res.json();
   return data;
}

async function renderUserPosts() {
   const posts = await fetchUserPosts();
   posts.forEach(function(post) {
        postsContainer.insertAdjacentHTML('beforeend', `
            <article class="post">
                <img src="https://loremflickr.com/423/180" class="post-img" />
                <div class="post-info">
                    <p class="post-date">${post.date}</p>
                    <h5 class="post-title">${post.title}</h5>
                    <p class="post-descr">
                        ${post.descr}
                    </p>
                </div>
            </article>
        `)
   })
}





/*
    <article class="post">
                <img src="https://loremflickr.com/423/180" class="post-img" />
                <div class="post-info">
                    <p class="post-date">18 фев 2023</p>
                    <h5 class="post-title">Заголовок</h5>
                    <p class="post-descr">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, necessitatibus!
                    </p>
                    <p class="post-author">
                        Admin
                    </p>
                </div>
    </article>
*/

// Задача. Получить данные из локалстредж
// localStorage.getItem('user')

// JSON строка --> объект. JSON.parse(jsonString)

// Вытащить из объекта name, age, sex
// каждое свойство кладем в соответствующий тег
// .innerText, .textContent

// userName.innerText = "hello"

