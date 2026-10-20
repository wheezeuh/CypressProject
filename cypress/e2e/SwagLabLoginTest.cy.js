import { 
  LaunchApp, 
  LoginFunction, 
  ProductPage, 
  ErrorMessage,  
} from '../Pages/loginPage'

describe('This will test the Login Page', () => {

    it('Login with valid credentials', () => {
        LaunchApp();
        LoginFunction('standard_user', 'secret_sauce');
        ProductPage('Products');
    })


    it('Login with invalid credentials', () => {

        //validate the logo if displayed
        //if class use div.'class'
        LaunchApp();
        LoginFunction('sntads_user', 'password');
        ErrorMessage('Epic sadface: Username and password do not match any user in this service');

    })

    it('Login with lockedout_user', () => {
        LaunchApp();
        LoginFunction('locked_out_user', 'secret_sauce');
        ErrorMessage('Epic sadface: Sorry, this user has been locked out.')
    })
})




