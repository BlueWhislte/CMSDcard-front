import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from '../../component/layout'
import Comment from '../../component/article/comment'
import Loading from '../../component/loading'
import Linkify from 'linkifyjs/react'
import { convertFullTime, themeColor } from '../../functions/utils'

export default function Article() {
    const router = useRouter()
    const [article, setArticle] = useState(null)
    const [comments, setComments] = useState(null)

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
                router.reload()
            }
            else if (articleData.status == 404) router.push('/404')
            else if (!articleData.ok) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
            else setArticle(await articleData.json())
        } catch (err) {
            // window.alert("系統錯誤")
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
                router.reload()
            }
            else if (!commentsData.ok) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
            else setComments(await commentsData.json())
        } catch (err) {
            // window.alert("系統錯誤")
            console.log(err)
        }
    }

    useEffect(() => {
        if (!localStorage.getItem('auth')) router.push('/user/login')

        if (router.query.id) {
            fetchCommentsData()
            fetchArticleData()
        }
    }, [router.query.id]);

    const postLike = async () => {
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

    const postComment = async () => {
        if (!document.getElementById('form-comment').value) return

        return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comment/${article._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            },
            body: JSON.stringify({
                authorId: '5f28c3d328666f21bca62f7e',
                content: document.getElementById('form-comment').value
            })
        }).then(async res => {
            if (!res.ok) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
        })
            .then(() => {
                document.getElementById('form-comment').value = ''
                fetchCommentsData()
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
                                            <h3>{article.title}</h3>
                                            <p style={{ whiteSpace: "pre-line" }}>
                                                <Linkify>{article.content}</Linkify>
                                            </p>
                                            <a className="btn py-0 px-1 pt-0 btn-link mt-1 mb-1 text-warning" onClick={postLike} style={{ textDecoration: "none" }}>
                                                {article.hasLiked ?
                                                    <i className="fa fa-thumbs-up fa-fw fa-1x py-1 fa-lg" /> :
                                                    <i className="fa fa-thumbs-o-up fa-fw fa-1x py-1 fa-lg" />
                                                }
                                                <span style={{ fontSize: "large" }}>{article.likeNum}</span>
                                            </a>
                                            <hr />

                                            <div className="row">
                                                <div className="mt-1 col-xl-11 col-lg-11 col-md-10 col-sm-10 col-10">
                                                    <textarea rows="1" id="form-comment" type="text" className="form-control" placeholder="留言" autoComplete="off" />
                                                </div>
                                                <button type="button" className="btn mt-1" style={{ backgroundColor: themeColor, color: "#ffffff" }} onClick={postComment}>
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-right-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M2 1h12a1 1 0 0 1 1 1v11.586l-2-2A2 2 0 0 0 11.586 11H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                                                        <path fillRule="evenodd" d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <small className="ml-1 text-muted">按 Ctrl + Enter 傳送</small>

                                            <Comment comments={Array.from(comments || [])} postId={article._id} />
                                        </>
                                            :
                                            <Loading />
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
