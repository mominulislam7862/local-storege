const addProducts = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    console.log(product, quantity);
    displayProduct(product,quantity);
    saveProductToLocalStorage(product,quantity);
}

const displayProduct = (product, quantity) =>{
    const ol = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}:${quantity}`;
    ol.appendChild(li);
}
const getStoredShoppingCart = () =>{
    let cart = {}
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;

}
const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStingified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStingified)


}
const displayProductsFormlocalStorage = () =>{
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(product, quantity);
        displayProduct(product,quantity);
    }
}
displayProductsFormlocalStorage();