const names = ['J','Joe', 'John', 'Johny', 'Johnson']

let filtered = names.filter((e,i) => e.length>3);
console.log(filtered);


let arr = ['zero', 0, '0', true, 'zeroes']

let filteredArr = arr.filter((e,i) => typeof(e)==='string' && e.length>4)
console.log(filteredArr);