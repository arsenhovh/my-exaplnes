/* 1.Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
   2.Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
   3.Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
   4.Выполнить явное преобразование(number, string, boolean)
*/

//---1---
const num = 10;
const str = "string";
const bul = true;
const bul1= false

// but 0 and "" are fasle too

const str_num = str + num ; // return string string + 10
const str_bul = str + bul;  // return string, stringtrue
const num_bul = num + bul; // retrun number 10 + 1 (true = 1)
const num_bul1 = num + bul1 // return number 10 + 0( false = 0) 
console.log(str_bul,str_num,num_bul);

//---2---
const str__num = str * num ; // return NaN
const str__bul = str * bul;  // return NaN
const num__bul = num * bul; // retrun 10
const num__bul1 = num * bul1 // return 0

console.log(str__bul,str__num,num__bul,num__bul1);

//---3---
const str__numdiv = str / num ; // return NaN
const str__buldiv = str / bul;  // return NaN
const num__buldiv = num / bul; // retrun 10
const num__bul1div = num / bul1 


console.log(str__buldiv,str__numdiv,num__buldiv,num__bul1div);
//---4---
const str1 = "55"
const num1 = Number(str);//NaN
const numb = Number(str1);//number
const numbul = Number(bul); 
const numbul1 = Number(bul1);
const str2 = String(num); //string
const str3 = String(bul); //string
const bul2 = Boolean(str); // true
const bul3 = Boolean(num); //true