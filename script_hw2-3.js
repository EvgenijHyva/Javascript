'use strict';
console.log("Задание 3: Продукт со своей структурой");

/*
3) * Подумать над глобальными сущностями.К примеру, сущность «Продукт» в интернет - магазине актуальна не только для корзины,
но и для каталога.Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в
разных местах давал возможность вызывать разные методы.
*/

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.discount = 0;
    }
    setDiscount(num) {
        if (num >= 0 && num < 100) {
            this.discount = num
            this.price = this.price * (100 - this.discount) / 100;
            return " price " + this.price + " disc " + this.discount + " %";
        } else {
            return " set discount between 0 and 99"
        }
    }
    getPrice() {
        return this.price
    }
}

let prod = new Product("someprod", 1000);
console.log(prod);
//console.log(prod.setDiscount(100));
console.log(prod.setDiscount(5));
console.log(prod.getPrice());
console.log("-------------------------------------------------------------------");

console.log("Задание 2: корзина в обьектно ориентированной стиле");
/* 
2) Продолжить работу с интернет - магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов.Какими объектами можно заменить их элементы ?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно - ориентированную базу.
*/

const PRODUCT1 = new Product("товар 1", 100);
const PRODUCT2 = new Product("товар 2", 85);
const PRODUCT3 = new Product("товар 3", 20);
const PRODUCT4 = new Product("товар 4", 50);
const PRODUCT5 = new Product("тестовый товар", 475);
PRODUCT5.setDiscount(21);
console.log(PRODUCT5.setDiscount(-14))

class basketObj {
    constructor() {
        this.basket = [];
    };
    push(...prod) {
        this.basket.push(...prod);
    }
    _getAllProductsData() {
        let res = ""
        for (var item in this.basket) {
            res += this.basket[item].name + " цена: " + this.basket[item].price + "\n"
        }
        return res
    }
    getSum() {
        let sum = 0;
        this.basket.forEach(element => {
            sum += element.price
        });
        return "общая сумма корзины = " + sum
    }

}
var userBasket = new basketObj();
userBasket.push(PRODUCT1, PRODUCT2, PRODUCT3, PRODUCT4, PRODUCT5);
console.log(userBasket); // сырые данные
console.log(userBasket._getAllProductsData()); // обработанные данные
console.log(userBasket.getSum());
console.log("-------------------------------------------------------------------");

