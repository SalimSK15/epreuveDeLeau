// recupeation d'arguments
const args = process.argv;
var valeurEntree = args[2];

//fonctions
function siNumerique(lettre){
    return /^-?\d+$/.test(lettre);
}
function mettreEnMajuscule(lettre){

    return String.fromCharCode(lettre.charCodeAt()-32);
}

//gestion d'erreurs
function gestionErreurOk(args){
    if(args.length == 3){
        if(!siNumerique(valeurEntree)){
            console.log("Veuillez saisir une chaine de nombre ! ex : \"444523\" ");
            return false;
        }
        return true;    
    }
    else {
        if(args.length > 3){
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
if(gestionErreurOk(args))
    console.log(valeurEntree);