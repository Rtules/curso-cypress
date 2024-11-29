import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeElements } from "../pages/home/home.elements";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { ProductDetailsMethods } from "../pages/product.details/product-details.methods";
import { Logger } from "../util/logger";

const user = LoginData.validCredentials;
const product = 'ASUS Full HD'

describe(CommonPageData.testSuites.catalogoYcompras, ()=>{
    it('Navegación por categorias', ()=>{

        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado')
        Logger.SubStep('Navegate to Demoblaze application')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.SubStep('Click on "Log in" link')
        CommonPageMethods.clickOnLoginOption();
        LoginMethods.login(user.username, user.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de incio')
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoria de productos en el menú de navegación')
        HomeMethods.clickOnMonitorOption();
        Logger.verification('Verificar que se muestra la lista de productos correspondientes a la categoria seleccionada')
        HomeMethods.verifyProducDisplayed('Apple monitor 24')
        HomeMethods.verifyProducDisplayed('ASUS Full HD')
            
        
    })

    it('Agregar productos al carrito', ()=>{

        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado')
        Logger.SubStep('Navegate to Demoblaze application')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.SubStep('Click on "Log in" link')
        CommonPageMethods.clickOnLoginOption();
        LoginMethods.login(user.username, user.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de incio')
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoria de productos en el menú de navegación')
        HomeMethods.clickOnMonitorOption();
  
            
        Logger.stepNumber(4)
        Logger.step('Hacer clic en un producto específico')
        HomeMethods.clicOnProductLink(product)

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la página de detalles del producto')
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(6)
        Logger.step('Hacer clic en "Add to cart"')
        ProductDetailsMethods.clickOnAddToCardButton(); 

        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito')
        ProductDetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product)

    })
})