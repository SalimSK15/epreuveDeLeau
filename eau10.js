// recupeation d'arguments
const args = process.argv;
var tabValeurEntree = [];
var elementRecherche;

//fonctions 
function recupeValeursSaisie(args){
    for(i = 2; i < args.length-1; i++){
        tabValeurEntree.push(args[i]);
    }
    elementRecherche = args[args.length-1];
    tabValeurEntree;
}
function chaineSimilaire(chaine,sousChaine){
    let indexSousChaine = 0;
    let pos = 0;
    let indexChaine = 0;

    while(pos < chaine.length){

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
function elementRechercheDansTableau(elementRecherche,tabValeurEntree){
    let indexelements = -1;
    
    for(var i = 0; i < tabValeurEntree.length; i++){
        if(chaineSimilaire(tabValeurEntree[i],elementRecherche)){
          return i;
        }
    }
    return indexelements;
}
//gestion d'erreurs
function gestionErreur(args){
    if(args.length < 4){
        console.log("peut d'argumets ");
        console.log("Veuillez saisir 2 arguments minimum !");
        return false;    
    }
    return true;
}

//affichage
if(gestionErreur(args)){
    recupeValeursSaisie(args);    
    console.log(elementRechercheDansTableau(elementRecherche,tabValeurEntree));
}

    



