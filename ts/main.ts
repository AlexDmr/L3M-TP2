/***********************************************************************************************************************
 *
 */
console.log( "Au chargement du script, document.body = ", document.body );


/***********************************************************************************************************************
 * Q1) Affichez la référence à document.body APRES que le document soit chargé.
 * Inspirez vous du TP1 pour trouver comment faire.
 */


/***********************************************************************************************************************
 * Q2) Ecrivez la fonction miniJQ :
 *   - argument : un sélecteur CSS ou un Element du DOM
 *   - renvoi une instance de classe MiniJQData
 */
function miniJQ( selecteur: string | HTMLElement | HTMLElement[] ) : MiniJQData {
    let elements = [];
    if (selecteur instanceof String) {
        console.log( selecteur, "is a string" );
    }
    if (selecteur instanceof HTMLElement) {
        console.log( selecteur, "is a HTMLElement" );
    }
    if (selecteur instanceof Array) {
        console.log( selecteur, "is an array of HTMLElements" );
    }
    return new MiniJQData( [] ); // A modifier bien sur...
}

miniJQ( "p" );
setTimeout( () => miniJQ( document.body ), 1000 );
setTimeout( () => miniJQ( [document.body] ), 1500 );

/***********************************************************************************************************************
 * Q3) Ecrivez la classe MiniJQData de sorte à mimer le comportement de JQuery
 * voir http://api.jquery.com/
 * * Au minimum, les méthodes :
 *   - each
 *   - text
 *   - html
 *   - click
 *   - append
 *   - bind
 *   - children
 *   - detach
 */
class MiniJQData {
    readonly elements    : HTMLElement[];
    constructor( public elements: HTMLElement[] ) {
        this.elements = elements;
    }
}


/***********************************************************************************************************************
 * Q3) Etendez la classe MiniJQData avec d'autres méthodes de votre choix
 */
