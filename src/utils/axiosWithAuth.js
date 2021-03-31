import axios from 'axios'

const axiosWithAuth = () => {
    const token = localStorage.getItem('token') ?? JSON.stringify('not-logged-in')

    return axios.create({
        headers: {
            Authorization: token,
        },
        baseURL: 'https://ttwebft72recipecookbook.herokuapp.com/api'
    })
}

export default axiosWithAuth