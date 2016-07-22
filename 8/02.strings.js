// https://learn.javascript.ru/regexp-methods

var result = '#poKeMon'.match(/pokemon/i); // ['pokemon']
result.index // 1
result.input // '#pokemon'

'#pokemon #instagram #pokemon'.match(/pokemon/i); // ['pokemon', 'pokemon']

'#pokemon #instagram #pokemon'.split(/ #/); // ["#pokemon", "instagram", "pokemon"]

'#pokemon #instagram #pokemon'.replace(/pokemon/g, 'instagram'); // "#instagram #instagram #instagram"

/pokemon/.test('#pokemon #instagram #pokemon'); // true
