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
                                <Link href={`/article/${post._id}`}>
                                    <a style={{textDecoration:'none'}}>
                                        <h5 className="text-dark">{post.title}</h5>
                                        <p className="mb-3 text-muted col-md-10">
                                            {post.content.slice(0, 150) + ' ......'}
                                        </p>
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