import { AbstractControl } from "@angular/forms";

export function Passwordvalidator(control : AbstractControl) : {[key :string] : boolean} {
    const passWord=control.get('passWord');
    const confirmpassWord=control.get('confirmPassword');
    // console.log("Validator call");
    // return {"missmatch": true};
    return (passWord && confirmpassWord && passWord.value !== confirmpassWord.value) ? {"missmatch": true} :  {"missmatch": false};
}