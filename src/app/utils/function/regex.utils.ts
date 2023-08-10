
export const regexEmail = (email: string): boolean => {
    const regex: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

export const regexPassword = (password: string): boolean => {
    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#+=_()<>?.,\$%\^&\*])(?=.{8,})");
    return regex.test(password);
}