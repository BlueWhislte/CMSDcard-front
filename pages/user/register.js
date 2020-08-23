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
            <div className="py-5 text-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, .75), rgba(0, 0, 0, .6))", backgroundSize: "cover" }} >
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-lg-6 col-10 bg-white p-5">
                            <h1 className="mb-4">歡迎註冊 :D</h1>
                            <form className="text-left">
                                <div className="form-group">
                                    <label htmlFor="form16">暱稱</label>
                                    <small className="ml-3 text-muted">最好別人都認不出你</small>
                                    <input type="text" className="form-control" id="form-name" placeholder="協同金城武、真難溶於水..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form18">電子郵件</label>
                                    <small className="ml-3 text-danger">注意: 電郵地址一旦註冊完成 恕將無法再更改</small>
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