import { placeOrderElements } from "./place-order.elements";

export class placeOrdermethods{
    static insertName(name){
        placeOrderElements.textboxes.name.invoke("val", name);
    }

    static insertCountry(country){
        placeOrderElements.textboxes.country.invoke("val", country);
    }

    static insertCity(city){
        placeOrderElements.textboxes.city.invoke("val", city);
    }

    static insertCreditCard(creditCarNumber){
        placeOrderElements.textboxes.creditCardNumber.invoke("val", creditCarNumber);
    }

    static insertMonth(month){
        placeOrderElements.textboxes.month.invoke("val", month);
    }

    static insertYear(year){
        placeOrderElements.textboxes.year.invoke("val", year);
    }

    static clickOnCloseButton(){
        placeOrderElements.buttons.close.click();
    }

    static clickOnPursacheButton(){
        placeOrderElements.buttons.purchase.click();
    }
}