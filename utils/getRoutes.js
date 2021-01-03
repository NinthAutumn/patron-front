const axios = require('axios');


module.exports = async () => {
  let routes = [];
  // const instance = axios.create({
  //   baseURL: 'https://api.nobles.com',
  // });
  try {
    const {
      data
    } = await axios.get('/v2/book/show/all')

    return data.map(book => `/books/${book.id}`)
  } catch (error) {
    return routes
  }
}
