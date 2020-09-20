const axios = require('axios')

const BASE_URL = 'https://api.github.com'

module.exports = async (req, res) => {
  const { githubUsername = 'weblw' } = req.query
  const { data } = await axios.get(`${BASE_URL}/users/${githubUsername}`)
  res.status(200).json(data)
}