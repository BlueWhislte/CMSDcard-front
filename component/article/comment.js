import { convertBriefTime, themeColor } from '../../functions/utils'
import Linkify from 'linkifyjs/react'

export default function Comment({ comments, postId }) {

    const postComment = async () => {
        if (!document.getElementById('form-comment').value) return window.alert('Sorry!  Σ(･口･)   你的留言是空白的ㄟ')
        
        return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comment/${postId}`, {
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
        .then(() => document.getElementById('form-comment').value = '')
    }

    return (
        <div>
            <form>
                <div className="row">
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                        <input id="form-comment" type="text" className="form-control" placeholder="留言" autoComplete="off" />
                    </div>
                    <button type="button" className="btn" style={{ backgroundColor: themeColor, color: "#ffffff" }} onClick={postComment}>留言</button>
                </div>
            </form>
            <br />
            <div className="list-group">
                {comments.map(comment => (
                    <div className="list-group-item list-group-item-action flex-column align-items-start" key={comment._id}>
                        <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">{comment.authorName}</h6>
                            <small className="text-muted">{convertBriefTime(comment.postTime)}</small>
                        </div>
                        <p className="mb-0">
                            <Linkify tagName="p">{comment.content}</Linkify>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}