// recupeation d'arguments
const args = process.argv;
var tabDifferenceValeursMin = [];

//fonctions 
function minValeur(val1, val2){
    if(val1 < val2)
        return val1;
    return val2;
}

function calculeDifferenceValeurMin(args){
   let differenceMin = [];

    for(let i = 2; i < args.length-1; i++){
        for(let j = i+1; j < args.length; j++){
            if(args[i]-args[j] < 0){
                differenceMin = (args[i]-args[j]) * -1;
                tabDifferenceValeursMin.push(differenceMin);
            }else{
                differenceMin = (args[i]-args[j]);
                tabDifferenceValeursMin.push(differenceMin);
            }
        }
    }
}

function returnDiffendMin(tabValeurMin){
    let valmin = tabValeurMin[0];

    for(let i = 0; i < tabValeurMin.length-1; i++){
        valmin = minValeur(valmin,tabValeurMin[i+1]);
    }
    return valmin;
}

//gestion d'erreurs
function gestionErreur(args){
    if(args.length < 4){
        console.log("peut d'argumets ");
        console.log("Veuillez saisir une liste de nombres !");
        return false;    
    }
    return true;
}

//resolution
if(gestionErreur(args)){
    calculeDifferenceValeurMin(args);
    console.log(returnDiffendMin(tabDifferenceValeursMin));

}
    