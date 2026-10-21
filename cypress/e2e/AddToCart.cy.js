
import { LaunchApp, LoginFunction } from "../Pages/loginPage"
import { AddtoCart, CartIcon, ValidateProduct,
    removeProductFromCart,validateProductNotInCart } from "../Pages/productPage"
describe('This will test the Add to cart function', () => {

    it('Add to cart function', () => {
        LaunchApp();
        LoginFunction('standard_user', 'secret_sauce');
        AddtoCart();
        CartIcon();
        ValidateProduct('Sauce Labs Backpack', '$29.99');

    })

     it('Remove from cart function', () => {
        LaunchApp();
        LoginFunction('standard_user', 'secret_sauce');
        AddtoCart();
        CartIcon();
        removeProductFromCart();
        validateProductNotInCart();
     })


})
