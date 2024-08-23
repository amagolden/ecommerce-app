import { useEffect, useState } from 'react';
import BookCard from './components/Book';
import NavHeader from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchData = () => {
    fetch('https://openlibrary.org/search.json?q=reese%27s+book+club+pick')
    .then(res => res.json())
    .then(data => {
          // Set the books with the fetched data
          const booksWithPrices = data.docs.map(book => ({
            ...book,
            price: (Math.random() * (30 - 20) + 20).toFixed(2),
          }));
          // Set the books with the prices added
          setBooks(booksWithPrices);
        })
    .catch(error => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData(); 
  }, []);

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

  const handleRemoveFromCart = (id) => {
    let updatedBook;
    const foundBook = books.find(book => book.key === id);

    if (foundBook.isInCart) {      
      if (foundBook.quantity === 1) {
        updatedBook = {
        ...foundBook,
        quantity: 0,
        isInCart: false
          }

      const newCart = cart.filter(book => (book.key !== id));
      setCart(newCart); 
      } else {
          updatedBook = {
            ...foundBook,
            quantity: foundBook.quantity - 1
            }

            setCart(cart.map(book => (book.key === id ? updatedBook : book)));
      }
  } else {
    updatedBook = foundBook;
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

  const handleCartTotal = () => {
    let cartTotal = 0;

    cart.map(book => {
      cartTotal += (book.quantity * book.price);
    })

    return cartTotal.toFixed(2);
  }

  useEffect(() => {
    handleCartTotal(); 
  }, [cart]);

  return (
    <div className="App">
        <NavHeader 
          cartCount={cartCount()}
          cartTotal={handleCartTotal()}
         />
        <div className='book-cards'>
          {books.map(element => 
          <BookCard 
            key={element.key} 
            book={element} 
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart} 
          />)}
        </div>
    </div>
  );
}

export default App;
