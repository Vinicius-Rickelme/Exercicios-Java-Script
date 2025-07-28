function esperado(valor1) {

  return {

    toBe: function(valor2) {
      if (valor1 === valor2) {
        return "{value: true}"
      } else {
        return "{error: Not Equal}"
      }
    },
    notToBe: function(valor2) {
      if (valor1 !== valor2) {
        return "{value: true}"
      } else {
        return "{error: Equal}"
      }
    }
  };
}

console.log(esperado(5).toBe(5));
console.log(esperado(5).toBe(null));
console.log(esperado(5).notToBe(null));
console.log(esperado("ola mundo").notToBe("ola mundo"));
