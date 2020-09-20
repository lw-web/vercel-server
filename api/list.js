const axios = require('axios')

const BASE_URL = 'https://api.github.com'

module.exports = async (req, res) => {
  const { githubUsername = 'weblw', page = 1, pageSize = 10 } = req.query
  const { data } = await axios.get(`${BASE_URL}/users/${githubUsername}/gists?page=${page}&per_page=${pageSize}`)
  res.status(200).json(data)
}