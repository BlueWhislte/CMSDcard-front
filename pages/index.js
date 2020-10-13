import Layout from '../component/layout'
import Link from 'next/link'
import { themeColor } from '../functions/utils'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('auth')) router.push('/article/new')
  })

  return (
    <Layout>
      <main>
        <div className="pt-5 text-center text-white h-100 align-items-center d-flex" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(/img/blue.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "repeat" }} samesite="None">
          <div className="container pt-5">
            <div className="row pb-5  ">
              <div className="mx-auto col-lg-10 col-md-10">
                <h1 className="display-3 my-5">歡迎來到<br />協同學生論壇</h1>
                <p className="lead mb-5">這是一個專屬於協同人的論壇，請在這裡自由發表對於學校政策、課程等學校事務的看法</p>
                <Link href="/user/login">
                  <a className="btn btn-lg mx-1" style={{ borderColor: themeColor, color: themeColor }}>我要登入</a>
                </Link>
                <Link href="/user/register">
                  <a className="btn btn-lg mx-1" style={{ backgroundColor: themeColor, borderColor: themeColor }}>我要註冊</a>
                </Link>
                <p className="text-center text-white py-5 mb-3">
                  請詳閱
                  <Link href="/rule">
                    <a className="text-white ml-1">平台守則</a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="row justify-content-end">
              <p className="text-muted">Photo by asim alnamat from Pexels</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
