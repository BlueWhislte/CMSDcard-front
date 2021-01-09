import Link from 'next/link'
import { convertDateOnly } from '../../functions/utils'

export default function Post({ post, size }) {
    const slice = 60

    return (
        <div className={`col-md-${size ? size : 12}`}>
            <div className="py-3">
                <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between">
                            <div>{post.authorName}</div>
                            <div>{convertDateOnly(post.postTime)}</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <Link href={`/article/${post._id}`}>
                            <a style={{ textDecoration: 'none' }}>
                                <h5 className="text-dark">{!post.isDeleted ? post.title : ""}</h5>
                                <p className={"mb-3 text-muted col-md-10" + (size ? " d-none d-sm-block" : "")}>
                                    {!post.isDeleted ?
                                        post.content.slice(0, slice) + ' ......'
                                        :
                                        <i>! 文章內容已遭移除 !</i>
                                    }
                                </p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}