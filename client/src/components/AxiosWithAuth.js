import axios from 'axios';

const AxiosWithAuth = props => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      Authorization: token
    }
  });
};

export default AxiosWithAuth;
