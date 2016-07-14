// https://developer.mozilla.org/ru/docs/Web/JavaScript/Equality_comparisons_and_sameness
// http://jibbering.com/faq/notes/type-conversion/
// https://learn.javascript.ru/types-conversion


/* To Boolean */

!!0 // false
!!'' // false
!!null // false
!!undefined // false
!!false // false
!!NaN // false

!!1 // true
!!'hello' // true
!![] // true


/* To String */
123.toString()
(123).toString() // '123'
String(123) // '123'
123 + '' // '123'


/* To Number */

+'234' // 234
+'0' // 0
+'' // 0
+'xx' // NaN
+undefined // NaN
+null // 0
+true // 1
+false // 0
