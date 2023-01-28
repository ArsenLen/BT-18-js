// Вводные данные
let categoriesContainer = document.querySelector('.category-list') // контейнер с категориями
let main = document.querySelector('main') // контейнер с продуктами
const URL = 'http://localhost:3000/products'
// Функция получения всех продуктов
function fetchAllProducts() {
    fetch(URL)
        .then(function(res) {
            return res.json()
        })
        .then(function(products) {
            showProducts(products)
            showCategories(products)
        })
}
fetchAllProducts()

// функция отображения(рендеринг) продукта
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

// функция рендеринга категорий 
function showCategories(arr) {
    // способ для создания массива уникальных категорий
    let categories = arr.map(function(el) {
        return el.category
    })
    console.log(categories)
    let uniqueCategories = new Set(categories)
    console.log(uniqueCategories)
    let uniqueCategoriesArray = [...uniqueCategories] // Array.from() - позволяет сделать итерируемый массив из масивоподобных типов данных
    console.log(uniqueCategoriesArray)

    // ДЗ. Отрисовать массив uniqueCategoriesArray. 
    // Отрисовать уникальные категории
    uniqueCategoriesArray.forEach(function(el) {
        categoriesContainer.innerHTML += `
            <p class="category">${el.category}</p>
        `
    })
}

/*
 // ДЗ. Отрисовать массив uniqueCategoriesArray. 
    // Отрисовать уникальные категории
    При нажатии на категорию, в консоли отображать ее название
*/

/*
    let uniqueCategories = new Set(['hello', 'hello', 'hello'])
    console.log(uniqueCategories)
*/

/* 
    Создать функцию, которая будет рендерить продукты из массива products 
    <div class="product">
        <img src="https://asiaexpress.kg/uploads/media/product_photo/0001/05/fab93f7a73e747bef190e57f3c7ff54bf282d325.jpeg" alt="" class="product-img">
        <div class="product-info">
            <h5 class="product-name">Lorem</h5>
            <p class="product-category">Lorem</p>
            <p class="product-price">100000</p>
        </div>
    </div>
*/
/*
    json-server --watch db.json --port 3001     (3002, 3003, 3004)
*/

