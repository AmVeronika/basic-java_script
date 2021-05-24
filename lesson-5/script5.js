
var сhessBoard = document.createElement('div') // шахматная доска
сhessBoard.classList.add('сhess-board'); // подключила стили к шахматной доске
document.body.append(сhessBoard); //Вставила в body стили шахматной доски

var line; // Переменная строка клеток
// line.classList.add('line');
var column; //Переменная столбец клеток
// column.classList.add('column')

cell();

function cell() {
   for (var i = 1; i <= 8; i++) {
      line = document.createElement('p');
      сhessBoard.append(line);
      line.classList.add('line');
   }

}
for (var j = 1; j <= 8; j++) {
  cell();

}

