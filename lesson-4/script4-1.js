// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
console.log('Задача №1 - 4 урок');
var arr = ['сотни', 'десятки', 'единицы'];
var obj = {};
var min = 0;
var max = 999;
// var num = String(parseInt(Math.random() * (max - min + 1) + min));
var num = prompt('Введи от 0 до 999', 123);
function fun(obj) {
   if (isNaN(num)) {
      alert('Некорректно, давай поновой');

   } else if (num < 0 || num >= 1000) {
      alert('Введи от 0 до 999, ни больше ни меньше', 123);

   } else if (num.length == 3) {
      for (let i = 0; i < num.length; i++) {
         obj[arr[i]] = num[i];
      }
   } else if (num.length == 2) {
      for (let i = 0; i < num.length; i++) {
         obj[arr[i + 1]] = num[i];
      }
   } else if (num.length == 1) {
      for (let i = 0; i < num.length; i++) {
         obj[arr[i + 2]] = num[i];
      }
   }
   return console.log(obj);
}
fun(obj);










