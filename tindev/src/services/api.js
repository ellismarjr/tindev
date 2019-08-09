import axios from 'axios'

// const dev = 'http://192.168.6.7:3333'
const produtction = 'https://ellismartindev.herokuapp.com/'

const api = axios.create({
  baseURL: produtction
})

export default api