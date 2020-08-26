import { convertBriefTime, themeColor } from '../../functions/utils'

export default function Comment({ comments, postId }) {

    const postComment = async () => {
        return await fetch(`http://localhost:6001/comment/${postId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            },
            body: JSON.stringify({
                authorId: '5f28c3d328666f21bca62f7e',
                content: document.getElementById('form-comment').value
            })
        }).then(res => res.json())
    }

    return (
        <div>
            <form>
                <div className="row">
                    <div className="col-md-11">
                        <input id="form-comment" type="text" className="form-control" placeholder="留言" autoFocus autoComplete="off" />
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
                        <p className="mb-0">{comment.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}