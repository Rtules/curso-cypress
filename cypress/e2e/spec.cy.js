const { HomeMethods } = require("./pages/home/home.methods");
const { LoginMethots } = require("./pages/login/login.methods");

describe('template spec', () => {
  it('passes', () => {
  //  const usuario = 'rtules';
  //const contrasena ='rtules'
    cy.visit('https://www.demoblaze.com/index.html')
    HomeMethods.clicOnProductLink('Iphone 6 32gb')
   cy.wait(10000)
  })
})