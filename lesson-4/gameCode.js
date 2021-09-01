//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, eventTwo, ok;

var answers = [
];

function met() {
   do {//Выводим первый вопрос
      ok = false;
      event = +prompt(this.a00 + this.a1 + this.a2 + '-1 - Выход из игры');

      if (event == -1) {
         break;
      }
      else {
         ok = isAnswer(this.a0, event);
      }
   } while (!ok);
   answers.push(event);
}

worksA.method = met;
worksB.method = met;
worksC.method = met;
worksD.method = met;


worksA.method()

switch (event) {
   case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
      worksB.method()
      switch (event) {
         case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
         case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
            worksD.method()
            break;
         case -1: // Второе действие
            break;
         default:
            alert('Ошибка');
      }
      break;
   case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
      worksC.method()
      switch (event) {
         case 1: // Второе действие
         case 2: // Второе действие
            worksD.method()
            break;
         case -1: // Второе действие
            break;
         default:
            alert('Ошибка');
      }
      break;
   case -1: // Первое действие
      break;
   default:
      alert('Ошибка');
}
alert('Спасибо за игру');

answ();
function answ() { //  Уточнение вопроса
   eventTwo = +prompt('Какой вопрос Вам вывести? 1, 2 или 3?', '1');

   if (eventTwo < 1 || eventTwo > 3) {
      alert('Ваше число выходит из допустимого диапозона');
      answ();
   }
}
console.log(answers);
switch (eventTwo) {
   case 1:
      if (answers[0] == 1) {
         alert(worksA.a00 + worksA.a1);
      } else {
         alert(worksA.a00 + worksA.a2)
      };
      break;
   case 2:
      if (answers[0] == 1) {
         if (answers[1] == 1) {
            alert(worksB.a00 + worksB.a1);
         } else {
            alert(worksB.a00 + worksB.a2)
         };
      }
      else {
         if (answers[1] == 1) {
            alert(worksC.a00 + worksC.a1);
         } else {
            alert(worksC.a00 + worksC.a2)
         };
      }
      break;
   case 3:
      if (answers[2] == 1) {
         alert(worksD.a00 + worksD.a1);
      } else alert(worksD.a00 + worksD.a2);
      break;

}

//------------------------------------------
function isAnswer(q, event) {
   if (isNaN(event) || !isFinite(event)) {
      alert('Вы ввели недопустимый символ');
      return false;
   }
   else if (event < 1 || event > q) {
      alert('Ваше число выходит из допустимого диапозона');
      return false;
   }
   return true;

}

