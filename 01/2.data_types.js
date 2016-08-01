// https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof

/* === Primitive data types === */

/* String */
'string'
"sdhkjdshg"

typeof 'fdgfdgk' // string
typeof String('dkfjghf') // object

var x = 'sjdkfdkjgh'
typeof x // 'string'
typeof 'string' // 'string'

/* Number */
1
+Infinity
-Infinity
NaN

typeof 1 // 'number'
typeof +Infinity // 'number'
typeof -Infinity // 'number'
typeof NaN // 'number'

/* Boolean */
true
false

typeof true // 'boolean'
typeof false // 'boolean'

/* null */
null

typeof null // 'object'

/* undefined */
undefined

typeof undefined // 'undefined'

/* === Object === */

/* Constructor function */
new Object()

/* Object literal */
{
  gdf: 'dfgfg',
}

typeof {} // 'object'

typeof function() {

} // function
