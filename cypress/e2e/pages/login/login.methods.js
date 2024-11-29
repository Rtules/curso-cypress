import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val', username)
        
    }
    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val', password)
       
    }
    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }
    static login(username, password){
        Logger.SubStep('Insert username')
        this.insertUsername(username)
        Logger.SubStep('Insert password')
        this.insertPassword(password)
        Logger.SubStep('Click on Login button')
        this.clickOnLoginButton()
    }

    static verifyWrongPasswordMessage(){
        CommonPageMethods.verifyAlert("Wrong password.")
    }
}