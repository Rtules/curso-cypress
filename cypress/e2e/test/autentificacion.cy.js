import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.autenticacion, ()=>{
    it('Inicio de sesión válido', ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio');
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2);
        Logger.step('hacer clic en el "log in" de la barra de navegación');
        CommonPageMethods.clickOnLoginOption();

        Logger.stepNumber(3);
        Logger.step('Ingresar un usuario y contraseña validos');
        LoginMethods.insertUsername(LoginData.validCredentials.username);
        LoginMethods.insertPassword(LoginData.validCredentials.password);

        Logger.stepNumber(4);
        Logger.step('Hacer clic en "log in" para iniciar sesión');
        LoginMethods.clickOnLoginButton();
        Logger.verification('Verificar que se redirige al usuario a la página de inicio');
        CommonPageMethods.verifySignedUser(LoginData.validCredentials.username);
        
    });
});