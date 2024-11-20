import { CartElements } from "./cart.elements";

export class CartMethods{
    static clickOnDelete(productName){
        CartElements.links.delete(productName).click();
    }
}