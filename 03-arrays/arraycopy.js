var fruits = ['apple', 'banana', 'ciku', 'durian', 'grape'];
console.log(fruits);

fruits.unshift('rambutan');
console.log(fruits);

fruits.push('langsat');
console.log(fruits);

var myfruit = fruits.splice(0);
console.log('fruits :', fruits);
console.log('My fruits: ', myfruit);
