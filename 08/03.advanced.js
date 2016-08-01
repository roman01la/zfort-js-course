// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://regex101.com/
// http://regexr.com/

/[0123456789]/.test('in 1992') // true
/[0-9]/.test('in 1992') // true
/[a-z]/.test('in 1992') // true
/[A-Z]/.test('in 1992') // false

/\d/.test('in 1992') // true --> Any digit character
/\w/.test('in 1992') // true --> An alphanumeric character
/\s/.test('in 1992') // true --> Any whitespace character

/\D/.test('in 1992') // true --> A character that is not a digit
/\W/.test('in 1992') // true --> A nonalphanumeric character
/\S/.test('in 1992') // true --> A nonwhitespace character

/./.test('in 1992') // true --> Any character except for newline

/\d\d-\d\d-\d\d\d\d \d\d:\d\d/.test('30-01-2003 15:20') // true

/[^01]/.test('1100100010100110') // false --> match any character except the ones in the set

/\d+/.test('123') // true

/\d*/.test('') // true

/behaviou?r/.test('behaviour') // true
/behaviou?r/.test('behavior') // true

/\d{1,2}/.test('123')

/\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/.test('30-1-2003 8:45') // true

/boo+(hoo+)+/i.test('Boohoooohoohooo') // true

var match = /\d+/.exec('one two 100');

match // ['100']
match.index // 8

'one two 100'.match(/\d+/) // ['100']

/bad(ly)?/.exec('bad') // ['bad', undefined]

/(\d)+/.exec('123') // ['123', '3']
