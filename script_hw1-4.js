'use strict'
document.write("<b>Задание 1: цикл while.</b><br><br>");
/*С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/
let x = 0;
while (x <= 100) {
    document.write(x + " ");
    if (x != 0 && x % 10 == 0) {
        document.write("<br>");
    }
    ++x;

};

//
document.write("<br><b>Задание 2-3: функционал интернет магазина.</b><br>");
/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
*/
var basket = []; // массив для хранения товаров
const product1 = { name: "товар 1", price: 100 };
const product2 = { name: "товар 2", price: 110 };
const product3 = { name: "товар 3", price: 20 };
const product4 = { name: "товар 4", price: 55 };

basket.push(product1, product2, product3, product4);

var basketSum = 0;

function countBasketPrice() {
    document.write("<p>Содержимое корзины:<p> ");
    for (var item in basket) {
        basketSum += basket[item].price; // подсчет стоимости.
        document.write("<i>" + basket[item].name + " </i><b>цена: </b><i>" + basket[item].price + "</i><br>");
    };
    document.write("<br>Oбщая стоимость корзины =  <b>" + basketSum + "</b><br>");
};
countBasketPrice();

document.write("<br><b>*Задание 4: цикл for без тела.</b><br>");
/*
Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}
*/
document.write("<br>результат: ");
let i = 0;
for (; i < 10; i++) document.write(i + " ");
