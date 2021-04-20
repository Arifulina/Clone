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

/**** 3. Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно.
Отобразить размер вклада поочередно на ближайшие 5 лет.****/

// let percentYear = 0;
// let depositSumYear = 0;

// let depositAmount = +prompt("Введите годовую сумму депозита:");

//      if (isNaN(depositAmount) || depositAmount == "" || depositAmount == null) {
//          alert("Неправильно заполнено поле «Сумма».\n" +
//         "(i) Поле не может быть пустым\n" +
//         "и не должно содержать текст.");
//      }

//     else if (depositAmount <= 0) {
//     alert("Неправильно заполнено поле «Сумма».\n" +
//         "(i) Сумма не может быть отрицательным числом или равной 0.");
//     } else {
//     let DepositPercent = Number(prompt("Введите годовой % от вклада:"));
//     if (isNaN(DepositPercent) || DepositPercent == "" || DepositPercent == null) {
//         alert("Неправильно заполнено поле «Процент».\n" +
//             "(i) Поле не может быть пустым\n" +
//             "и не должно содержать текст.");
//     }
//     else if (DepositPercent <= 0) {
//         alert("Неправильно заполнено поле «Процент».\n" +
//             "(i) Процентное число не может быть отрицательным или равным 0.");
//     }
//     else {
//         // процент от суммы
//         percentYear = depositAmount * DepositPercent / 100;
//         // percentYear = depositAmount % DepositPercent;

//         // сумма за год с процентами
//         depositSumYear = depositAmount + percentYear;

//         for (let i = 1; i <= 5; i++) {
//             alert(`Годовой процент: ${percentYear}\n` +
//                 `Годовой размер вклада: ${depositSumYear}`);

//             // перезаписываем процент от годовой суммы
//             percentYear = depositSumYear * DepositPercent / 100;
//             // percentYear = depositSumYear % DepositPercent;
//             console.log(`${percentYear}`);

//             // перезаписываем сумму за год с процентами
//             depositSumYear = depositSumYear + percentYear;
//             console.log(`${depositSumYear}`);
//         }
//     }
// }
/*****

/*****
4. Запросить у пользователя ввод числа и сохранить это число в переменную a. Если
переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
*****/

// let a = +prompt("Введите число от 1 до 10:");
// if (a !== 10) {
//     alert(`a = ${a} - 'Неверно'`);
// } else {
//     alert(`a = ${a} - 'Верно'`);
// }

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

/*****
7. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
*****/
// const MAXLENGTHSTR = 50;
// let str = "";
// let symbol = "*";
// let flag = true;

// let lengthStr = Number(prompt("Длина строки:"));

// if (lengthStr.toString() != "NaN") {
//     if (lengthStr > 0 && lengthStr <= MAXLENGTHSTR) {

//         let answerUser = confirm("Заполнять цифрами?");

//         switch(answerUser) {
//             case true:  for (let i = 1; i <= lengthStr; i++) {
//                             str += i;
//                         }
//                         break;
//             case false: while(flag) {
//                             symbol = prompt("Укажите символ для заполнения строки:");
//                             if(symbol != null) {
//                                 if(symbol.length == 1) {
//                                     for (let i = 1; i <= lengthStr; i++) {
//                                         str += symbol;
//                                     }
//                                     break;
//                                 }
//                             }
//                             else {
//                                 flag = false;
//                             }
//                         }
//                         break;
//         }
//         flag ? alert(`Результат:\n${str}`) : alert("Вы отменили!");
//     }
//     else if(lengthStr == "") {
//         alert(`Ошибка!!! Длина строки не должна быть пустой!`);
//     }
//     else {
//         alert(`Ошибка!!! Длина строки должна быть > 0 и <= ${MAXLENGTHSTR}`);
//     }
// }
// else {
//     alert("Ошибка!!! Длина строки должна быть числом!");
// }

/* 8.  */
// let str = "Привет друзья!";
// let resultStr = "";
// for(let i = 0; i < str.length; i++) {
//     if(i == str.length - 1) {
//         resultStr += str[i];
//     }
//     else {
//         resultStr += str[i] + "\n";
//     }
// }
// alert(resultStr);



