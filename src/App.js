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
    const foundBook = books.find(book => book.key === id);

    setCart([...cart, foundBook]);
  }

  return (
    <div className="App">
        <Navbar />
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
