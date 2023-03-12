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
// resolution
function transormLettreMajuscule(chaine){
    let chaineNouvelle = "";
    let j = 0;
    //console.log("ch :"+chaine[]);
    if(siLettreAlphabetique(chaine[0])){
        chaineNouvelle += mettreEnMajuscule(chaine[0]);
        j++;
    }

    for(let i = j; i < chaine.length; i++){
        if(chaine[i] === " "){
            if(siLettreAlphabetique(chaine[i+1]) && i+1 < chaine.length){                
                chaineNouvelle = chaineNouvelle+" "+mettreEnMajuscule(chaine[i+1]);
                i++;

            }else 
                chaineNouvelle += chaine[i];
        }else{
            chaineNouvelle += chaine[i];
        }
    }
    return chaineNouvelle;
}

//affichage
if(gestionErreur(args))
    console.log(transormLettreMajuscule(valeurEntree));