import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
import { CartElements } from "./cart.elements";

export class CartMethods{
    static clickOnDelete(productName){
        CartElements.links.delete(productName).click();
    }
    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible');

    }

    static verifyCartPageIsShown(){
        cy.url().should('include', 'cart.html')
    }

    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click();
    }

    static deleteProducts(){
        cy.get('a[onclick*="deleteItem"]').each(link=>{
            link.click()
            cy.wait(1000)
        })
    }
    
    static emptyCart(username, password){
        Logger.SubStep('Navigate to demoblaze')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.SubStep('log out')
        CommonPageMethods.logout();
        Logger.SubStep('Click on home option')
        CommonPageMethods.clickOnHomeOption();
        Logger.SubStep('Click on Login option')
        CommonPageMethods.clickOnLoginOption();
        Logger.SubStep(`Login with this credentials ${username}/${password}`)
        LoginMethods.login(username, password)
        Logger.SubStep('Click on Cart option')
        CommonPageMethods.clickOnCartOption()
        Logger.SubStep('Delete products from cart')
        this.deleteProducts();
    }
}