const BookCard = ({ book, handleAddToCart }) => {
    const { key, title, author_name, isbn, cover_i, cover_edition_key, id_amazon, ratings_average } = book;

    const image_src = `https://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`;

    return (
        <div className='book'>
            <img src={image_src} alt='book_cover' />
            <p>{title}</p>
            <p>{author_name}</p>
            <p>{ratings_average}</p>
            <button onClick={() => handleAddToCart(key)}>Add to Cart</button>
        </div>
)}

export default BookCard;