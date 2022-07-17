export default class apiService {
  static async getResults(ids) {
    try {
      const response =
        await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&ids=${ids}&interval=1d,30d&per-page=100&page=1
      `);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}
