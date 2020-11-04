import axios from 'axios';

const requestHelper = axios.create({
    baseURL: process.env.API_HOST,
});

export default {
    home:{
        carousel: () => requestHelper({
            url: '/carousel-homes',
            method: 'get',
        })
    }
}