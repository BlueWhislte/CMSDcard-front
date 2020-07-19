import Layout from '../../component/layout'

export default function Register() {
    return (
        <Layout>
            <div className="py-5 text-center" >
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-lg-6 col-10">
                            <h1>歡迎註冊 :D</h1>
                            <p className="mb-3 mt-2">註冊並享受言論自由吧!</p>
                            <form className="text-left">
                                <div className="form-group">
                                    <label for="form16">使用者名稱</label>
                                    <input type="text" className="form-control" id="form16" placeholder="mark_the_handsome" />
                                </div>
                                <div className="form-group">
                                    <label for="form18">電子郵件</label>
                                    <input type="email" className="form-control" id="form18" placeholder="mark@gmail.com" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="form19">密碼</label>
                                        <input type="password" className="form-control" id="form19" placeholder="••••" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="form20">確認密碼</label>
                                        <input type="password" className="form-control" id="form20" placeholder="••••" />
                                    </div>
                                </div>
                                <button type="submit" className="btn mt-1" style={{ background:"#12bbad", color:"#ffffff" }}>註冊</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}