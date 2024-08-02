import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [books, setBooks] = useState([]);

  const fetchData = () => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=reese-book-club')
    .then(res => res.json())
    .then(data => setBooks(data.items))
  }

useEffect(() => {
  fetchData();
}, [])

console.log(books.map(book => book.volumeInfo.title))
console.log(books.map(book => book.volumeInfo.authors))
console.log(books.map(book => book.volumeInfo.publishedDate))
console.log(books.map(book => book.volumeInfo.imageLinks.thumbnail))

  return (
    <div className="App">
        <h1>HELLOOOO</h1>
    </div>
  );
}

export default App;
