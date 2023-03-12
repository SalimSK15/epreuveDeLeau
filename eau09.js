// recupeation d'arguments
const args = process.argv;
var valeurEntree01 = args[2];
var valeurEntree02 = args[3];

//fonctions
function minValeurs(valeurEntree01,valeurEntree02){
    let tabMinMax = [];

    if(valeurEntree01 < valeurEntree02){
        tabMinMax.push(valeurEntree01,valeurEntree02);
    }else{
        tabMinMax.push(valeurEntree02);
        tabMinMax.push(valeurEntree01);
    }
    
    return tabMinMax;
}
function siNumerique(argument){
    return /^-?\d+$/.test(argument)
}
function valeursMinMax(valeurEntree01,valeurEntree02){
    let minVal = minValeurs(valeurEntree01,valeurEntree02)[0];
    let maxVal = minValeurs(valeurEntree01,valeurEntree02)[1];
    var listeNombreMinMax = "";
    for(let i = minVal; i < maxVal; i++){
        listeNombreMinMax += i+" ";
    }
    return listeNombreMinMax;
}
//gestion d'erreurs
function gestionErreur(args){
    if(args.length == 4){
        if(!siNumerique(valeurEntree01) || !siNumerique(valeurEntree02)){
            console.log("Veuillez entree des nombres ex: 20 25");
            return false;
        }else
            if(valeurEntree01 == valeurEntree02){
                console.log("Valeurs identique !");
                return false;
            }
        return true;    
    }
    else {
        if(args.length > 4){
            console.log("Trop d'argument !");
            return false;
        }
        else {
            console.log("peut d'argument !");
            return false;
        }
    }
}

//affichage
if(gestionErreur(args))
    console.log(valeursMinMax(parseInt(valeurEntree01),parseInt(valeurEntree02)));