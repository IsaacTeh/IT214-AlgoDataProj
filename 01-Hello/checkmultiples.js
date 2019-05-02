function checkmultiple(t) {
  if (t % 5 === 0) {
    return 'multiple of 5';
  } else {
    return 'not multiple of 5';
  }
}
for (var i = 1; i <= 100; i++) {
  console.log(i + ' is ' + checkmultiple(i));
}
