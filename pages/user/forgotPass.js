import Layout from '../../component/layout'
import { themeColor } from '../../functions/utils'

export default function forgotPass() {
    const restoreAccount = async (email) => {
        return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/forgot/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(async res => {
                if (!res.ok) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
                else {
                    window.alert('修復密碼郵件已送至您的信箱!')
                    document.getElementById('form-email').value = ''
                }
            })
            .catch(err => { console.log(err) })
    }

    return (
        <Layout>
            <div className="container p-5">
                <h2 className="my-3 text-center">忘記密碼</h2>
                <div className="row justify-content-center">
                    <input type="text" className="form-control col-lg-4 col-md-6 col-7 ml-5 mr-3" id="form-email"
                        placeholder="請輸入您註冊論壇的電子郵件" maxLength={30} autoComplete="off" />

                    <button type="button" className="btn" style={{ background: themeColor, color: "#FFFFFF" }}
                        onClick={() => restoreAccount(document.getElementById('form-email').value)}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </Layout>
    )
}