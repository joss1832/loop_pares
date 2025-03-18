function loopDePares(numero){
    for (let i = 1; i<=100; i++){
        console.log(i)
        if ((i + numero) %2 == 0){
            console.log('el numero ' + (i+numero)+ ' es par')
        }
    }
}

loopDePares(5)