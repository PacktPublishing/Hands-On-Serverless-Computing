module.exports = function (context, cartItems) {
    cartItems.PartitionKey = "ItemCode";
    cartItems.cartId = generateRandomCartId(); 

    context.done(null, cartItems);
};

function generateRandomCartId() {
    return Math.random().toString(40).substring(3, 18) +
        Math.random().toString(40).substring(3, 18);
}