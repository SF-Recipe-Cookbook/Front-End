import axios from 'axios';

const axiosWithAuth = () => {
  const token =
    localStorage.getItem('token') ?? JSON.stringify('not-logged-in');
  // console.log('Token', token);

  return axios.create({
    headers: {
      json: true,
      'X-Auth-Token': token,
    },
    baseURL: 'https://ttwebft72recipecookbook.herokuapp.com/api',
  });
};

export default axiosWithAuth;