/*Задача № 8.
Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным
символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.*/

// switch (confirm(`Задача № 8.\n` +
// 				`Дано значение: «abcde».\n` +
// 				`Вывести на экран символ «a», «b», «e» через переменную «str»?`)) {
// 	case true:
// 		let str = "abcde";
// 		let flag = true;
// 		for(let i = 0; i < str.length; i++) {
// 			if(i == 0 || i == 1 || i == str.length - 1) {
// 				flag = confirm(`Переменная «str» содержит значение «abcde»,\n` +
// 								`в переменной «str[${i}]» находится символ «${str[i]}».`);
// 				if(flag == false) {
// 					break;
// 				}
// 			}
// 		}
// 	case false:
// 		break;
// }

//9. Дан массив с элементами 'Привет, ', 'мир' и '!'.Необходимо вывести на экран фразу 'Привет, мир!'.

// let mas = ["Привет, ", "мир", "!"];
// let str = "";
// for(let i = 0; i < mas.length; i++) {
//     str += mas[i];
// }
// alert(str);


// let mas = [];
// let str = "";
// let countItems = +prompt("Кол-во элементов в массиве:");

// if (countItems > 0 && countItems <= 20) {
//     for (let i = 0; i < countItems; i++) {
//         mas[i] = Math.ceil(Math.random() * 10);
//     }
//     for (let index in mas) {
//         console.log(mas[index] + '\n');
//         str += mas[index] + '\n';
//     }
//     alert(str);
// }
// else {
//     console.log("Кол-во элементов в массиве должно быть > 0 и не больше 20!");
// }

/* 10. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.*/

// let arrayOne = ['a', 'b', 'c'];
// let arrayTwo = [1, 2, 3, 4, 5];
// let arrayMix = [];

// let str = "";
// let i = 0;

// for (let index in arrayOne) {
//     arrayMix[i] = arrayOne[index];
//     i++;
// }
// for (let index in arrayTwo) {
//     arrayMix[i] = arrayTwo[index];
//     i++;
// }
// for (let index in arrayMix) {
//     str += arrayMix[index] + '\n';
// }
// alert(str);

/*второй вариант решения 10.*/
// let massLet = ['a', 'b', 'c'];
// let massNum = [1, 2, 3];


// for (let i = 0; i < massNum.length; i++) {

//     massLet[massLet.length] = massNum[i];

// }
// alert(massLet);

/*Задача № 10:*/
// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// let arr1 = ['a', 'b', 'c'];
// let arr2 = [1, 2, 3];

// switch (confirm(`Задача № 10.\n` +
// 				`Даны два массива: arrAlphabet['a', 'b', 'c'] и arrNumeric[1, 2, 3].\n` +
// 				`Объединить их вмете?`)) {
// 	case true:
// 		alert(`Новый масив содержит: [${arr1.concat(arr2)}]`);
// 	case false:
// 		break;
// }


/*Задача № 12.
Напишите фрагмет кода который будет присваивать значение 7.5 переменной х, а затем
переменным a и b будет присваивать значения вдвое и втрое (соответственно) большие
значения переменной х. Вывести эти значения на экран.*/

// switch (confirm(`Задача № 12.\n` +
// 				`Переменная «x» = 7.5.\n` + `Присвоить переменным «a» и «b» ` +
// 				`значения в 2-ое и в 3-ое больше значения переменной «x»?`)) {
// 	case true:
// 		let x = 7.5;
// 		let a = Math.pow(x, 2);
// 		let b = Math.pow(x, 3);
// 		let flag = true;
// 		while(flag == true) {
// 			flag = confirm(`«a» = ${a};\n` + `«b» = ${b}.`);
// 			if(flag == true) {
// 				a += a;
// 				b += b;
// 			}
// 			else {
// 				break;
// 			}
// 		}
// 	case false:
// 		break;
// }


// let str1 = "ПРИВЕТ ";
// let str2 = "друзья!";

