// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators

/* === Assignment === */
x = 1

x += 1 // 2
x -= 1 // 1
x *= 2 // 2
x /= 2 // 1

/* === Comparison === */

/* "weak" comparison */
1 == 1
1 != 2

3 == '3' // true

/* "strict" comparison */
1 === 1
1 !== 2

3 === '3' // false


2 > 1
2 >= 2

1 < 2
2 <= 2

/* === Arithmetic === */

12 % 5 // 2

++2 // 3
2++ // 2

--2 // 1
2-- // 2

x = 1
-x // -1

+'3' // 3
+true // 1
+false // 0


/* === Logical === */

true && 1 === 1 // true
true && 1 > 2 // false
false && true // false
false && fn() // false

false || true // true
1 || 2 // 1
true || fn() // true

!true // false
!false // true


/* === String === */

'hello ' + 'world' // 'hello world'

x = 'hello '
x += 'world'
x // 'hello world'
