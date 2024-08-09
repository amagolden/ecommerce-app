import { useEffect, useState } from 'react';
import BookCard from './components/Book';
import Navbar from './components/Navbar';
import './App.css';

function App() {

  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchData = () => {
    fetch('https://openlibrary.org/search.json?q=reese%27s+book+club+pick')
    .then(res => res.json())
    .then(data => setBooks(data.docs))
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleAddToCart = (id) => {
    let updatedBook;
    const foundBook = books.find(book => book.key === id);

    if (foundBook.isInCart) {      
      updatedBook = {
        ...foundBook,
        quantity: foundBook.quantity + 1
      }
      setCart(cart.map(book => (book.key === id) ? updatedBook : book));
    } else {
      updatedBook = {
        ...foundBook,
        quantity: 1,
        isInCart: true
      }
      setCart([...cart, updatedBook]);
    }

    setBooks(books.map(book => (book.key === id ? updatedBook : book)));
  }

  const cartCount = () => {
    let count = 0;

    cart.map(book => {
      count += book.quantity;
    })

    return count;
  }

  return (
    <div className="App">
        <Navbar cartCount={cartCount()} />
        <div className='book-cards'>
          {books.map(element => 
          <BookCard 
            key={element.key} 
            book={element} 
            handleAddToCart={handleAddToCart} 
          />)}
        </div>
    </div>
  );
}

export default App;
