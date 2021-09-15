/* 
1. Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'
2. Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
3. Получить день, месяц и год текущей даты и по отдельности вывести в консоль
*/

 //---1---
 const strreg = "ahb acb aeb aeeb a9b axeb";
 const regex = /a.b/g;
 const found = strreg.match(regex);
 
 console.log(found)

 //---2---
  const strnums = '2+3 223 2223';
  const regexnum = /2\+3/g;
  const found1 = strnums.match(regexnum)
  console.log(found1)

  //---3---
  const now = new Date();
  console.log(now.toString());
