import axios from "axios";

export default class BookService {
  static async getBooks(apiKey, list) {
      const response = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=${apiKey}`
      );
      return response;
  }
}