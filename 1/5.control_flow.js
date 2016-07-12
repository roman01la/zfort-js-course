// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

/* Conditional statements */

if (1 === 1) {
  console.log(true);
}

if (1 === 2) {
  console.log(false);
} else {
  console.log(true);
}

if (1 === 2) {
  console.log(false);
} else if (1 > 2 ){
  console.log(false);
} else {
  console.log(true);
}

if (0 || '' || null || undefined || false || NaN) {
  console.log(false);
}


/* `switch` statement */

// x = 1 || 2 || any

switch (x) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    return;
  default:
    console.log('default');
}
