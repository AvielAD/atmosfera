import axios from 'axios';

const requestHelper = axios.create({
    baseURL: 'https://api.atmosfera.la/',
});

export default {
    home:{
        carousel: () => requestHelper({
            url: '/carousel-homes',
            method: 'get',
        })
    }
}