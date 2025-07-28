var argumentsLength = function(...args) {
    return arguments.length
};

console.log(argumentsLength(5));                    
console.log(argumentsLength({}, null, "3"));        
console.log(argumentsLength(1, 2, 3, 4, 5, 6, 7));   


