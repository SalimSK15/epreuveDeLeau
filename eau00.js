// les fonctions utilisee
function affichageValeur(tabValeurs){
    var tabValeursFinal = "";
    for (var i = 0; i < tabValeurs.length; i++)
        tabValeursFinal = tabValeursFinal + tabValeurs[i];
    tabValeursFinal[tabValeursFinal.length-1] = "";
    
    return tabValeursFinal;     
        //console.log(tabValeurs[i]);
}
// gestion d'ereurs

// le parsing
var valeur = "";
var tabValeurs = [];
//la resolution
for (var i = 0; i <= 7; i++)
    for(var j = i+1; j <= 8; j++ )
        for(var k = j+1; k <=9; k++){
            tabValeurs.push(i+""+j+""+k+",");
            //if(i == 7 && k == 9)
             //   tabValeurs.push(i+""+j+""+k+"");
        }
tabValeurs[tabValeurs.length-1]="789";

//affchage du resultat
console.log(affichageValeur(tabValeurs));

