'hello'.startsWith('hell') // true
'hello'.endsWith('lo') // true
'hello'.includes('el') // true

'hello'.split('') // ['h', 'e', 'l', 'l', 'o']

'hello'.substring(2, 4) // 'll'
'hello'.substr(1, 4) // 'ello'

'hello'.replace('l', 'x') // 'hexlo'
'hello'.replace(/l/g,'x') // 'hexxo'

'HELLO'.toLowerCase() // 'hello'
'hello'.toUpperCase() // 'HELLO'

'  hello '.trim() // 'hello'
