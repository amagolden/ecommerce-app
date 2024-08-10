const BookCard = ({ book, handleAddToCart }) => {
    const { key, title, author_name, isbn, cover_i, cover_edition_key, id_amazon, ratings_average, isInCart } = book;

    const image_src = `https://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`;
    const amazonLink = `https://amazon.com/dp/${id_amazon}`;

    return (
        <div className='book'>
            <img src={image_src} alt='book_cover' />
            <p>{title}</p>
            <p>{author_name}</p>
            <p>{ratings_average}</p>
            <button onClick={() => handleAddToCart(key)}>
                {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
            <a href={amazonLink}><button onClick={amazonLink}>Buy on Amazon</button></a>
        </div>
)}

export default BookCard;