let headersName = new Map(); // ассоциативный массив с именами заголовков таблицы

const btnsContainer = document.getElementById("buttons"); // div с кнопками
const btnCreate = document.getElementById("mainServices"); // кнопка "Основные услуги"
const btnCreateVip = document.getElementById("vipServices"); // кнопка "VIP-услуги"
const btnDelete = document.getElementById("remove"); // кнопка "Удалить"
let btnRowDelete; // кнопка удаления последней строки

let services;
let countKeys = 0; // кол-во ключей в объекте (кол-во ячеек в таблице)
let countServices = 0; // кол-во услуг (кол-во объектов)

let requestVip = "js/vip-services.json";
let requestServices = "js/services.json";
let request = new XMLHttpRequest();

// обработчик события "click" по кнопке "Основные услуги"
btnCreate.addEventListener("click", () => {
  // getResponse("GET", requestServices, true);

  if (!document.getElementById("generateTable")) {
    request.open("GET", requestServices, true); //асинхронный
    request.responseType = "json";

    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4 && request.status == 200) {
        services = request.response;
        for (let key in services[1]) {
          if (services[1].hasOwnProperty(key)) {
            countKeys++;
          }
        }

        for (let key in services) {
          if (services.hasOwnProperty(key)) {
            countServices++;
          }
        }

        // если таблица с id "generateTable" не существует в DOM
        createTable(services); // вызов функции создания таблицы
        btnCreateVip.classList.remove("hidden");
        btnDelete.removeAttribute("disabled");

        btnRowDelete = document.createElement("button");
        btnRowDelete.id = "btnRowDelete";
        btnRowDelete.textContent = "Удалить последнюю строку";
        btnRowDelete.classList.add("btnRowDelete");

        document
          .getElementById("generateTable")
          .insertAdjacentElement("afterend", btnRowDelete);

        btnRowDelete.addEventListener("click", () => {
          let i = 0;
          for (let row of document.getElementById("generateTable").rows) {
            if (!row.classList.contains("hidden")) {
              i++;
            }
          }
          btnCreate.textContent = "Отобразить";
          if (i > 2) {
            document
              .querySelector(`tbody tr:nth-child(${i - 1})`)
              .classList.add("hidden");
          }
          if (i == 4) {
            btnRowDelete.setAttribute("disabled", "");
          }
        });
      }
    });

    request.send();
  } else {
    btnCreate.textContent = "Основные услуги";

    for (let row of document.getElementById("generateTable").rows) {
      if (row.classList.contains("hidden")) {
        row.classList.remove("hidden");
      }
    }

    document.getElementById("generateTable").classList.remove("hidden");
    btnCreateVip.classList.remove("hidden");
    btnDelete.removeAttribute("disabled");
    btnRowDelete.classList.remove("hidden");
    btnRowDelete.removeAttribute("disabled");
  }
});

// обработчик события "click" по кнопке "VIP-услуги"
btnCreateVip.addEventListener("click", () => {
  let row, cell;
  row = document.getElementById("generateTable").insertRow();
  cell = row.insertCell(); // добавляем ячейку (td) к строке (tr)
  cell.setAttribute("colspan", countKeys);
  cell.textContent = "VIP-Услуги";
  cell.classList.add("title-category");
});

// обработчик события "click" по кнопке "Удалить"
btnDelete.addEventListener("click", () => {
  if (document.getElementById("generateTable")) {
    document.getElementById("generateTable").classList.add("hidden");
    btnCreateVip.classList.add("hidden");
    document.getElementById("btnRowDelete").classList.add("hidden");
    btnDelete.setAttribute("disabled", "");
  }
});

// функция создания таблицы
function createTable() {
  let table = document.createElement("table"); // объект (тег table)
  table.id = "generateTable"; // задаём тегу table id
  table.classList.add("generateTable"); // добавляем класс

  let caption = table.createCaption(); // объект (тег caption)
  caption.textContent = "Наши услуги";

  createTHead(table); // вызов функции создания заголовочной строки (тег thead)
  createTBody(table); // вызов функции создания содержимого таблицы (тег tbody)

  // добавляем объект (таблицу) после div с кнопками
  btnsContainer.insertAdjacentElement("afterend", table);
}

