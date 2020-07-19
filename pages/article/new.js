import Layout from '../../component/layout'
import Post from '../../component/article/post'

export default function Hot() {
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
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </main>
        </Layout>
    )
}