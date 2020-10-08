import Layout from '../../component/layout'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { themeColor } from '../../functions/utils'

export default function Register() {
    const router = useRouter()
    const [token, setToken] = useState()

    useEffect(() => {
        setToken(localStorage.getItem('auth'))
    })

    if (token) router.push('/article/hot')

    const postRegister = async () => {
        if (!document.getElementById('form-name').value) return window.alert('Sorry!  Σ(･口･)   記得填你名字啦')
        else if (!document.getElementById('form-email').value) return window.alert('Sorry!  Σ(･口･)   記得填你電子郵件啦')
        else if (!document.getElementById('agree-protocol').checked) {
            return window.alert('Sorry!  Σ(･口･)   請同意使用者條款與隱私權政策')
        }
        
        return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, {
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
            <div className="py-5 text-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, .6), rgba(0, 0, 0, .75)), url(/like.jpg)", backgroundSize: "cover" }} >
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-lg-6 col-10 bg-white p-5">
                            <h1 className="mb-4">歡迎註冊 :D</h1>
                            <form className="text-left">
                                <div className="form-group">
                                    <label htmlFor="form16">暱稱</label>
                                    <small className="ml-3 text-muted">最好別人都認不出你</small>
                                    <input type="text" className="form-control" id="form-name" placeholder="協同金城武、真難溶於水..." maxLength={30} autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form18">電子郵件</label>
                                    <small className="ml-3 text-danger">注意: 電郵地址一旦註冊完成 恕將無法再更改</small>
                                    <input type="email" className="form-control" id="form-email" placeholder="mark_haung@gmail.com" autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form20">密碼</label>
                                    <p>將由系統生成暫時密碼，並傳送至您的電子郵件信箱。</p>
                                </div>
                                <hr />
                                <div className="form-group">
                                    <input type="checkbox" id="agree-protocol" />
                                    <label className="ml-1">
                                        我同意
                                        <a href="https://sites.google.com/my.cmsh.cyc.edu.tw/cmsforum-policies/%E9%A6%96%E9%A0%81" 
                                        target="_blank">使用者條款與隱私權政策</a>
                                    </label>
                                </div>
                                <button type="button" className="btn mt-1" style={{ background: themeColor, color: "#ffffff" }} onClick={postRegister}>註冊</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}