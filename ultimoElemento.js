Array.prototype.last = function() {
  if (this.length === 0) {
    return -1;  

  } else {
    return this[this.length - 1];  
  }
};

let arr1 = [null, {}, 3];
console.log(arr1.last()); 

let arr2 = [];
console.log(arr2.last()); 
