export interface IUserSignUp extends IUserSignIn {
    name: string;
    passwordConfirmation: string;
}

export interface IUserSignIn {
    email: string;
    password: string;
}