function filtro(arr, fn) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Boolean(fn(arr[i], i))) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}

let arr = [0, 10, 20, 30];
let resultado = filtro(arr, function(n) {
  return n > 10; 
});
console.log(resultado); 
