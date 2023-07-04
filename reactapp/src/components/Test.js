import React, { useState } from 'react';


const Test = () => {
  const [titlel, setList1] = useState([]);
  const [inputValue1, setInputValue1] = useState('');
  const [imagel, setList2] = useState([]);
  const [inputValue2, setInputValue2] = useState('');
  const [thorlau, setList3] = useState([]);
  const [inputValue3, setInputValue3] = useState('');
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [pages, setPages] = useState('');
  
    const handleSubmit = () => {
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${userInput}&projection=full&maxResults=5`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const found = checkCharacterExists(data, userInput);
          if (found) {
            // setResult('IT WORKSSS');
            const bookInfo = getBookInfo(data, userInput);
            setImageUrl(bookInfo.imageLink);
            setAuthor(bookInfo.author);
            setGenre(bookInfo.genre);
            setPages(bookInfo.pages);
          } else {
            setResult('Book Not found :(');
            setImageUrl('');
            setAuthor('');
            setGenre('');
            setPages('');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };
  
    const checkCharacterExists = (data, char) => {
      const items = data.items || [];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const volumeInfo = item.volumeInfo || {};

        const title = volumeInfo.title || '';
        if (title.toLowerCase().includes(char.toLowerCase())) {
          return true;
        }
      }
      return false;
    };
  
    const getBookInfo = (data, searchQuery) => {
      const items = data.items || [];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const volumeInfo = item.volumeInfo || {};
        const title = volumeInfo.title || '';
        const imageLinks = volumeInfo.imageLinks || {};
        const thumbnail = imageLinks.thumbnail || '';
        const authors = volumeInfo.authors || [];
        const author = authors.join(', ');
        const genre = volumeInfo.categories ? volumeInfo.categories[0] : 'Unknown Genre';
        const pages = volumeInfo.pageCount || 'Unknown';
  
        if (title.toLowerCase().includes(searchQuery.toLowerCase())) {

          return { title,imageLink: thumbnail, author, genre, pages };
        }
      }
      return { imageLink: '', author: '', genre: '', pages: '' };
    };
  
    const handleInputChange = event => {
      setUserInput(event.target.value);
    };
  
    return (
        
      <div class="card" 
        >
        <div class="card-body">
        
        <nav className="navbar">
          <span className="navbar-brand" >Search Your Book <p>  </p></span>
        </nav>
        <div className="container">
          <div className="search-box">
          <form action=""></form>
            <input type="text" value={userInput} onChange={handleInputChange} placeholder="Enter book name" />
            
            <button onClick={handleSubmit} type='submit'>Search</button>
          </div>
          <div className="result-box">
            <p></p>
            <p></p>
            {result && <p className="result">{result}</p>}
            {imageUrl && <img className="book-image" src={imageUrl} alt="Book Cover" width="150" height="200" class="d-inline-block align-center" />}
            {userInput && <p className="book-name">: {userInput}</p>}
            {author && <p className="book-info">Author: {author}</p>}
            {genre && <p className="book-info">Genre: {genre}</p>}
            {pages && <p className="book-info">Pages: {pages}</p>}
          </div>
            
          </div>
        </div>
      </div>

      
    );
    const handleInputChange2 = (e) => {
      setInputValue1(e.target.value);
      setInputValue2(e.target.value);
      setInputValue3(e.target.value);
    };
  
    return (
      <div>
        {/* <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Add to List</button>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
      </div>
      );
  };
  
  export default Test;