import axios from 'axios';

const requestHelper = axios.create({
    baseURL: 'http://www.atmosfera.la:1337/',
});

export default {
    home:{
        carousel: () => requestHelper({
            url: '/carousel-homes',
            method: 'get',
        })
    }
}