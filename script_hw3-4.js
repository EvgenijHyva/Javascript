'use strict'
document.write("<b>Задание 3:</b><br>");
/*
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. 
*/
let a = Math.round(Math.random() * 10) * (Math.round(Math.random()) ? 1 : -1);
let b = Math.round(Math.random() * 10) * (Math.round(Math.random()) ? 1 : -1);
document.write("<i><b>Результаты переменных будут всегда разные так как номeра выдаются рандомно, можете перезапустить страницу!</i></b><br><br>");
document.write("Переменная <b>a</b> = " + a + ";<br> Переменная <b>b</b> = " + b + ";<br>");

function getResult(a, b) {
    var result;
    if (a >= 0 && b >= 0) {
        document.write("<b> Разность чисел:</b>");
        result = a - b
        return "результат: " + result;
    } else if (a < 0 && b < 0) {
        document.write("<b> Произведение чисел:</b> ")
        result = a * b
        return "результат: " + result;
    } else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
        document.write("<b> Суммa чисел:</b>");
        result = a + b
        return " результат = <b>" + result + "</b>";
    } else {
        document.write("<b>Ни один из предусмотренных кейсов </b>")
        return 0
    }
}
document.write(getResult(a, b) + "<br><br>");
//

document.write("<b>Задание 4:</b><br><br>");
/*
Присвоить переменной а значение в промежутке [0..15]. 
С помощью оператора switch организовать вывод чисел от a до 15.
*/

var n = Math.round(Math.random() * 15);
document.write("переменная n = " + n + ";<br><br>");
document.write("Результат <b>switch:</b>");

function getFifteen(n) {
    if (n >= 15) {
        return 15 + " END<br><br>";
    } else if (n < 15)
        document.write(" " + n + " - ")
    return getFifteen(n + 1);
}
//document.write(getFifteen(n))

switch (n) {
    case 15:
        document.write("15 End<br><br>");
        break;
    case n:
        document.write(getFifteen(n));
        break;
}