// alert(str1.substring(2, 5));
// alert(str1.substr(3, 4));
// alert(str1.indexOf("Р"));

// let month = "";
// let numberDate;
// let dayWeek = "";

// let date = new Date();

// let arrayDays = {
//     0: "воскресенье",
//     1: "понедельник",
//     2: "вторник",
//     3: "среда",
//     4: "четверг",
//     5: "пятница",
//     6: "суббота"
// }

// let arrayMonth = {
//     0: "январь",
//     1: "февраль",
//     2: "март",
//     3: "апрель",
//     4: "май",
//     5: "июнь",
//     6: "июль",
//     7: "август",
//     8: "сентябрь",
//     9: "октябрь",
//     10: "ноябрь",
//     11: "декабрь"
// }

// for (let index in arrayDays) {
//     if (date.getDay() == index) {
//         dayWeek = arrayDays[index];
//     }
// }

// for (let index in arrayMonth) {
//     if (date.getMonth() == index) {
//         month = arrayMonth[index];
//     }
// }

// console.log(`Сегодня - ${month}, ${date.getDate()} (${dayWeek})`);

/* дата*/
// let month = "";
// let dayWeek = "";

// let date = new Date();

// let arrayDays = {
//     0: "воскресенье",
//     1: "понедельник",
//     2: "вторник",
//     3: "среда",
//     4: "четверг",
//     5: "пятница",
//     6: "суббота"
// }

// let arrayMonth = {
//     0: "январь",
//     1: "февраль",
//     2: "март",
//     3: "апрель",
//     4: "май",
//     5: "июнь",
//     6: "июль",
//     7: "август",
//     8: "сентябрь",
//     9: "октябрь",
//     10: "ноябрь",
//     11: "декабрь"
// }

// for (let index in arrayDays) {
//     if (date.getDay() == index) {
//         dayWeek = arrayDays[index];
//     }
// }

// for (let index in arrayMonth) {
//     if (date.getMonth() == index) {
//         month = arrayMonth[index];
//     }
// }

// console.log(`Сегодня - ${date.getFullYear()}, ${month}, ${date.getDate()}(${dayWeek}). Время ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

/*** Пример ***/
// let a, b, c;
// let D;
// let x1, x2;

// function setParametrs() {
//     a = Number(prompt("коэф. a:"));
//     checkParametr(a);

//     b = Number(prompt("коэф. b:"));
//     checkParametr(b);

//     c = Number(prompt("коэф. c:"));
//     checkParametr(c);
// }

// function checkParametr(param) {
//     return isNaN(param) ? alert("Не число!") : param;
// }

// setParametrs();

/*решение уравнения*/

let inputs = document.querySelectorAll("input"); //коллекция полей (поля ввода и кнопки)

let inputParamA = document.getElementById("param_a");
let inputParamB = document.getElementById("param_b");
let inputParamC = document.getElementById("param_c");

let paramA; //значение коэф. а
let paramB; //значение коэф. b
let paramC; //значение коэф. c

let btnCalc = document.getElementById("btn_calc"); //кнопка расчёта
let btnReset = document.getElementById("btn_reset"); //кнопка очистки

let result; //результат вычисления
let solution; //объект (параграф) для вывода результата
let removed;

// обработчик события "input" при вводе в поле коэф. a 
inputParamA.addEventListener("input", () => {
    inputParamB.removeAttribute("disabled");

    btnCalc.removeAttribute("disabled");
    btnReset.removeAttribute("disabled");

    paramA = +inputParamA.value;
})

// обработчик события "input" при вводе в поле коэф. b
inputParamB.addEventListener("input", () => {
    inputParamC.removeAttribute("disabled");
    paramB = +inputParamB.value;
})

// обработчик события "input" при вводе в поле коэф. c
inputParamC.addEventListener("input", () => {
    paramC = +inputParamC.value;
})

