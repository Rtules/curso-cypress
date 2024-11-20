import { CartMethods } from './pages/cart/cart.methods';
import { LoginMethots } from './pages/login/login.methods';

describe('template spec', () => {
  it('passes', () => {
  const usuario = 'rtules';
  const contrasena ='rtules'
    cy.visit('https://www.demoblaze.com/index.html')
    cy.wait(30000)
    CartMethods.clickOnDelete('Nokia lumia 1520')
    cy.wait(30000)
   
   
  })
})