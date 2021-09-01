var сhessBoard = document.createElement('div') // шахматная доска
сhessBoard.classList.add('сhess-board'); // подключила стили к шахматной доске
document.body.append(сhessBoard); //Вставила в body стили шахматной доски
//---------------------------------------
insertСells(); // Запуск функции - отрисовка шахматной доски
bibi(); //Создание контейнеров адреса
//---------------------------------------
var figures = ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;']; // массив первой строки фигур (черные и белые)
var figuresPawns = '&#9823;'; // пешка, ёу
//---------------------------------------
var line; // Линии по 8 клеток
var cell; // клетки в линии
//---------------------------------------
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
   lineCellsTwo[i].innerHTML = figuresPawns; //Присваиваем черные пешки клеткам 
   lineCellsSix[i].innerHTML = figuresPawns;//Присваиваем белые пешки клеткам
   lineCellsOne[i].innerHTML = figures[i];//Присваиваем черные фигуры клеткам
   lineCellsEight[i].innerHTML = figures[i];//Присваиваем белые фигуры клеткам
   lineCellsSix[i].style.color = 'wheat'; // Задаём цвет белым пешкам
   lineCellsEight[i].style.color = 'wheat'; // Задаём цвет белым фигурам
}
//---------------------------------------
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; //Массив для алфавитного адреса
var numbering = [8, 7, 6, 5, 4, 3, 2, 1]; // Массив для номерного адреса
//---------------------------------------
var alphabets; //Контейнер для алфавитного адреса
var numberings; //Контейнер для номерного адреса
var alphabetsCell;//Клетки в адресе
var numberingsCell;//Клетки в адресе
//---------------------------------------
var alphabetsPos = document.querySelectorAll('.alphabets');//Коллекции для алфавита
var numberingsPos = document.querySelectorAll('.numberings'); //Коллекции для номерации
var alphabetsCellPosTop = alphabetsPos[1].querySelectorAll('.alphabet');//Ячейки
var numberingsCellPosRight = numberingsPos[1].querySelectorAll('.numbering');//Ячейки
var alphabetsCellPosBottom = alphabetsPos[0].querySelectorAll('.alphabet');//Ячейки
var numberingsCellPosLeft = numberingsPos[0].querySelectorAll('.numbering');//Ячейки
alphabetsPos[1].classList.add('alphabets-p',);
numberingsPos[1].classList.add('numberings-p');

function bibi() {//Контейнеры адреса
   for (var i = 0; i < 2; i++) {
      createCellBibi(alphabets, 'alphabets', alphabetsCell, 'alphabet');
      createCellBibi(numberings, 'numberings', numberingsCell, 'numbering');
   }
}
function createCellBibi(a, b, c, d) {
   a = document.createElement('div');
   a.classList.add(b);
   сhessBoard.append(a);
   for (var j = 0; j < 8; j++) { //Добавили параграфа в линию с адресами
      c = document.createElement('p');
      c.classList.add(d);
      a.append(c);
   }
}
//---------------------------------------
for (let g = 0; g < 8; g++) { //Добавление элементов массива для алфавитного адреса в контейнер
   alphabetsCellPosBottom[g].innerHTML = alphabet[g];
   numberingsCellPosLeft[g].innerHTML = numbering[g];
   alphabetsCellPosTop[g].innerHTML = alphabet[g];
   numberingsCellPosRight[g].innerHTML = numbering[g];
}
//---------------------------------------
function insertСells() {// Отрисовка шахматной доски
   for (var i = 1; i <= 8; i++) {
      line = document.createElement('div');
      line.classList.add('line');
      сhessBoard.append(line);
      function hh() { // Функция создания элементов клеток
         cell = document.createElement('p');
         cell.classList.add('cell');
         line.append(cell);
      }
      if (i % 2 == 0) { // четные строки если
         for (var j = 1; j <= 8; j++) {
            hh();
            if (j % 2 != 0) { // нечетные клетки если
               cell.style.background = 'rgb(111, 53, 0)';
            }
         }
      } else {
         for (var j = 1; j <= 8; j++) {
            hh();
            if (j % 2 == 0) { // нечетные если
               cell.style.background = 'rgb(111, 53, 0)';
            }
         }
      }
   }
}