// обработчик события "click" при клике по кнопке "Очистить"
btnReset.addEventListener("click", () => {
    for (let item of inputs) {
        if (item.getAttribute("type") == "number") {
            item.value = "";
        }
        if (item.getAttribute("id") == "param_a") {
            continue;
        } else {
            item.setAttribute("disabled", "disabled");
        }
    }
    removed = document.body.removeChild(solution);
})

// обработчик события "click" при клике по кнопке "Произвести расчёт"
btnCalc.addEventListener("click", () => {
    result = calcSolution(paramA, paramB, paramC);
    printSolution();
})

// главная функция расчёта корней (вычисление)
function calcSolution(a, b, c) {
    let D; //дискриминант
    let result; //строка с итогом

    if (typeof b == "undefined") {
        b = 0;
    }
    if (typeof c == "undefined") {
        c = 0;
    }

    if (a == 0) {
        if (b == 0) {
            result = "Корней нет!";
        } else {
            if (c != 0) {
                result = -c / b;
            } else {
                result = 0;
            }
        }
    } else if (b == 0) {
        if (c != 0) {
            (-c / a >= 0) ? result = Math.sqrt(-c / a): result = "Корней нет!";
        } else {
            result = 0;
        }
    } else if (c == 0) {
        result = [0, -b / a];
    } else {
        D = calcD(a, b, c);
        result = calcRoots(D, a, b, c);
    }
    return result;
}

// функция для расчёта дискриминанта
function calcD(a, b, c) {
    return b ** 2 - 4 * a * c;
}

// функция для расчёта корней квадратного уравнения
function calcRoots(D, a, b, c) {
    let x1, x2; //корни квадратного уравнения

    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);

        return [x1, x2];
    } else if (D == 0) {
        return -b / (2 * a);
    } else {
        return "Корней нет!";
    }
}

// функция вывода результа на страницу (в объект p)
function printSolution() {
    if (removed) {
        solution = createElem("p", "");
        document.body.append(solution);

        removed = null;
    }
    if (solution) {
        solution.innerHTML = checkResult(result);
    } else {
        solution = createElem("p", checkResult(result));
        document.body.append(solution);
    }
}

//функция создания элемента
function createElem(tag, content) {
    let elem;

    elem = document.createElement(tag);
    elem.innerHTML = content;

    return elem;
}

// функция проверки результата вычисления
function checkResult(result) {
    if (typeof result == "string") {
        return result;
    } else if (typeof result == "number") {
        return `Уравнение имеет один корень: x = ${result.toFixed(2)}`;
    } else {
        return "Уравнение квадратное. Имеет два корня:\n" + "x1 = " + result[0].toFixed(2) + "\nx2 = " + result[1].toFixed(2);
    }
}


// let params = setParametrs();
// let solution;

// if (typeof params != "string") {
//     solution = calcSolution(params[0], params[1], params[2]);
//     getSolution(solution);
// }
// else {
//     alert(params);
// }

// function setParametrs() {
//     let a, b, c; //коэф. кв. уравнения

//     if(a = setParam("a")) {
//         if(b = setParam("b")) {
//             if(c = setParam("c"))
//             {
//                 return [a, b, c];
//             }
//         }
//     }
//     return "Вы отменили ввод!";
// }

// function setParam(nameParam) {
//     let param; //коэффициент уравнения
//     let cancel; //флаг для проверки ввода параметра

//     do {
//         param = prompt(`Коэф. ${nameParam}:`);
//         cancel = checkParametr(param);
//     } while (cancel);

//     return param;
// }

// function checkParametr(param) {
//     if (typeof param == "object") {
//         return false;
//     }
//     else if (isNaN(param) || param == "") {
//         alert("Ошибка! Введена пустая строка или не число!");
//         return true;
//     }
// }

// function getSolution(solution) {
//     if(typeof solution == "string") {
//         alert(solution);
//     }
//     else if(typeof solution == "number") {
//         alert(`Уравнение имеет один корень: x = ${solution.toFixed(2)}`);
//     }
//     else {
//         alert("Уравнение квадратное. Имеет два корня:\n" + "x1 = " + solution[0].toFixed(2) + "\nx2 = " + solution[1].toFixed(2));
//     }
// }