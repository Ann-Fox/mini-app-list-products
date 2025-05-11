const bodyTableElement = document.querySelector("tbody");
const resultElement = document.querySelector(".result");

// Загрузка списка товаров через REST API
fetch("https://fakestoreapi.com/products")
    .then((response) => {
        console.log("response:", response);
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        // заполнить body таблицы
        bodyTableElement.innerHTML = data
            .map(
                ({ id, title, price }) =>
                    ` <tr class="item-product">
                        <td>${id}</td>
                        <td>${title}</td>
                        <td>${price}</td>
                    </tr>`
            )
            .join("");

        // При клике на строку в таблице отображается детальная информация о выбранном товаре
        const trElements = document.querySelectorAll(".item-product");

        trElements.forEach((el, index) => {
            console.log(el, index);
            el.addEventListener("click", function () {
                resultElement.innerHTML = `
                <img src="${data[index].image}">
                <p>${data[index].title}</p>
                <p>${data[index].price}</p>`;
            });
        });
    });
