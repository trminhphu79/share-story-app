import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PageType } from "../constant";
import { confirmPasswordValidator, validateEmail, validatePassword } from "@utils/function";

@Injectable()
export class SigninFormBuilder {

    private _currentForm!: FormGroup | null;

    get currentForm() {
        return this._currentForm;
    }

    set currentForm(value) {
        this._currentForm = value;
    }

    buildForm(type: PageType) {
        this.currentForm = null;
        switch (type) {
            case PageType.Login:
                this.currentForm = this._generateLoginForm();
                break;
            case PageType.Register:
                this.currentForm = this._generateRegisterForm();
                break;
            default:
                break;
        }
    }

    private _generateLoginForm(): FormGroup {
        return new FormGroup({
            email: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required])
        })
    }

    private _generateRegisterForm(): FormGroup {
        return new FormGroup({
            name: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, validateEmail]),
            password: new FormControl(null, [Validators.required, validatePassword]),
            passwordConfirmation: new FormControl(null, [Validators.required]),
        },
            {
                validators: [confirmPasswordValidator]
            })
    }
}