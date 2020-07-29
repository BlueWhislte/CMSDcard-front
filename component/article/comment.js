export default function Comment({ comments, postId }) {

    const postComment = async () => {
        return await fetch('http://localhost:6001/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                authorId: '5f0b0c0c9875a9f6b0ff6863',
                targetPost: postId,
                content: document.getElementById('form-comment').value
            })
        }).then(res => { res.json() })
    }

    return (
        <div>
            <form>
                <div className="row">
                    <div className="col-md-11">
                        <input id="form-comment" type="text" className="form-control" placeholder="留言" />
                    </div>
                    <button type="submit" className="btn btn-info" onClick={postComment}>留言</button>
                </div>
            </form>
            <br />
            <div className="list-group">
                {comments.map(comment => (
                    <div className="list-group-item list-group-item-action flex-column align-items-start" key={comment._id}>
                        <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">{comment.authorName}</h6>
                            <small className="text-muted">{convertTime(comment.postTime)}</small>
                        </div>
                        <p className="mb-0">{comment.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function convertTime(iso) {
    let date = new Date(iso)
    return date.toLocaleString()
}