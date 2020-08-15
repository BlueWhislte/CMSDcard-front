import Layout from '../../component/layout'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Register() {
    const router = useRouter()
    const [token, setToken] = useState()

    useEffect(() => {
        setToken(localStorage.getItem('auth'))
    })

    if (token) router.push('/article/hot')

    const postRegister = async () => {
        return await fetch('http://localhost:6001/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: document.getElementById('form-name').value,
                email: document.getElementById('form-email').value
            })
        })
            .then(async (res) => {
                if (res.ok) router.push('/user/login')
                else window.alert('Sorry!  Σ(･口･)   ' + await res.text())
            })
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
                                    <label htmlFor="form16">暱稱</label>
                                    <small className="ml-2 text-muted"> ex:協同金城武、真難溶於水...</small>
                                    <input type="text" className="form-control" id="form-name" placeholder="最好別人都不要認出你" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form18">電子郵件</label>
                                    <input type="email" className="form-control" id="form-email" placeholder="mark_haung@gmail.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form20">密碼</label>
                                    <p>將由系統生成暫時密碼，並傳送至您的電子郵件信箱。</p>
                                </div>
                                <button type="button" className="btn mt-1" style={{ background: "#12bbad", color: "#ffffff" }} onClick={postRegister}>註冊</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}