import Layout from '../../component/layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { themeColor } from '../../functions/utils'

export default function Login() {
    const router = useRouter()
    const [showPass, setShowPass] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('auth')) router.push('/article/hot')

        document.getElementById('form-pass').addEventListener('keyup', (e)=>{
            if (e.key === 'Enter') postLogin()
        })
    })


    const postLogin = async () => {
        return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: document.getElementById('form-email').value,
                password: document.getElementById('form-pass').value
            })
        })
            .then(async res => {
                if (res.status == 401) return window.alert('Sorry!  Σ(･口･)   登入失敗')
                else if (!res.ok) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
                else return res.json()
            })
            .then(data => {
                localStorage.setItem('auth', data.accessToken)
                router.reload()
            })
            .catch(err => { console.log(err) })
    }

    const showPassReverse = () => {
        if (document.getElementById('form-pass').getAttribute('type') === "password") {
            document.getElementById('form-pass').setAttribute('type', 'text')
            setShowPass(true)
        } else {
            document.getElementById('form-pass').setAttribute('type', 'password')
            setShowPass(false)
        }
    }

    return (
        <Layout>
            <div className="py-5 text-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, .75), rgba(0, 0, 0, .6))", backgroundSize: "cover" }} samesite="None" >
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-md-6 col-10 bg-white p-5 my-5">
                            <h1 className="mb-4">登入</h1>
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="電子郵件" id="form-email" autoComplete="off" />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="password" className="form-control" placeholder="密碼" id="form-pass" autoComplete="off" />
                                    <small className="form-text text-muted text-right mt-2">
                                        <button type="button" className="btn text-primary my-0 p-0" style={{fontSize:"13px"}} onClick={showPassReverse}>{
                                            showPass ? '隱藏密碼' : '顯示密碼'
                                        }</button>
                                    </small>
                                </div>
                                <button type="button" className="btn" onClick={postLogin} style={{ background: themeColor, color: "#ffffff" }}>登入</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}