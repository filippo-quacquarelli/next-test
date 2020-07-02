
function Offerte( { posts } ) {
    return (
        <ul>
            { posts.slice(0, 10).map( (post, index) => (
                <li>
                    <img src={post.url} />
                    <br />
                    {post.title}
                </li>
            ) ) }
        </ul>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}

export default Offerte