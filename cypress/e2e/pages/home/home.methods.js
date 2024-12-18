import { HomeElements } from "./home.elements";

export class HomeMethods{
    static clickOnPhonesOption(){
        HomeElements.categoriesMenu.phone.click();
    }

    static clickOnLaptopsOption(){
        HomeElements.categoriesMenu.laptops.click();
    }

    static clickOnMonitorOption(){
        HomeElements.categoriesMenu.monitors.click();
    }
 static clicOnProductLink(productName){
 HomeElements.product(productName).click();
 }
 static verifyProducDisplayed(productName){
    HomeElements.product(productName).should('be.visible')
}
    static verifyHomePageIsShown(){
        cy.url().should('include', 'index.html')
    }
}