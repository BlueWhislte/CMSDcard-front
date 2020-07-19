import Layout from '../../component/layout'

export default function Login() {
    return (
        <Layout>
            <div className="py-5 text-center" style={{ backgroundImage: "url('https://static.pingendo.com/cover-bubble-dark.svg')", backgroundSize: "cover" }} >
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <div className="mx-auto col-md-6 col-10 bg-white p-5">
                            <h1 className="mb-4">登入</h1>
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="電子郵件" id="form9" />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="password" className="form-control" placeholder="密碼" id="form10" />
                                    <small className="form-text text-muted text-right mt-2">
                                        <a href="#">顯示密碼</a>
                                    </small>
                                </div>
                                <button type="submit" className="btn" style={{background:"#12bbad", color:"#ffffff"}}>登入</button>
                            </form>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </Layout>
    )
}