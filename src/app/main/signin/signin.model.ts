export enum DialogType {
    SignIn = "SignIn",
    SignUp = "SignUp",
}

export interface IUserSignUp extends IUserSignIn{
    password: string,
    passwordConfirmation: string,
}
export interface IUserSignIn {
    email: string;
    password: string,
}