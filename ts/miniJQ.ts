/***********************************************************************************************************************
 * Q1) Ecrivez la classe MiniJQData de sorte à mimer le comportement de JQuery
 * voir http://api.jquery.com/
 * * Au minimum, les méthodes :
 *   - each
 *   - text
 *   - html
 *   - click
 *   - bind
 *   - append
 *   - find
 *   - detach
 */
type FCT_EACH = (index: number, element: Element) => void;
type APPENDABLE = string | Element | MiniJQData;
type FCT_APPEND = (index: number, html: string) => APPENDABLE;
class MiniJQData {
    private elements: Element[];
    constructor( elements: Element[] ) {
        this.elements = elements;
    }
    each(fct: FCT_EACH): this {
        return this;
    }

    toggleClass(className: string, state?: boolean): this {
        return this;
    }

    // text: http://api.jquery.com/text/
    text(): string;                     // Voir doc JQuery
    text(str: string): this;            // Voir doc JQuery
    text(str?: string): string | this { // Façon de faire de la "surcharge" en Typescript
        if (typeof str === "string") {
            return this;
        } else {
            return "";
        }
    }

    // html: http://api.jquery.com/html/
    html(): string;
    html(htmlString: string): this;
    html(htmlString?: string): string | this {
        if (typeof htmlString === "string") {
            return this;
        } else {
            return "";
        }
    }

    // click: https://api.jquery.com/click/
    click(handler?: (evt: MouseEvent) => void): this {
        return this;
    }

    // bind:
    bindEvents(events: Object): this { // voir .bind(events) dans la doc
        return this;
    }
    bind(eventType: string, handler: (evt: Event) => void, preventBubble: boolean): this {
        return this;
    }

    // find: https://api.jquery.com/find/
    find(selector: string | Element | MiniJQData): this {
        if (typeof selector === "string") {
            //
        } else {
            if (selector instanceof MiniJQData) {
                //
            } else { // selector is an Element
                //
            }
        }
        return this;
    }

    // Pour les autres fonctions, voir la doc JQuery et faire l'implem en s'appuyant sur each

    // append: http://api.jquery.com/append/
    appendFct(fct: FCT_APPEND): this {
        return this;
    }
    append(...elements: APPENDABLE[]): this {
        return this;
    }
}

/***********************************************************************************************************************
 * Q2) Ecrivez la fonction miniJQ :
 *   - argument : un sélecteur CSS ou un Element du DOM
 *   - renvoi une instance de la classe MiniJQData
 */
export let miniJQ = (selecteur: string | Element | Element[]): MiniJQData => {
    let elements: Element[] = [];
    if (typeof selecteur === "string") {
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
