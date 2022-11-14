import axios from "axios";

export default class BookService {
  static async getBooks(apiKey) {
      const response = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`
      );
      return response;
  }
}