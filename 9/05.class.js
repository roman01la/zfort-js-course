
// Value of `id` attribute
element.id


// Value of `class` attribute
element.className

/* <div class="a b c"> */
element.className // "a b c"

element.classList.contains('b')
element.classList.add('d', 'e')
element.classList.remove('a', 'd', 'e')
element.classList.toggle('b')
element.classList.toggle('b', 5 > 0) // add
element.classList.toggle('b', 5 > 10) // remove
