export class ThankYouForYourPursacheElements{
    static get buttons(){
        return{
            get ok(){
                return cy.contains('button', 'OK');
            },
        };
    }

    static get icons(){
        return{
           get greenChekMark(){
                return cy.get('.sa-succes');
            },
        };
    }
}