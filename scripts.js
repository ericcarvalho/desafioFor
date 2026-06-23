/*function sayMyName(valor1, valor2){
    console.log(`total ${valor1 + valor2}`);
}

sayMyName(30, 10);
*/




const cart = [
    { name: 'shirt', price: 20 },
    { name: 'pants', price: 30 },
    { name: 'shoes', price: 50 },
    { name: 'hat', price: 15 },
    { name: 'jacket', price: 80 },
    { name: 'socks', price: 10 },
    { name: 'belt', price: 25 },
    { name: 'watch', price: 120 },
    { name: 'scarf', price: 18 },
    { name: 'gloves', price: 22 },
    { name: 'sunglasses', price: 60 },
    { name: 'backpack', price: 75 },
    { name: 'wallet', price: 40 },

];

function totalPrice(cart) {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price;
    }
    return totalPrice;

}

function calculateTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].price > 30) {
            total += cart[i].price * 0.9;
        } else {
            total += cart[i].price;
        }
    }
    return total;
}

function discountValue(){
    const discount = totalPrice(cart) - calculateTotal(cart);
    return discount;
}


console.log(`Preço total: ${totalPrice(cart)}, com desconto: ${calculateTotal(cart)}, o valor do desconto é: ${discountValue()}`);
