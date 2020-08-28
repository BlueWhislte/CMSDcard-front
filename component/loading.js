export default function Loading() {
    return (
        <div className="py-5 mt-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-1">
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}