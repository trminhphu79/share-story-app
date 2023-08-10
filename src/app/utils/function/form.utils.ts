import { AbstractControl, ValidationErrors } from "@angular/forms";
import { regexEmail, regexPassword } from "./regex.utils";

export const validateEmail = (control: AbstractControl): ValidationErrors | null => {
    if (!regexEmail(control.value)) {
        return { 'emailInvalid': true };
    }
    return null;
}


export const validatePassword = (control: AbstractControl): ValidationErrors | null => {
    if (!regexPassword(control.value)) {
        return { 'passwordInvalid': true };
    }
    return null;
}

export const confirmPasswordValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password')
    const confirmPassword = control.get('passwordConfirmation');

    if (password?.value !== confirmPassword?.value) {
        return { 'passwordMismatch': true };
    }

    return null;
}