import Link from 'next/link';
import api from '../../Services/api';
import Head from 'next/head';


const Blog = (props) =>{
    const {postTitles} = props;

    return(
        <>
            <Head>
                <title>Atmosfera - Blog</title>
            </Head>
            <p>Aqui va el blog </p>
            <p>mas detalles: <Link href="/blog/Details">detalles</Link></p>
            <ul>
            { postTitles.map((item, index) => {
                return(
                    <div key={index}>
                            <li>
                                <Link href={`/blog/${item[1]}`}>
                                    <a className="text-dark">{item[0]}</a>
                                </Link>

                            </li>
                    </div>
                )
            })}
             </ul>

        </>
    );
}
export const getStaticProps = async (ctx) => {
    const res = await api.post.posts();
    const titles = res.data.map((item, index)=>[item.Title, item.slug])
    return { 
        props:{ postTitles: titles }
    }
}

export default Blog;