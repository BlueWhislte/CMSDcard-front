import Layout from '../../component/layout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Login() {
    const router = useRouter()

    useEffect(() => {
        if (localStorage.getItem('auth')) router.push('/article/hot')
    })


    const postLogin = async () => {
        return await fetch('http://localhost:6001/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: document.getElementById('form-email').value,
                password: document.getElementById('form-pass').value
            })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('auth', data.accessToken)
                router.reload()
            })
            .catch(err => { console.log(err) })
    }

    return (
        <Layout>
            <div className="py-5 text-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, .75), rgba(0, 0, 0, .6))", backgroundSize: "cover" }} samesite="None" >
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <div className="mx-auto col-md-6 col-10 bg-white p-5">
                            <h1 className="mb-4">登入</h1>
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="電子郵件" id="form-email" autoComplete="off" />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="password" className="form-control" placeholder="密碼" id="form-pass" autoComplete="off" />
                                    {/* <small className="form-text text-muted text-right mt-2">
                                        <a href="#">顯示密碼</a>
                                    </small> */}
                                </div>
                                <button type="button" className="btn" onClick={postLogin} style={{ background: "#12bbad", color: "#ffffff" }}>登入</button>
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