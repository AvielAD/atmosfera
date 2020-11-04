import Link from 'next/link';

const Blog =(props)=>{
    return(
        <>
            <p>Aqui va el blog </p>
            <p>mas detalles: <Link href="/Blog/Details">detalles</Link></p>
        </>
    );
}

export default Blog;