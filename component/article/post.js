import Link from 'next/link'
import { convertDateOnly } from '../../functions/utils'

export default function Post({ post }) {
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
                                            {post.content.slice(0, 60) + ' ......'}
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