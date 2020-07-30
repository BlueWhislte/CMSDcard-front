import { useRouter } from 'next/router'
import Layout from '../../component/layout'
import Comment from '../../component/article/comment'
import Loading from '../../component/loading'
import { convertTime } from '../../functions/utils'

export default function Article({ article, comments }) {
    const router = useRouter()

    if (router.isFallback) {
        return (
            <Layout>
                <Loading />
            </Layout>
        )
    }

    return (
        <Layout>
            <div className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <button className="btn btn-secondary mb-4 py-0" onClick={() => router.back()}>
                                <i className="fa fa-caret-left" aria-hidden="true"></i>
                            </button>
                            <h3>{article.authorName}</h3>
                            <h6 className="text-muted">{convertTime(article.postTime)}</h6>
                            <hr />
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                            <a className="btn py-0 px-1 pt-0 btn-link mt-1 mb-1 text-warning" style={{ textDecoration: "none" }}>
                                <i className="fa fa-thumbs-o-up fa-fw fa-1x py-1 text-warning"></i>
                                {article.likeIds.length}
                            </a>
                            <button className="btn py-0 px-1 pt-0 btn-link mt-1 mb-2 text-warning" style={{ textDecoration: "none" }} disabled>
                                <i className="fa fa-comment-o fa-fw fa-1x py-1 text-warning"></i>
                            </button>
                            <hr />
                            <Comment comments={comments} postId={article._id} />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Layout>
    )
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '5f0d72d2e9a36c35686d933d' } }],
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:6001/post/${params.id}`)
    const article = await res.json()

    const comRes = await fetch(`http://localhost:6001/comment/post/${params.id}`)
    const comments = await comRes.json()

    return {
        props: {
            article,
            comments,
        }
    }
}
