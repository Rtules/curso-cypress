const { LoginMethots } = require("./pages/login/login.methods");

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'rtules';
    const contrasena ='rtules'
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethots.login(usuario, contrasena)
    cy.get('a#nameofuser').should('contain.text', usuario)
    cy.wait(5000)
  })
})