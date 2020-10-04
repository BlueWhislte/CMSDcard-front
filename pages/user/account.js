import { useState, useEffect } from 'react'
import Layout from '../../component/layout'
import Loading from '../../component/loading'
import { themeColor } from '../../functions/utils'
import { useRouter } from 'next/router'

export default function Account() {
    const router = useRouter()
    const [user, setUser] = useState()
    const [editing, setEdit] = useState(false)

    useEffect(() => {
        getUserData()
    }, [])
    
    async function getUserData() {
        try {
            const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('auth')}`
                }
            })
            if (data.status == 401 || data.status == 403) {
                router.push('/user/login')
                router.reload()
            }
            else setUser(await data.json())
        } catch (err) {
            // window.alert("系統錯誤")
            console.log(err)
        }
    }

    const putUserPassword = async () => {
        if (!document.getElementById('form-password').value) return

        return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            },
            body: JSON.stringify({
                password: document.getElementById('form-password').value
            })
        }).then(async res => {
            if (!res.ok) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
        })
            .then(() => {
                document.getElementById('form-password').value = ''
            })
    }

    const putUserName = async () => {
        if (!document.getElementById('form-name').value) return

        return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            },
            body: JSON.stringify({
                name: document.getElementById('form-name').value
            })
        }).then(async res => {
            if (!res.ok) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
        })
            .then(() => {
                document.getElementById('form-name').value = ''
                getUserData()
            })
    }

    return (
        <Layout>
            <div className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-5 my-3">我的帳號</h1>
                            <hr />
                            {user ?
                                <>
                                    <div className="my-4">
                                        <h3>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person mb-1 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            </svg>
                                        暱稱
                                    </h3>
                                        <h5 className="ml-5">
                                            <span>
                                                {user.name}
                                            </span>
                                            <button className="btn mb-2 ml-3" onClick={() => { setEdit(!editing) }}>
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                                    <path fillRule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                                                </svg>
                                            </button>
                                        </h5>
                                        {editing ? <div className="row">
                                            <input type="text" className="form-control col-lg-4 col-md-6 col-7 ml-5 mr-3" id="form-name" placeholder="更改暱稱" maxLength={30} autoComplete="off" />
                                            <button type="button" className="btn" style={{ background: themeColor, color: "#FFFFFF" }} onClick={putUserName}>
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                </svg>
                                            </button>
                                        </div> : null}
                                    </div>
                                    <div className="my-4">
                                        <h3>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope-open mb-1 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
                                            </svg>
                                        電子郵件
                                    </h3>
                                        <h5 className="ml-5">
                                            {user.email}
                                        </h5>
                                    </div>
                                    <h3 className="mt-4 mb-2">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-lock mb-1 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z" />
                                        </svg>
                                    密碼
                                    </h3>
                                    <div className="row">
                                        <input type="text" className="form-control col-lg-4 col-md-6 col-7 ml-5 mr-3" id="form-password" placeholder="更改密碼" autoComplete="off" />
                                        <button type="button" className="btn" style={{ background: themeColor, color: "#FFFFFF" }} onClick={putUserPassword}>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </>
                                :
                                <>
                                    <Loading />
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}