// recupeation d'arguments
const args = process.argv;
var tabValeurEntree = [];

//fonctions 
function recupeValeursSaisie(args){
    for(let i = 2; i < args.length; i++){
        if(siNumerique(args[i]))
            tabValeurEntree.push(parseInt(args[i]));
        else {
            console.log("Erreur veuillez saisir une liste de nombre !");
            return false;
        }
    }
    return true;
}
function siNumerique(argument){
    return /^-?\d+$/.test(argument)
}
function echange(val1, val2){
    let tabVal = [];
    let val;

    val = val1;
    val1 = val2;
    val2 = val;
    tabVal.push(val1);
    tabVal.push(val2);

    return tabVal;
}

//fonction qui cherche l'indice min d'un caractere dans un tableau
function chercheIndexMinCaractere(pos,tab){
    let minIndece = pos;
        
    for(let i = pos+1; i < tab.length; i++){
        if(tab[minIndece] > tab[i]){
            minIndece = i;
        }
    }
    return minIndece;
}
function my_select_sort(array){    
    let new_array = [];
    let indexMin;
    
    for(let i = 0; i < array.length-1; i++){
        indexMin = chercheIndexMinCaractere(i,array);
        new_array = echange(array[i],array[indexMin]);
        array[i] = new_array[0];
        array[indexMin] = new_array[1];
        }

    return array;
}
function afficheResultat (tabVal){
    let tabNewVal = "";

    for(let i = 0; i < tabVal.length; i++){
        tabNewVal += tabVal[i]+" ";     
    }
    return tabNewVal;
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

//resolution + affichage
var new_array_fini = [];
if(gestionErreur(args)){
    if(recupeValeursSaisie(args))
        console.log(afficheResultat(my_select_sort(tabValeurEntree)));
    
}
    