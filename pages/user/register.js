import Layout from '../../component/layout'

export default function Register() {

    const postRegister = async () => {
        return await fetch('http://localhost:6001/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: document.getElementById('form-name').value,
                email: document.getElementById('form-email').value,
                password: document.getElementById('form-pass').value
            })
        })
            .then(res => { res.json() })
            .catch(err => { console.log(err) })
    }

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
                                    <label htmlFor="form16">使用者名稱</label>
                                    <small className="ml-2 text-muted">ex: mark_the_handsome、fanny.weng、協同金城武、真難溶於水...</small>
                                    <input type="text" className="form-control" id="form-name" placeholder="mark_the_handsome" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form18">電子郵件</label>
                                    <input type="email" className="form-control" id="form-email" placeholder="mark@gmail.com" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="form19">密碼</label>
                                        <input type="password" className="form-control" id="form-pass" placeholder="••••" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="form20">確認密碼</label>
                                        <input type="password" className="form-control" id="form-confirmPass" placeholder="••••" />
                                    </div>
                                </div>
                                <button type="submit" className="btn mt-1" style={{ background:"#12bbad", color:"#ffffff" }} onClick={postRegister}>註冊</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}