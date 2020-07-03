
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../component/layout'

 
function HomePage({ posts, logo }) {
    return(
        <Layout>
            <Head>
                <title>Next Test</title>
                <link rel="icon" href={logo} />
            </Head>

            <img src={logo} alt="Logo" className="logo" />
            <h1>Home page</h1>
            <p>
                <Link href="/offerte/offerta"><a>Offerta 1</a></Link>
            </p>
            <ul>
            { posts.slice(0, 5).map( (post, index) => (
                <li key={post.id}>
                    <img src={post.url} />
                    <br />
                    {post.title}
                </li>
            ) ) }
            </ul>

            <style jsx>{`
                
            `}</style>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const posts = await res.json()

    return {
        props: {
            posts,
            logo: "/img/logo.webp"
        },
    }
}



  
export default HomePage
