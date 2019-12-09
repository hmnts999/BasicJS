const array1 = [10, 120, 1100, 15000];

const found1 = array1.find(element => element > 100);
console.log(found1);

let arr2 = ['hi', 'hye', 'hello', 'hello-world'];

const found2 = arr2.find((e,i) => e.length>=3)
console.log(found2);
