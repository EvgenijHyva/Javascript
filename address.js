const address = document.querySelector(".address");
console.log(address);
function renderAddress() {
    address.style.display = "flex"
    address.textContent = "";

    let price = document.createElement("p");
    price.textContent = "Oбщая стоимость " + userBasket.getSum(true) + " руб";
    price.classList.add("address-text", "text");

    let p = document.createElement("p");
    p.classList.add("address-text", "text");
    p.textContent = "Адрес доставки:";

    let input = document.createElement("input");
    input.classList.add("input-address");
    input.type = "text";
    input.placeholder = "адрес доставки";

    let name = document.createElement("input");
    name.type = "text";
    name.placeholder = "Имя";
    name.classList.add("input-address", "name");

    let lastname = document.createElement("input");
    lastname.type = "text";
    lastname.placeholder = "Фамилия";
    lastname.classList.add("input-address", "lastname");

    let index = document.createElement("input");
    index.type = "number";
    index.placeholder = "Индекс";
    index.classList.add("input-address", "index");

    let city = document.createElement("input");
    city.type = "text";
    city.placeholder = "Город";
    city.classList.add("input-address", "city");

    let frame = document.createElement("div");
    frame.classList.add("button-frame");

    let submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Отправить";
    submit.classList.add("input-address", "submit");
    submit.addEventListener("click", (e) => {
        console.log(e);
        console.log("submit");
        renderComments();
        address.style.display = "none";
    })


    let reset = document.createElement("input");
    reset.type = "reset";
    reset.value = "Удалить";
    reset.classList.add("input-address", "reset");

    address.appendChild(price)
    address.appendChild(p)
    address.appendChild(name);
    address.appendChild(lastname);
    address.appendChild(input);
    address.appendChild(index);
    frame.appendChild(submit);
    frame.appendChild(reset);
    address.appendChild(frame);
}

