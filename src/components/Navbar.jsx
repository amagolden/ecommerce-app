const Navbar = ({ cartCount, cartTotal }) => {
    return (
        <div>
            <h1>Home</h1>
            <h1>Cart Count: {cartCount}</h1>
            <h1>Cart Cost: ${cartTotal}</h1>
        </div>
    )
}

export default Navbar;