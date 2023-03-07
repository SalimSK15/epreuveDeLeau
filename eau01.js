// les fonctions utilisee
function combinaison_00_01_08_09(val1,val2){
    return "0"+val1+"0"+val2+",";
}
function combinaison_00_10_08_99(val1,val2){
    return "0"+val1+""+val2+",";
}
function combinaison_1011_9899(val1,val2){
    return val1+""+val2+",";
}

// gestion d'ereurs

// le parsing
var tabValeur = "";

//la resolution
for(var i = 0; i < 99; i++)
    for(var j = i+1; j < 100; j++){
        // (0 <= i <= 9) la partie gauche de 00xx a 09xx /  01 <= j <= 09 la partie droite de xx01 a xx09   
        if(i >= 0 && i < 10 && j < 10){
            tabValeur = tabValeur + combinaison_00_01_08_09(i,j);
        }

        // (0 <= i <= 9) la partie gauche de 00xx a 09xx /  10 <= j <= 99 la partie droite de xx10 a xx99           
        if(i >= 0 && i < 10 && j > 9){
            tabValeur = tabValeur + combinaison_00_10_08_99(i,j);
        }

        // (10 <= i <= 98) la partie gauche de 10xx a 98xx /  10 <= j <= 99 la partie droite de xx11 a xx99   
        if(i > 9 && j > 9){
            tabValeur = tabValeur + (combinaison_1011_9899(i,j));
        }
    }
//affchage du resultat
console.log(tabValeur);


