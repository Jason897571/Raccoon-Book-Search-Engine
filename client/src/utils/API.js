import axios from 'axios';
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
const searchGoogleBooks = async (query) => {
  return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  
};


export default searchGoogleBooks;