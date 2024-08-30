// Implemente a função transporMatriz(A);
// A função deve receber uma matriz (array de arrays) A e imprimir a matriz original e a versão transposta;

function transporMatriz(a) {
    a_string = "";
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < a[0].length; j++) {
            a_string += "" + a[i][j] + " ";
        }
        a_string += "\n";
    }

    console.log(a_string);

    at_string = "";

    for(let j = 0; j < a[0].length; j++) {
        for(let i = 0; i < a.length; i++) {
            at_string += "" + a[i][j] + " ";
        }
        at_string += "\n";
    }

    console.log(at_string);
}

let a = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(a);