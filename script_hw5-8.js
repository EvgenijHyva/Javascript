'use strict'

document.write("<b>Задание 5:</b><br><br>");
/*
Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return
*/

function plus(a, b) {
    return a + b;
};
function minus(a, b) {
    return a - b;
};
function devide(a, b) {
    if (b == 0) {
        return "нельзя делить на ноль";
    } else
        return a / b;
};
function multiply(a, b) {
    return a * b;
};

var c = 15;
var d = 10;
document.write("<i>Переменные: c= " + c + "; d =" + d + "</i>;<br><br>")
document.write("результат функции plus = " + plus(c, d));
document.write("<br>результат функции minus = " + minus(c, d));
document.write("<br>результат функции devide = " + devide(c, d));
document.write("<br>результат функции multiply = " + multiply(c, d) + "<br><br>");
//
document.write("<b>Задание 6:</b><br><br>");
/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции.
В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5)
и вернуть полученное значение (применить switch).
 */

setTimeout(askfunc, 30000);

function myFunc(a, b, func) {
    return "Результат = " + func(a, b);
}

var x = 10;
var y = 5;
document.write("<i><b>функция запустится автоматически через секунд 30</i></b><br>");
document.write("<br>Переменные:<br> x= " + x + "; y= " + y + ";<br><br>")

function askfunc() {
    var op = prompt("Задание 6: переменные х = 10, у = 5; Доступные операции: plus, minus, devide, multiply")
    switch (op) {
        case "plus":
            alert("plus " + myFunc(x, y, plus));
            break;
        case "minus":
            alert("minus " + myFunc(x, y, minus));
            break;
        case "devide":
            alert("devide " + myFunc(x, y, devide));
            break;
        case "multiply":
            alert("multiply " + myFunc(x, y, multiply));
            break;
        default:
            alert("допущена ошибка")
    }
}

//
document.write("<p style=background-color:lightgreen;><b>*Задание 7:</b><br><br>");
// * Сравнить null и 0. Объяснить результат. 
document.write("Результат сравнений = " + (null == 0));
document.write("<br><b>null</b> это отсутствие значения, а 0 это целочисленое. Если расматривать контекст булево-значений, то null = false, и 0 = false тем не менее это разные типы");
document.write("<br>Сравнение типов данных: <b>typeof null = " + typeof null + "</b>, но это не обьект, а просто отдельный тип данных, <b>typeof 0 = " + typeof 0 + "</b>. Вывод: разные типы данных.<br><br>");

//
document.write("<b>*Задание 8:</b><br><br>");
/*
* С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val — заданное число, pow –— степень.
*/
function powByRecusion(num, pow) {
    if (pow == 0)
        return 1
    return powByRecusion(num, pow - 1) * num;
}
document.write("Вызов функции <b><i>powByRecusion(2, 10)</i></b>: <br>")
document.write("Результат = " + powByRecusion(2, 10) + "<br><br></p>");