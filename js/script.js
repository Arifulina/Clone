/***
1. Программа хранит в двух переменных курс доллара и евро.В первой переменной у вас
хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях.
Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это
число и считаете.Результат надо вывести на страницу с помощью alert.
***/

/*
let kursDollar = 76;
let kursEuro = 90;
let sumDollars = 0,
    sumEuro = 0;

let sumRubles = Number(prompt("Введите сумму в рублях:"));

if (sumRubles.toString() !== "NaN") {
    sumDollars = (sumRubles / kursDollar).toFixed(2);
    sumEuro = (sumRubles / kursEuro).toFixed(2);

    alert(`Сумма в рублях ${sumRubles} в долларах = ${sumDollars},\nв евро = ${sumEuro}`);
}
else {
    alert("Неверная сумма!");
}
*/

/****
2. Пользователь вводит длину оснований трапеции(a и b), а также высоту трапеции h.
Программа выводит сообщение: «Площадь трапеции будет равна < значение >».Площадь
вычисляется по формуле((a + b) / 2) * h, где a, b - основания, h - высота.
****/

/*
let a; //длина основания трапеции
let b; //длина основания трапеции
let h; //высота трапеции
let S; //площадь трапеции

a = +prompt("Длина основания (a) трапеции:", 10);
b = +prompt("Длина основания (b) трапеции:", 7);
h = +prompt("Высота трапеции:", 5);

S = ((a + b) / 2) * h;

alert(`Площадь трапеции = ${S} кв.м`);
*/
/* второй вариант
let a = +prompt("Введите длину первого основания");
if (a.toString() !== "NaN") {
    let b = +prompt("Введите длину второго основания");
    if (b.toString() !== "NaN") {
        let h = +prompt("Введите высоту");
        if (h.toString() !== "NaN") {
            let summ = a + b;
            alert('Площадь трапеции будет равна ' + summ / 2 * h);
        }
        else {
            alert("Вы ввели не корректные данные! Переходим к следующей задаче!");
        }
    }
    else {
        alert("Вы ввели не корректные данные! Переходим к следующей задаче!");
    }
}
else {
    alert("Вы ввели не корректные данные! Переходим к следующей задаче!");
}*/

/**** 3. Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно.
Отобразить размер вклада поочередно на ближайшие 5 лет.****/

let vklad = +(prompt("Введите сумму вклада:"));
let percent = +(prompt("Введите процент:"));
let result = (((vklad * percent * 1) / 100) + vklad);
alert("Размер вклада 1 год " + result.toFixed(0) + " рублей");
let result2 = (((result * percent * 1) / 100) + result);
alert("Размер вклада 2 год " + result2.toFixed(0) + " рублей");
let result3 = (((result2 * percent * 1) / 100) + result2);
alert("Размер вклада 3 год " + result3.toFixed(0) + " рублей");
let result4 = (((result3 * percent * 1) / 100) + result3);
alert("Размер вклада 4 год " + result4.toFixed(0) + " рублей");
let result5 = (((result4 * percent * 1) / 100) + result4);
alert("Размер вклада 5 год " + result5.toFixed(0) + " рублей");

/**** 4.Запросить у пользователя ввод числа и сохранить это число в переменную a.Если
переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.****/

/* alert('Следущая задача');
let p = +prompt("Введите число");
if (p == 10) {
    alert("Верно!");
}
else {
    alert("Неверно!");
}
*/

/**** 5. Выведите столбец чисел от 1 до 50.
 ****/

/*
let result = "";

for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
        console.log(`${i}\n`);
        result = result + i + "\n";
    }
}
alert(result);
*/

/****
6. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
****/

/*
let a = 10;
let b = 3;

alert(`Остаток от деления a на b = ${a % b}`);
*/
