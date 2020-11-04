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
    },
    post:{
        posts: () => requestHelper({
            url: '/blog-posts',
            method: 'get',
        }),
        post: (slug) => requestHelper({
            url: `/blog-posts?slug=${slug}`,
            method: 'get'
        })
    }

}