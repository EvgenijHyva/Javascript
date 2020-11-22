'use strict'
function celsius_fahrenheit() {
    alert("Задание 1: Задать температуру в градусах по Цельсию, \nформула: Tf = (9 / 5) * Tc + 32");
    document.write("<b>Задание 1</b>, <br><i>Задать температуру в градусах по Цельсию, формула: Tf = (9 / 5) * Tc + 32 </i><br>");
    var temp = prompt("Bведите температуру в °C");
    document.write("Tемпература: " + temp + "°C (по цельсию)<br>");
    var temp_fahrenheit = (9 / 4) * temp + 32;
    var answer = "Температура " + temp_fahrenheit + "°F (по фаренгейту)";
    alert(answer);
    document.write("<b>Ответ на задание 1:</b> " + answer + "<br><br>");
};
celsius_fahrenheit();


alert("Работа с переменными.")
var admin;
document.write("<b>Задание 2:</b> <br>");
document.write("Переменная <b>admin</b> - " + admin);
var name = prompt("Введите имя для переменной name");
document.write("<br>Переменная <i>name</i> = " + name);
admin = name;
document.write("<br>Переменная <i>admin</i> = " + admin + "<br><br>")
alert("Переменная admin = " + admin);