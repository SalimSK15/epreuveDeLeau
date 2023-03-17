// recupeation d'arguments
const args = process.argv;
var valeurEntree01 = args[2];
var valeurEntree02 = args[3];

// fonctions
function chercheIndex(pos,lettre,chaine){
    let i = pos;
    while (lettre != chaine[i] && i < chaine.length) {
        i++;
    }
    return i;
}
function rechercheSousChaine(chaine,sousChaine){
    let indexSousChaine = 0;
    let pos = 0;
    let indexChaine = 0;

    while(pos < chaine.length){
        indexChaine = chercheIndex(pos,sousChaine[0],chaine);

        if(chaine.length-indexChaine < sousChaine.length){            
            return false;
        }
        while(chaine[indexChaine] === sousChaine[indexSousChaine] && indexSousChaine < sousChaine.length){    
            indexChaine++;
            indexSousChaine++;
        }
        if(indexSousChaine == sousChaine.length)
            return true;
        else{
            indexSousChaine = 0;            
            pos += 1;
        }
    }
}
    
function siNumerique(argument){
    return /^-?\d+$/.test(argument)
}

//gestion d'erreurs
function gestionErreur(args){
    if(args.length == 4){
        if(siNumerique(valeurEntree01) || siNumerique(valeurEntree02)){
            console.log("Veuillez entree chaine de caractere");
            return false;
        }
        else{
            if(valeurEntree02.length > valeurEntree01.length){
                console.log("la sous chaine est superier a chaine");
                return false;
                
            }else
                return true
        }
    }
    else {
        if( args.length > 4){
            console.log("Trop d'argument !");
            return false;
        }
        else {
            console.log("peut d'argument !");
            return false;
        }
    }
}
// affichage + resolution 
if(gestionErreur(args)){
    console.log(rechercheSousChaine(valeurEntree01,valeurEntree02));
}
    
