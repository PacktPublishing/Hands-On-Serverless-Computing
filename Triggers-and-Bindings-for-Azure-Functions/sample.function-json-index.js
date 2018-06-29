module.exports = function (context, cartItems) {
    cartItems.PartitionKey = "ItemCode";
    cartItems.cartId = generateRandomId(); 

    context.done(null, cartItems);
};

function generateRandomId() {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
}