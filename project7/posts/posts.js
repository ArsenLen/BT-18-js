// Создать 3 документа в коллекции posts
// Запрашивать данные с коллекции posts с помощью fetch
// Полученные данные отрисовать на странице posts.html

/* 
    <article class="post">
            <img src="https://loremflickr.com/423/180" class="post-img" />
            <div class="post-info">
                <p class="post-date">${new Date(post.date)}</p>
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

const main = document.querySelector('main')
renderPosts()

async function fetchPosts() {
    const res = await fetch('http://localhost:3000/posts')
    const data = await res.json()
    return data
} 
// по айди получить имя пользователя
async function getUserName(id) {
    const res = await fetch(`http://localhost:3000/users/${id}`)
    const user = await res.json()
    return user.name
}

async function renderPosts() {
    const posts = await fetchPosts()
    posts.forEach(async function(post) {
        const userName = await getUserName(post.author)
        main.insertAdjacentHTML('beforeend', `
            <article class="post">
                <img src="https://loremflickr.com/423/180" class="post-img" />
                <div class="post-info">
                    <p class="post-date">${new Date(post.date)}</p>
                    <h5 class="post-title">${post.title}</h5>
                    <p class="post-descr">
                        ${post.descr}
                    </p>
                    <p class="post-author">
                        ${userName}
                    </p>
                </div>
            </article>
        `)
    })
}
// fetch('http://localhost:3000/posts')
//     .then(res => res.json())
//     .then(data => console.log(new Date(data[1].date)))