import axios from 'axios';

//Build module that "creates" a new "instance" of the axios object
// need:
// -- baseURL
// -- headers object -> authorization header with token.

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');


    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            Authorization: token,
        }
    })
}