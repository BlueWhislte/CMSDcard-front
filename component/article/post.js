import Comment from './comment'

export default function Post() {
    return (
        <div className="py-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="d-flex justify-content-between">
                                    <div>leafoliage</div>
                                    <div>2020.07.17-10:31</div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5>阿好煩喔</h5>
                                <p className="mb-0">爛死了爛死了爛死了</p>
                                <a className="btn py-0 px-1 pt-0 btn-link mt-1 mb-1" href="#">
                                    <i className="fa fa-thumbs-o-up fa-fw fa-1x py-1 text-warning"></i>
                                </a>
                                <a className="btn py-0 px-1 pt-0 btn-link mt-1 mb-2" href="#">
                                    <i className="fa fa-comment-o fa-fw fa-1x py-1 text-warning"></i>
                                </a>
                                <Comment />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}