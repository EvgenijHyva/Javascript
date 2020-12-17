'use strict'

//console.log(basketholder);

class basketObj {
    constructor() {
        this.basket = []; // Массив обьектов товара.
        this._visibility = true
    };
    push(...prod) {
        this.basket.push(...prod);
    }
    _getAllProductsData() {
        let res = ""
        for (var item in this.basket) {
            res += "Товар: " + this.basket[item].name + " цена: " + this.basket[item].price + "\n"
        }
        return res
    }
    getSum(flag = false) {
        let sum = 0;
        this.basket.forEach(element => {
            sum += element.price
        });
        if (flag)
            return sum.toFixed(2);

        if (sum != 0)
            return "в корзине " + this.basket.length + " товаров на сумму:  " + sum.toFixed(2) + " рублей";
        else
            return "Корзина пуста"

    }

    visualBasket() {
        const basketholder = document.querySelector(".top-content");

        // добавим кнопку для сворачивания / разворачивания корзины
        let basketButton = document.querySelector("#displayBasket"); // для сворачивания
        this._visibility ? basketButton.textContent = "Свернуть" : basketButton.textContent = "Развернуть"; // тернарный оператор для кнопки.
        //topContentButton.appendChild(basketButton);


        let drowbasket = document.createElement("ol");
        drowbasket.classList.add("basketframe");
        if (!this._visibility) {
            drowbasket.style.display = "none";
        }
        basketholder.appendChild(drowbasket);

        let goodsPosition;
        let delButton;
        this.basket.forEach(el => {
            delButton = document.createElement("button"); // Кнопка редактирование
            delButton.classList.add("edit-list");
            delButton.textContent = "убрать"
            delButton.setAttribute("id", el.name);

            goodsPosition = document.createElement("li");
            goodsPosition.classList.add("position");
            goodsPosition.setAttribute("id", "catalog");

            if (el.discount) {
                goodsPosition.textContent = "товар: " + el.name + " цена: " + el.price.toFixed(2) + " с учетом скидки: " + el.discount + " %";
                goodsPosition.style.color = "green";
            } else {
                goodsPosition.textContent = "товар: " + el.name + " цена: " + el.price.toFixed(2);
            }
            goodsPosition.appendChild(delButton); // добавление кнопки редактирования списка
            drowbasket.appendChild(goodsPosition);

        })
        let total = document.createElement("div");
        total.classList.add("total");
        total.textContent = this.getSum();
        drowbasket.appendChild(total);
        if (this.basket.length > 0) {
            this.editBasket()
        }
    }
    refresh() {
        let dropBasket = document.querySelector(".basketframe");
        dropBasket.remove();
        this.visualBasket();
    }
    displayButton() {
        document.querySelector(".top-content")
            .addEventListener("click", (e) => {
                console.log(e);
                name = e.target.getAttribute("id")
                if (name === "displayBasket") {
                    this._visibility = !this._visibility;
                    this.refresh();
                }
            })

    };
    editBasket() {
        document.querySelector(".basketframe")
            .addEventListener("click", (e) => {
                let name = e.target.getAttribute("id")
                console.log(name);
                if (name) {
                    for (let i = 0; i < this.basket.length; i++) {
                        if (this.basket[i].name == name) {
                            this.basket.splice(i, 1)
                            break;
                        }
                    }
                    this.refresh();
                }
            })
    }
    fillAddress() {
        let toAddress = document.querySelector(".top-content");
        console.log(toAddress);
        let buttonNext = document.createElement("button");
        buttonNext.textContent = "Next ->";
        buttonNext.classList.add("nextbtn");
        buttonNext.addEventListener("click", (e) => {
            renderAddress();
            this._visibility = false;
            this.refresh();
        })
        toAddress.appendChild(buttonNext);
    }
}
let userBasket = new basketObj();


userBasket.visualBasket();
userBasket.displayButton()

