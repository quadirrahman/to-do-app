import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3060/api'
})

export default axios