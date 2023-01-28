const URL = "http://localhost:3000/products?category=Телевизоры"
const main = document.querySelector('main')
/*
    function fetchProductsByCategory() {
        fetch(URL)
            .then(function(res) {
                return res.json()
            })
            .then(function(data) {
                showProducts(data)
            })
            .catch(function(err) {
                console.log(err)
            })
    }
    fetchProductsByCategory()
*/

// async, await 
async function fetchProductsByCategoryAsync() {
    try {
        const res = await fetch(URL) //fetch() возвращает промис, дожидаемся выполнения
        const data = await res.json() // .json() возвращает промис, дожидаемся ответа
        showProducts(data)
    } catch(err) {
        // Если произошла ошибка после fetch
        console.log(err)
    }
}
fetchProductsByCategoryAsync()

function showProducts(arr) {
    arr.forEach(function(el) {
        main.innerHTML += `
        <div class="product">
            <img src="${el.img}" alt="" class="product-img">
            <div class="product-info">
                <h5 class="product-name">${el.name}</h5>
                <p class="product-category">${el.category}</p>
                <p class="product-price">${el.price}</p>
            </div>
        </div>
        `
    }) 
}

/* http://localhost:3000/products?category=Телевизоры
    после ? мы можем сделать запрос с определенным фильтром по любому свойству
    при GET запросе по данной ссылке мы получаем все продукты, категория которых "Телевизор", т.е
    {
        category : "Телевизоры"
    }
*/


/*
    Переписать весь код из проектов с fetch.then() на async/await
*/