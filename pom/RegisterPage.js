class RegisterPage{
    constructor(page){
        this.page=page;
        this.RegisterLink=page.getByRole('link',{name:"Register"})
        this.GenderRadioBtn=page.getByText("Gender:")
        this.First_Name_Txt=page.getByLabel("First name:")
        this.Last_Name_Txt=page.getByLabel("Last name:")
        this.EmailTxt=page.getByRole('textbox',{name:"Email"})
        this.password=page.locator("#Password")
    }
}
export default RegisterPage;

