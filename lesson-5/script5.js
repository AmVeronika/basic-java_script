
var сhessBoard = document.createElement('div') // шахматная доска
сhessBoard.classList.add('сhess-board'); // подключила стили к шахматной доске
document.body.append(сhessBoard); //Вставила в body стили шахматной доски

// line.classList.add('line');
var column; //Переменная столбец клеток
// column.classList.add('column')

insertСells();

function insertСells() {
   for (var j = 0; j < 8; j++) {
      for (var i = 0; i < 8; i++) {
         var cell = document.createElement('p'); // клетка
         cell.innerText = 'WTF?';
         сhessBoard.append(cell);
         cell.classList.add('cell');
      }
   }
};
var cells = document.querySelectorAll('.cell'); // Переменная массив клеток

for (var i = 0; i < cells.length; i++) {
   if (i % 2 == 0) {
      cells[i].style.background = "rgb(111, 53, 0)";

   } 
   console.log(i);
}


console.log(cells);
