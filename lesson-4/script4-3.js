// 3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»

var event; // Вопросы игры
var ok; // Выход из условия
var answers = ['А', 'Б', 'В', 'Г',];//Варианты ответов (всего 4-ре)
var count = 0;
var sum = 50000;

for (var item of questions) { //Добавили методы в объекты массива
   item.quaere = quaere; //Запуск вопросов
   item.check = check; // Проверка ответов
}
let start = prompt('Вечер в хату! Это игра - Кто хочет стать миллионером! \nДля начала игры напишите: Да', 'Да').toUpperCase();
if (start == 'ДА') {
   questionA.quaere(); //Запустили 1ый вопрос
} else {
   alert('Нет, так нет) Чего запускать тогда было html файл?)))')
};
//------------------------------------------
function quaere() { // Функция для вывода всех вопросов
   do {
      ok = false;
      event = prompt(this.q00 + this.q1 + this.q2 + this.q3 + this.q4 + '-1 - Выход из игры').toUpperCase();

      if (event == -1) {
         break;
      }
      else {
         ok = isAnswer(event);
         if (ok) {
            questions[count].check();//Проверка ответа
         }
      }
   } while (!ok);
}
//------------------------------------------
function check() {
   if (event == this.qv) {
      if (count == questions.length - 1) {
         alert('И так, правильный ответ ... ' + this.qv + '\nПоздравляем! Вы заработали 1 миллион рублей!');
      } else {
         alert('И так, правильный ответ ... ' + this.qv + '\nПоздравляем! Вы заработали ' + sum + ' рублей! \nПереходим к следующему вопросу!');
         sum +=150000;
         count++;
         questions[count].quaere();
      }
   } else {
      alert('И так, это неверный ответ. Ваша сумма сгорает \nПравильный ответ - ' + this.qv);
      var again = prompt('Хотите начать игру заново?', 'Да').toUpperCase();
      sum = 50000;
      if (again == 'ДА') {
         count = 0;
         questions[count].quaere();
      } else {
         alert('Нет, так нет) Чего запускать тогда было html файл?)))')
      };
   }
}
//------------------------------------------
function isAnswer(event) { //Проверка на допустимые варианты ответа
   if (answers.indexOf(event) != -1) {
      return true;
   } else {
      alert('Вы ввели недопустимый символ');
      return false;
   }
}