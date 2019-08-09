import axios from 'axios'

//  const dev = 'http://localhost:3333'
const produtction = 'https://ellismartindev.herokuapp.com/'

const api = axios.create({
  baseURL: produtction
})

export default api