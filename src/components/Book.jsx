const BookCard = ({ book }) => {
    const { title, author_name, isbn, cover_i } = book;

    return <div className='book'>{title}</div>
}

export default BookCard;