// recupeation d'arguments
const args = process.argv;
var valeurEntree = parseInt(args[2]);
var reslulat = "";

// fonctions
function siNumerique(argument){
    return /^-?\d+$/.test(argument)
}
function nombrePremier(val){
    var premier = true;
    if(val == 0 || val == 1)
        premier = false;

    for(let i = 2; i < val; i++){
        if(val%i == 0)
            return false;
    }
    return premier;
}

//gestion d'erreurs
function gestionErreur(args){
    if(args.length == 3){
        if(siNumerique(valeurEntree))
            return true;
        else{
            console.log("Erreur");
            return false;
        }
    }
    else {
        if( args.length > 3){
            console.log("Trop d'argument !");
            return false;
        }
        else {
            console.log("peut d'argument !");
            return false;
        }
    }
}

//resolution + affichage
function CalculeProchainPremier(val){
    var i = valeurEntree;
    do {
        i++;
    }while (!nombrePremier(i));
    return i;
}

// affichage
if(gestionErreur(args))
    console.log(CalculeProchainPremier(valeurEntree));
  