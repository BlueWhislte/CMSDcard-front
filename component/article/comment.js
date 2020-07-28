export default function Comment({ comments }) {
    return (
        <div>
            <h5 className="bg-light px-2 py-1 mb-0">留言</h5>
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