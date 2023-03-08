// recupeation d'arguments
const args = process.argv;
var NemeElement = args[2];


// fonctions
function suiteFibonacci(n){
    
    var FN_1 = 1;
    var FN_2 = 0;
    var NemeElement = FN_1;

    if(n == 1)
        return FN_1;
    if(n == 0)
        return FN_2;
    for(let i = 2; i <= n; i++){
        FN_1 = NemeElement;
        NemeElement += FN_2;
        FN_2 = FN_1;
    }
    return NemeElement;
}

//gestion d'erreurs
function siNumerique(argument){
    return /^-?\d+$/.test(argument);
}
function gestionArguments(args){
    if(args.length != 3){
        console.log("-1");
        return false; 
    }
        
    if(!siNumerique(args[2])){
        console.log("-1");
        return false;
    }
    return true;
}

//resolution 
if(gestionArguments(args)){
    var NemeElement = suiteFibonacci(NemeElement);
    
    //affichage
    console.log(NemeElement);
}

