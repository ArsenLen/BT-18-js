// Объект
let laptop = {
    mark : "Lenovo",
    memory : "4GB",
    processor: "Intel Celeron",
    warranty : "12 месяцев",
    price: 21141,
    img: "https://intermedia.kg/upload/resize_cache/iblock/0ca/500_500_11ec7f187399b828da51d57bb5de9a50e/0ca405b2d1814b67a4c1ea33e52bb5c0.jpg"  
}

// Добавить данные из объекта в html, для того, чтобы восстановить страницу
let laptopMark = document.querySelector(".laptop-mark")
laptopMark.textContent = laptop.mark
// В консоли получить значение price объекта laptop
// console.log(laptop.price)



