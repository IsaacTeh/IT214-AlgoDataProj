function checkoddeven(t) {
  if (t % 2 === 0) {
    return 'Even number';
  } else {
    return 'Odd number';
  }
}

console.log('Number is: ', checkoddeven(7));
console.log('Number is: ', checkoddeven(11));
console.log('Number is: ', checkoddeven(34));
