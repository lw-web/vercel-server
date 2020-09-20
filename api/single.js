const axios = require('axios')

const BASE_URL = 'https://api.github.com'

module.exports = async (req, res) => {
  const { id = 'b5384365e6a12d5ac52cc47e508ccb16' } = req.query
  const { data } = await axios.get(`${BASE_URL}/gists/${ id }`)
  res.status(200).json(data)
}