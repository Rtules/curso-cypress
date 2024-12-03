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

    static insertCreditCard(creditCard){
        placeOrderElements.textboxes.creditCar.invoke("val", creditCard);
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

    static insertOrderInformation(data){
        this.insertName(data.name)
        this.insertCountry(data.country)
        this.insertCity(data.city)
        this.insertCreditCard(data.creditCardNumber)
        this.insertMonth(data.month)
        this.insertYear(data.year)
    }
}