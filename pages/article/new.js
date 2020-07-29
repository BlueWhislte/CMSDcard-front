import Layout from '../../component/layout'
import Post from '../../component/article/post'

export default function New({ data }) {
    return (
        <Layout>
            <div className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-5 mt-3">最新文章</h1>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                {
                    data.map(post => (
                        <Post post={post} key={post.title} />
                    ))
                }
            </main>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:6001/post/select/new')
    const data = await res.json()

    return {
        props: {
            data,
        }
    }
}