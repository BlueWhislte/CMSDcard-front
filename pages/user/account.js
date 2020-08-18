import { useState, useEffect } from 'react'
import Layout from '../../component/layout'
import Loading from '../../component/loading'

export default function Account() {
    const [user, setUser] = useState()

    useEffect(() => {
        async function getUserData() {
            const data = await fetch('http://localhost:6001/user', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('auth')}`
                }
            })
            if (data.status == 401 || data.status == 403) router.push('/user/login')
            else setUser(await data.json())
        }

        getUserData()
    }, [])

    const putUser = async () => {
        return await fetch('http://localhost:6001/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            },
            body: JSON.stringify({
                password: document.getElementById('form-password').value
            })
        }).then(res => res.json())
    }

    return (
        <Layout>
            {user ?
                <div className="py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {/* <div className="row"> */}

                                <h1 className="display-5 my-3">
                                    {/* <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-badge-fill mb-2 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z" />
                                    </svg> */}
                                    我的帳號
                                    </h1>
                                {/* </div> */}
                                <hr />
                                <h3 className="my-4">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person mb-1 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    </svg>
                                    暱稱
                                    <div className="mt-1 ml-5">
                                        {user.name}
                                    </div>
                                </h3>
                                <h3 className="my-4">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope-open mb-1 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
                                    </svg>
                                    電子郵件
                                    <div className="mt-1 ml-5">
                                        {user.email}
                                    </div>
                                </h3>
                                <h3 className="mt-4 mb-2">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-lock mb-1 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z" />
                                    </svg>
                                    密碼
                                    </h3>
                                <div className="row">
                                    <input type="text" className="form-control col-md-4 ml-5 mr-3" id="form-password" placeholder="新密碼" />
                                    <button type="button" className="btn" style={{ background: "#12bbad", color: "#FFFFFF" }} onClick={putUser}>更改密碼</button>
                                </div>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div> : <>
                    <Loading />
                </>}
        </Layout>
    )
}