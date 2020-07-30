import Link from 'next/link'
import { convertTime } from '../../functions/utils'

export default function Post({ post }) {

    const postLike = async (userId) => {
        return await fetch(`http://localhost:6001/post/like/${post._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId,
            })
        }).then(res => { res.json() })
    }

    return (
        <div className="py-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="d-flex justify-content-between">
                                    <div>{post.authorName}</div>
                                    <div>{convertTime(post.postTime)}</div>
                                </div>
                            </div>
                            <div className="card-body">
                                {/* <Link href={`/article/${post._id}`}> */}
                                    {/* <a style={{ textDecoration: "none", color: "#000000" }}> */}
                                        <h5>{post.title}</h5>
                                        <p className="mb-3">{post.content}</p>
                                    {/* </a> */}
                                {/* </Link> */}
                                <a id="like" className="btn py-0 px-1 pt-0 btn-link mt-1 mb-0 text-warning" style={{ textDecoration: "none" }} onClick={() => postLike('5f0b0c0c9875a9f6b0ff6863')}>
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
