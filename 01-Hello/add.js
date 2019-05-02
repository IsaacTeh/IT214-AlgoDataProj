function add(x, y) {
  var x, y, z; // Statement 1

  z = x + y; // Statement 4
  return add;
  console.log('z = ', +z);
}

var sum = add(4, 7);
console.log('Sum is :' + sum);

// add(2, 3);
// add(5, 6);
// add(8, 4);
