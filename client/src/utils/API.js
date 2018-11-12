import dotenv from 'dotenv';
import axios from "axios";
dotenv.config();

export default {
  //Search NY Times for articles
  searchArticles: (query, begin, end) => {
    const URL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&begin_date=${begin}&end_date=${end}&api-key=b43250bb6ea945bbbcbee004241d4b01`;

    return axios.get(URL);
  },
  // Gets all books
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(bookData) {
    return axios.post("/api/articles", bookData);
  }
};
