function ArrayWrapper(nums) {
  this.nums = nums; 
}

ArrayWrapper.prototype.valueOf = function () {
    
  let soma = 0;

  for (let i = 0; i < this.nums.length; i++) {
    soma += this.nums[i];
  } return soma;
};

ArrayWrapper.prototype.toString = function () {
  let texto = "[";

  for (let i = 0; i < this.nums.length; i++) {
    texto += this.nums[i];

    if (i !== this.nums.length - 1) {
      texto += ",";
    }
  }
  texto += "]";
  return texto;
};

let obj1 = new ArrayWrapper([1, 2]);
let obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2);     
console.log(String(obj1));    
console.log(String(obj2));    

let obj3 = new ArrayWrapper([]);
let obj4 = new ArrayWrapper([]);
console.log(obj3 + obj4);     
