import axios from "axios";

export default class ListService {
  static async getList(apiKey) {
      const response = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${apiKey}`
      );
      return response;
  }
}