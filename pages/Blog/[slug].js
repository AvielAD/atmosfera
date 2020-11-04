import React from 'react';
import api from '../../Services/api'
import Head from 'next/head';

const Details =({post}) =>{
    return(
        <>
            <Head>
                <title>Atmosfera - {post.Title}</title>
            </Head>
            <div className="container heightPost d-flex justify-content-center align-items-center flex-wrap">
                    <h1 className="">{post.Title}</h1>
                    <p className="text-center">
                        {post.Description}
                    </p>
                    <footer>{post.admin_user.firstname} {post.admin_user.lastname}</footer>

            </div>
        </>
    )
}

export const getStaticProps = async ({params}) =>{
    const res = await api.post.post(params.slug)
    const post = res.data[0];
    return{
        props:{
            post
        },
        revalidate:10
    }
}
export const getStaticPaths = async () =>{
    const res = await (await api.post.posts()).data;
    const paths = res.map((item)=>{
        return {params: {slug: item.slug}}
    })
    return{
        paths,
        fallback: false
    }
}
export default Details;