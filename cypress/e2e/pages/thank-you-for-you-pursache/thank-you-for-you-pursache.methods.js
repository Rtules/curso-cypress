import { ThankYouForYourPursacheElements } from "./thank-you-for-you-pursache.elements";

export class ThankYouForYourPursacheMethods{
    static clickOnOkButton(){
        cy.wait(1000)
        ThankYouForYourPursacheElements.buttons.ok.click();
    }

    static verifyGreenCheckMarkIsDisplayed(){
        ThankYouForYourPursacheElements.icons.greenChekMark.should('exist');
    }
}