export class CommonPageElements {
  static get topMenu(){
    return {
        get home(){
            return cy.contains("a", "Home");
        },
        get contact(){
            return cy.contains("a", "Contact");
        },
        get aboutUs(){
            return cy.contains("a", "About us");
        },
        get cart(){
            return cy.contains("a", "cart");
        },
        get login(){
            return cy.contains("a", "log in");
        },
        get singnup(){
            return cy.contains("a", "Sign up");
        },
    };
  }  
}