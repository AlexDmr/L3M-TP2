/***********************************************************************************************************************
 * Q1) Ecrivez la classe MiniJQData de sorte à mimer le comportement de JQuery
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
    private elements: HTMLElement[];
    constructor( elements: HTMLElement[] ) {
        this.elements = elements;
    }
}

/***********************************************************************************************************************
 * Q2) Ecrivez la fonction miniJQ :
 *   - argument : un sélecteur CSS ou un Element du DOM
 *   - renvoi une instance de la classe MiniJQData
 */
export let miniJQ = (selecteur: string | HTMLElement | HTMLElement[]): MiniJQData => {
    let elements = [];
    if (selecteur.constructor === String) {
        console.log( selecteur, "is a string" );
    }
    if (selecteur instanceof HTMLElement) {
        console.log( selecteur, "is a HTMLElement" );
    }
    if (selecteur instanceof Array) {
        console.log( selecteur, "is an array of HTMLElements" );
    }
    return new MiniJQData( elements ); // A modifier bien sur...
};


/***********************************************************************************************************************
 * Q3) Etendez la classe MiniJQData avec d'autres méthodes de votre choix
 *  Par exemple des méthodes issues de JQueryUI
 */
