import Link from 'next/link'
import { convertDateOnly } from '../../functions/utils'
import Linkify from 'linkifyjs/react'

export default function Post({ post }) {

    const postLike = async () => {
        return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/like/${post._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            }
        }).then(async res => {
            if (!res.ok) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
        })
    }

    return (
        <div className="py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="d-flex justify-content-between">
                                    <div>{post.authorName}</div>
                                    <div>{convertDateOnly(post.postTime)}</div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5>{post.title}</h5>
                                <p style={{ whiteSpace: "pre-line" }} className="mb-3">
                                    <Linkify tagName="p">{post.content}</Linkify>
                                </p>
                                <a id="like" className="btn py-0 px-1 pt-0 btn-link mt-1 mb-0 text-warning" style={{ textDecoration: "none" }} onClick={postLike}>
                                    <i className="fa fa-thumbs-o-up fa-fw fa-1x py-1 text-warning"></i>
                                    {post.likeIds.length}
                                </a>
                                <Link href={`/article/${post._id}`}>
                                    <a className="btn py-0 px-1 pt-0 btn-link mt-1 mb-1 text-warning" style={{ textDecoration: "none" }}>
                                        <i className="fa fa-comment-o fa-fw fa-1x py-1 text-warning"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}