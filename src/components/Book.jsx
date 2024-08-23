import { TiPlus, TiMinus } from "react-icons/ti";
import Card from 'react-bootstrap/Card';

const BookCard = ({ book, handleAddToCart, handleRemoveFromCart }) => {
    const { key, title, author_name, cover_edition_key, id_amazon, isInCart, quantity, price } = book;

    const image_src = `https://covers.openlibrary.org/b/olid/${cover_edition_key}-L.jpg`;
    const amazonLink = `https://amazon.com/dp/${id_amazon}`;

    return (
        <div className='m-2'>
            <Card border='secondary' style={{ width: '15rem' }}>
                <Card.Img variant="top" src={image_src} alt='book_cover' className='card-img' />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">By: {author_name}</Card.Subtitle>
                <Card.Text>
                    ${price}
                </Card.Text>
                    <p>
                        <button className='cart-icon' onClick={() => handleRemoveFromCart(key)}><TiMinus /></button>
                        {isInCart ? quantity : '0' }
                        <button className='cart-icon' onClick={() => handleAddToCart(key)}><TiPlus /></button>
                    </p>
                </Card.Body>
            </Card>
        </div>
        
/*        <div className='book'>
            <img src={image_src} alt='book_cover' />
            <h2>{title}</h2>
            <p>By: {author_name}</p>
            <p>Price: ${price}</p>
            <p>
                <button className='cart-icon' onClick={() => handleRemoveFromCart(key)}><TiMinus /></button>
                {isInCart ? quantity : '0' }
                <button className='cart-icon' onClick={() => handleAddToCart(key)}><TiPlus /></button>
            </p>
            {<button onClick={window.open(amazonLink)}>Buy on Amazon</button>}
        </div> */
)}

export default BookCard;