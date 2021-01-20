import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from '../../component/layout'
import Comment from '../../component/article/comment'
import Loading from '../../component/loading'
import Linkify from 'linkifyjs/react'
import { convertFullTime, violationCode } from '../../functions/utils'

export default function Article() {
    const router = useRouter()
    const [article, setArticle] = useState(null)
    const [comments, setComments] = useState(null)

    useEffect(() => {
        if (!localStorage.getItem('auth')) router.push('/user/login')

        if (router.query.id) {
            fetchCommentsData()
            fetchArticleData()
        }
    }, [router.query.id]);

    async function fetchArticleData() {
        try {
            const url = `${process.env.NEXT_PUBLIC_API_URL}/post/` + router.query.id
            const articleData = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('auth')}`
                }
            })
            if (articleData.status == 401 || articleData.status == 403) {
                router.push('/user/login')
            }
            else if (articleData.status == 404) router.push('/404')
            else if (!articleData.ok) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
            else setArticle(await articleData.json())
        } catch (err) {
            console.log(err)
        }
    }

    async function fetchCommentsData() {
        try {
            const url = `${process.env.NEXT_PUBLIC_API_URL}/comment/post/` + router.query.id
            const commentsData = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('auth')}`
                }
            })
            if (commentsData.status == 401 || commentsData.status == 403) {
                router.push('/user/login')
            }
            else if (!commentsData.ok) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
            else setComments(await commentsData.json())
        } catch (err) {
            console.log(err)
        }
    }

    const postLike = async () => {
        if (article.isDeleted) return
        return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/like/${router.query.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            }
        }).then(async res => {
            if (!res.ok) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
            else {
                fetchArticleData()
            }
        })
    }

    return (
        <Layout>
            <div className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-secondary mb-4 py-0" onClick={() => router.back()}>
                                        <i className="fa fa-caret-left" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    {
                                        article ? <>
                                            <h3>{article.authorName}</h3>
                                            <h6 className="text-muted">{convertFullTime(article.postTime)}</h6>
                                            <hr />
                                            <h3>{!article.isDeleted ? article.title : ""}</h3>
                                            <p style={{ whiteSpace: "pre-line" }}>
                                                {!article.isDeleted ?
                                                    <Linkify>{article.content}</Linkify>
                                                    :
                                                    <i>{`! 文章內容已遭移除 !
                                                    此文章已遭檢舉違反社群守則：
                                                    「${violationCode[article.violationCode]}」`}</i>
                                                }
                                            </p>
                                            <a className="btn py-0 px-1 pt-0 btn-link mt-1 mb-1 text-warning" onClick={postLike} style={{ textDecoration: "none" }}>
                                                {article.hasLiked ?
                                                    <i className="fa fa-thumbs-up fa-fw fa-1x py-1 fa-lg" /> :
                                                    <i className="fa fa-thumbs-o-up fa-fw fa-1x py-1 fa-lg" />
                                                }
                                                <span style={{ fontSize: "large" }}>{article.likeNum}</span>
                                            </a>
                                            <hr />
                                            <Comment comments={Array.from(comments || [])} postId={article._id} onComment={fetchCommentsData} articleIsDeleted={article.isDeleted} />
                                        </> : <Loading />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
