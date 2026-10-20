let AddtoCartButton = 'button#add-to-cart-sauce-labs-backpack'
let cartIcon = 'a.shopping_cart_link'
let productName ='div.inventory_item_name'
let productPrice = 'div.inventory_item_price'
let removeFromCart = 'button#remove-sauce-labs-backpack'


//FUNCTIONS===========================================================
export function AddtoCart() {
    cy.get(AddtoCartButton).should('be.exist')
    cy.get(AddtoCartButton).should('be.visible')
    cy.get(AddtoCartButton).click()
}

export function CartIcon(){
    cy.get(cartIcon).should('be.exist')
    cy.get(cartIcon).should('be.visible')
    cy.get(cartIcon).click()
}

export function ValidateProduct(itemName,itemPrice){
    cy.get(productName).should('be.exist');
    cy.get(productName).should('be.visible');
    cy.get(productName).should('have.text', itemName);

    cy.get(productPrice).should('be.exist');
    cy.get(productPrice).should('be.visible');
    cy.get(productPrice).should('have.text', itemPrice);
}

export function removeProductFromCart() {
    cy.get(removeFromCart).should('be.exist');
    cy.get(removeFromCart).should('be.visible');
    cy.get(removeFromCart).click();
}

export function validateProductNotInCart(productName) {
    cy.get(productName).should('not.exist');
}