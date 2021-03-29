import axios from 'axios'

const axiosWithAuth = () => {
    const token = localStorage.getItem('token') ?? JSON.stringify('not-logged-in')

    return axios.create({
        headers: {
            Authorization: token,
        },
        baseURL: 'https://reqres.in/api' // base api url here
    })
}

export default axiosWithAuth 