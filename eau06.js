// recupeation d'arguments
const args = process.argv;
var valeurEntree = args[2];

//fonctions
function siLettreAlphabetique(lettre){
    return /[A-Za-z]/.test(lettre);
}
function mettreEnMajuscule(lettre){

    return String.fromCharCode(lettre.charCodeAt()-32);
}

//gestion d'erreurs
function gestionErreur(args){
    if(args.length == 3){
        if(!siLettreAlphabetique(valeurEntree)){
            console.log("Veuillez saisir une chaine de caractere !");
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

//la resolution
function transormLettreDouble(chaine){
    var chaineNouvelle = "";
    var ch="";
    for(let i = 0; i < chaine.length; i++){
        if(siLettreAlphabetique(chaine[i])){
            if(siLettreAlphabetique(chaine[i+1])){
                if(chaine[i] === chaine[i+1]){
                    chaineNouvelle += mettreEnMajuscule(chaine[i]);
                }else{
                    chaineNouvelle += chaine[i];
                }
            }else{
                chaineNouvelle += chaine[i];
            }
        }else{
            chaineNouvelle += chaine[i];
        }
    }
    return chaineNouvelle;
}


//affichage
if(gestionErreur(args))
    console.log(transormLettreDouble(valeurEntree));
