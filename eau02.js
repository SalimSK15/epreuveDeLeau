
// les fonctions utilisee
function affchageInverse(arguments){
    
    for(var i = arguments.length-1; i > 1; i--)
        console.log(arguments[i]);
        
}
function erreursArgument(){
        
    if(args.length < 3)
        return true;
}
// la resolution
const args = process.argv;


if(erreursArgument())
    console.log("Erreur veuillez entre un arguments");
else
    affchageInverse(args);