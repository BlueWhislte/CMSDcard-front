import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from '../../component/layout'
import Comment from '../../component/article/comment'
import { convertFullTime } from '../../functions/utils'

export default function Article() {
    const router = useRouter()
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        async function fetchArticleData() {
            const articleData = await fetch(`http://localhost:6001/post/${router.query.id}`, {
                headers: {
                    // 'Authorization': `Bearer ${localStorage.getItem('auth')}`
                }
            })
            setArticle(await articleData.json())
        }
        async function fetchCommentsData() {
            const commentsData = await fetch(`http://localhost:6001/comment/post/${router.query.id}`, {
                headers: {
                    // 'Authorization': `Bearer ${localStorage.getItem('auth')}`
                }
            })
            setComments(await commentsData.json())
        }

        fetchArticleData()
        fetchCommentsData()
    })

    const postLike = async () => {
        return await fetch(`http://localhost:6001/post/like/${article._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('auth')}`
            }
        }).then(res => { res.json() })
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
                            <h6 className="text-muted">{convertFullTime(article.postTime)}</h6>
                            <hr />
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                            <a className="btn py-0 px-1 pt-0 btn-link mt-1 mb-1 text-warning" onClick={postLike} style={{ textDecoration: "none" }}>
                                <i className="fa fa-thumbs-o-up fa-fw fa-1x py-1 text-warning"></i>
                                {article.likeNum}
                            </a>
                            <button className="btn py-0 px-1 pt-0 btn-link mt-1 mb-2 text-warning" style={{ textDecoration: "none" }} disabled>
                                <i className="fa fa-comment-o fa-fw fa-1x py-1 text-warning"></i>
                            </button>
                            <hr />
                            <Comment comments={Array.from(comments)} postId={article._id} />
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
