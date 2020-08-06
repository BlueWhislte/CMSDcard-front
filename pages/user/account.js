import { useState, useEffect } from 'react'
import Layout from '../../component/layout'

export default function Account() {
    const [user, setUser] = useState()

    useEffect(() => {
        async function getUserData() {
            const userData = await fetch('http://localhost:6001/user', {
                headers: {
                    // 'Authorization': `Bearer ${localStorage.getItem('auth')}`
                }
            }).then(res => res.json())

            setUser(userData)
        }

        getUserData()
    })

    const putUser = async ()=>{
        return await fetch('http://localhost:6001/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('auth')}`
            },
            body: JSON.stringify({
                password: document.getElementById('form-password').value
            }) 
        }).then(res => res.json())
    }

    return (
        <Layout>
            <div className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>姓名: {user.name}</h3>
                            <h3>電子郵件: {user.email}</h3>
                            <h3>密碼</h3>
                            <input type="text" className="form-control" id="form-password" placeholder="新密碼" />
                            <button type="button" className="btn" style={{ background: "#12bbad", color: "#FFFFFF" }} onClick={putUser}>更改密碼</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}