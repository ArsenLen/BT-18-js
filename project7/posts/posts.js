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

fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(data => console.log(new Date(data[1].date)))