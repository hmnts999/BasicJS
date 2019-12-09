// Won't invoke callback function for index having empty value

let arr1 = ['zero', 'Zero', '0', 1,,, null, undefined, 'one']

arr1.forEach(function(e){
    console.log(e);
})


const arr2 = [0,1,2,,,3,,];
let numCallbackRuns = 0;

arr2.forEach(function(element){
  console.log(element);
  numCallbackRuns++;
});

console.log("numCallbackRuns: ", numCallbackRuns);