//RECURSIVIDADE
function fatorial(n){
    if(n ==1){
        console.log(n)
        return 1
    }
    else{
        console.log(n)
        return n * fatorial(n-1)

    }
    }
console.log(fatorial(5))
