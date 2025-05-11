const bodyTableElement = document.querySelector("tbody");

fetch("https://fakestoreapi.com/products")
    .then((response) => {
        console.log("response:", response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        // заполнить body таблицы
        bodyTableElement.innerHTML = data
            .map(
                ({ id, title, price }) =>
                    ` <tr>
                        <td>${id}</td>
                        <td>${title}</td>
                        <td>${price}</td>
                    </tr>`
            )
            .join("");
    });