// функция создания заголовка таблицы
function createTHead(table) {
  let tHead = table.createTHead(); // объект (тег thead)
  let row, cellHead; // объекты: строка (тег tr) и заголовочная ячейка (тег th)

  headersName = setHeadersName(services); // вызов функции для получения массива с наименованиями заголовков таблицы

  // внешний цикл - по строкам (tr)
  for (let i = 0; i < 1; i++) {
    row = tHead.insertRow(); // добавляем строку (tr) к thead

    // внутренний цикл - по заголовочным ячейкам (th)
    for (let j = 0; j < countKeys; j++) {
      if (j == 0) {
        cellHead = document.createElement("th"); // создаём заголовочную ячейку (th)
        cellHead.textContent = "№ п/п";
      } else {
        if (headersName.get((j - 1).toString()).keyName === "category") {
          continue;
        }
        cellHead = document.createElement("th"); // создаём заголовочную ячейку (th)
        cellHead.textContent = headersName.get((j - 1).toString()).value; // получаем из массива headersName значение ключа "value" для каждой (j - 1) ячейки
      }

      row.append(cellHead); // добавление ячейки к строке
    }
  }
}

// функция создания содержимого таблицы (тег tbody)
function createTBody(table) {
  let tBody = table.createTBody(); // объект (тег tbody)
  let row, cell; // объекты: строка (тег tr) и ячейка (тег td)

  row = tBody.insertRow(); // добавляем строку (tr) к tbody
  cell = row.insertCell(); // добавляем ячейку (td) к строке (tr)
  cell.setAttribute("colspan", countKeys);
  cell.textContent = headersName.get("1").value;

  cell.classList.add("title-category");

  // внешний цикл - по строкам (tr)
  for (let i = 0; i < countServices; i++) {
    row = tBody.insertRow(); // добавляем строку (tr) к tbody

    // внутренний цикл - по ячейкам (td)
    for (let j = 0; j < countKeys; j++) {
      if (j == 0) {
        cell = row.insertCell(); // добавляем ячейку (td) к строке (tr)
        cell.textContent = i + 1;
      } else {
        if (headersName.get((j - 1).toString()).keyName === "category") {
          continue;
        }

        cell = row.insertCell(); // добавляем ячейку (td) к строке (tr)
        cell.textContent = getValue(i, j - 1); // получаем значение для ячейки из массива services для каждого объекта
      }
    }
  }
}

// функция формирования ассоциативного массива с наименованиями заголовочных ячеек таблицы
function setHeadersName(services) {
  let keyName = "";
  let value = "";
  let index;

  // цикл по ключам объекта из массива services
  for (let key in services[1]) {
    switch (key) {
      case "id":
        continue;
      case "name":
        index = "0";
        keyName = "name";
        value = "Наименование";
        break;
      case "category":
        index = "1";
        keyName = "category";
        value = services[1].category;
        break;
      case "price":
        index = "2";
        keyName = "price";
        value = "Цена";
        break;
      case "discont":
        index = "3";
        keyName = "discont";
        value = "Скидка";
        break;
    }
    // создания элемента массива с ключом "index" и значением в виде объекта
    headersName.set(index, { keyName: keyName, value: value });
  }

  return headersName;
}

// функция возврата значения для ячейки таблицы
function getValue(indexRow, indexCell) {
  let value = "";
  let keyName;

  // цикл по ключам ассоциативного массива headersName
  for (let key of headersName.keys()) {
    // если значение ключа совпадает с порядковым номером ячейки
    if (indexCell.toString() === key) {
      keyName = headersName.get(key).keyName;
    }
  }

  // цикл по массиву объектов
  for (let i = 1; i <= countServices; i++) {
    // если значение порядкового номера строки совпадает с индексом объекта
    if (indexRow + 1 === i) {
      value = services[i][keyName]; // записываем значение ключа "keyName"
    }
    // иначе прерываем текущую итерацию цикла (переходим к следующему элементу)
    else {
      continue;
    }
  }
  return value;
}
