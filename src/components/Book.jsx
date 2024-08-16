const BookCard = ({ book, handleAddToCart, handleRemoveFromCart }) => {
    const { key, title, author_name, cover_edition_key, id_amazon, isInCart, quantity, price } = book;

    const image_src = `https://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`;
    const amazonLink = `https://amazon.com/dp/${id_amazon}`;

    return (
        <div className='book'>
            <img src={image_src} alt='book_cover' />
            <h2>{title}</h2>
            <p>By: {author_name}</p>
            <p>${price}</p>
            <p><button onClick={() => handleAddToCart(key)}>Add to Cart</button></p>
            <p><button onClick={() => handleRemoveFromCart(key)}>Remove from Cart</button></p>
            <p>{isInCart ? `Quantity: ${quantity}` : 'Quantity: 0' }</p>
            {/* <button onClick={window.open(amazonLink)}>Buy on Amazon</button> */}
        </div>
)}

export default BookCard;