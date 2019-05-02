function checkoddeven(t) {
  if (t % 2 === 0) {
    return 'Even number';
  } else {
    return 'Odd number';
  }
}

for (var i = 1; i <= 100; i++) {
  console.log(i + ' is ' + checkoddeven(i));
}
