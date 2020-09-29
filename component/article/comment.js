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
                    <div className="mt-1 col-xl-11 col-lg-11 col-md-10 col-sm-10 col-10">
                        <input id="form-comment" type="text" className="form-control" placeholder="留言" autoComplete="off" />
                    </div>
                    <button type="button" className="btn mt-1" style={{ backgroundColor: themeColor, color: "#ffffff" }} onClick={postComment}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-right-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 1h12a1 1 0 0 1 1 1v11.586l-2-2A2 2 0 0 0 11.586 11H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                            <path fill-rule="evenodd" d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
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