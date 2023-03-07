// les fonctions utilisee
function affichageValeur(tabValeurs){
    var tabValeursFinal = "";
    for (var i = 0; i < tabValeurs.length; i++)
        tabValeursFinal = tabValeursFinal + tabValeurs[i];
    
    return tabValeursFinal;     
       
}
// gestion d'ereurs

// le parsing
var tabValeurs = [];
//la resolution
for (var i = 0; i <= 7; i++)
    for(var j = i+1; j <= 8; j++ )
        for(var k = j+1; k <=9; k++){
            tabValeurs.push(i+""+j+""+k+",");
        }
tabValeurs[tabValeurs.length-1]="789";

//affchage du resultat
console.log(affichageValeur(tabValeurs));

