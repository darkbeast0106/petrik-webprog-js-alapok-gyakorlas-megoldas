const lista = [0, 7, 16, 30, 41];
// Elvárt megoldás.
for (let index = lista.length - 1; index >= 0; index--) {
    const element = lista[index];
    console.log(element);
}

// Egyszerűbb megoldás:
console.log(lista.reverse().toString());