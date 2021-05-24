//---------------------------------------
var сhessBoard = document.createElement('div') // шахматная доска
сhessBoard.classList.add('сhess-board'); // подключила стили к шахматной доске
document.body.append(сhessBoard); //Вставила в body стили шахматной доски
//---------------------------------------
insertСells();
//---------------------------------------
var figuresBlack = ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;']; // массив первой строки черных фигур
var figuresPawns = '&#9823;'; // пешка, ёу
var figuresWhite = ['&#9820;', '&#9822;', '&#9821;', '&#9818;', '&#9819;', '&#9821;', '&#9822;', '&#9820;'];// массив первой строки белых фигур
// figuresWhite[0].style.color = 'white';
//---------------------------------------
var line; // Линии по 8 клеток
var cell; // клетки в линии
//---------------------------------------
//---------------------------------------
var lines = document.querySelectorAll('.line');//Коллекция линий
var cellsLineTwo = document.querySelectorAll('.line')[1];//Вторая строка 
var cellsLineSix = document.querySelectorAll('.line')[6];//Шестая строка 
var cellsLineOne = document.querySelectorAll('.line')[0];//Первая строка 
var cellsLineEight = document.querySelectorAll('.line')[7];//Восьмая строка 
var lineCellsTwo = cellsLineTwo.querySelectorAll('.cell'); // Коллекция клеток на второй строке
var lineCellsSix = cellsLineSix.querySelectorAll('.cell'); // Коллекция клеток на шестой строке
var lineCellsOne = cellsLineOne.querySelectorAll('.cell'); // Коллекция клеток на первой строке
var lineCellsEight = cellsLineEight.querySelectorAll('.cell'); // Коллекция клеток на восьмой строке
//---------------------------------------
for (let i = 0; i < 8; i++) {
   lineCellsTwo[i].innerHTML = figuresPawns; //Присваиваем фигуры клеткам
   lineCellsSix[i].innerHTML = figuresPawns;//Присваиваем фигуры клеткам
   lineCellsOne[i].innerHTML = figuresBlack[i];//Присваиваем фигуры клеткам
   lineCellsEight[i].innerHTML = figuresWhite[i];//Присваиваем фигуры клеткам
   lineCellsSix[i].style.color = 'wheat'; // Задаём цвет белым фигурам
   lineCellsEight[i].style.color = 'wheat'; // Задаём цвет белым фигурам
}


function insertСells() {// Отрисовка шахматной доски
   for (var i = 1; i <= 8; i++) {
      line = document.createElement('div');
      line.classList.add('line');
      сhessBoard.append(line);
      if (i % 2 == 0) { // четные строки если
         for (var j = 1; j <= 8; j++) {
            cell = document.createElement('p');
            cell.classList.add('cell');
            line.append(cell);
            if (j % 2 != 0) { // нечетные клетки если
               cell.style.background = 'rgb(111, 53, 0)';
            }
         }
      } else {
         for (var j = 1; j <= 8; j++) {
            cell = document.createElement('p'); // клетки в линии
            cell.classList.add('cell');
            line.append(cell);
            if (j % 2 == 0) { // нечетные если
               cell.style.background = 'rgb(111, 53, 0)';
            }
         }
      }
   }
}
figures();//
function figures() {
   lines[1, 6]
}



// function cicle() {

// }

// insertСells();

// function insertСells() {
//    for (var j = 0; j < 8; j++) {
//       for (var i = 0; i < 8; i++) {
//          var cell = document.createElement('p'); // клетка
//          cell.innerText = 'WTF?';
//          сhessBoard.append(cell);
//          cell.classList.add('cell');
//       }
//    }
// };
// var cells = document.querySelectorAll('.cell'); // Переменная массив клеток

// for (var i = 0; i < cells.length; i++) {
//    if (i % 2 == 0) {
//       cells[i].style.background = "rgb(111, 53, 0)";

//    }
// }


// console.log(cells);
