export default function Cart(){
    let counter = 0;
    const handleAddToCart = () => {
        counter = counter + 1;
    }
    return(
        <div>
            <h3>Shopping Cart</h3>
            <p>Items in the cart: {counter}</p>
            <button className= 'cart-button' onClick={handleAddToCart}>Add</button>
        </div>
    )
}