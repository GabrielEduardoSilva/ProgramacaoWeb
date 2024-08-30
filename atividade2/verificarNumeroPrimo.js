// Implemente uma função com a seguinte assinatura: verificarNumeroPrimo(n);

// A função deve verificar se o número "n" recebido é primo e retornar true, caso verdadeiro, ou false caso não seja primo.

// No mesmo arquivo, faça a chamada da função para os seguintes casos de teste:

// verificarNumeroPrimo(0); //false
// verificarNumeroPrimo(1); //false
// verificarNumeroPrimo(2); //true
// verificarNumeroPrimo(3); //true
// verificarNumeroPrimo(7); //true
// verificarNumeroPrimo(83); //true
// verificarNumeroPrimo(100); //false
// verificarNumeroPrimo(991); //true
// verificarNumeroPrimo(104729); //true
// verificarNumeroPrimo(14348907); //false

function verificarNumeroPrimo(n) {
    // 1 não é primo
    if(n <= 1) {
        return false;
    }

    // Se n for maior que 2 e for par
    if ((n > 2) && (n % 2 == 0)) {
        return false;
    }

    // Vai percorrer todos os números até a metade do número inserido. 
    // Isso porque se ele não for divisível pela metade dele, ele não é divisível por mais nada
    // Incrementando o iterador em 2 para testar a divisão somente com números ímpares (pois números pares são divisiveis por 2)
    for(let i = 3; i < n / 2; i += 2) {
        if(n % i == 0) {
            return false;
        }
    }

    return true;
}

console.log(verificarNumeroPrimo(0)); //false
console.log(verificarNumeroPrimo(1)); //false
console.log(verificarNumeroPrimo(2)); //true
console.log(verificarNumeroPrimo(3)); //true
console.log(verificarNumeroPrimo(7)); //true
console.log(verificarNumeroPrimo(83)); //true
console.log(verificarNumeroPrimo(100)); //false
console.log(verificarNumeroPrimo(991)); //true
console.log(verificarNumeroPrimo(104729)); //true
console.log(verificarNumeroPrimo(14348907)); //false