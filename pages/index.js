import Layout from '../component/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="py-5 text-center text-white h-100 align-items-center d-flex" style={{backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)), url(https://static.pingendo.com/cover-bubble-dark.svg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "repeat"}}>
          <div className="container py-5">
            <div className="row">
              <div className="mx-auto col-lg-8 col-md-10">
                <br />
                <br />
                <br />
                <h1 className="display-3 mb-4">歡迎來到<br />協同學生意見平台</h1>
                <p className="lead mb-5">這是一個專屬於協同人的論壇，請在這裡自由發表對學校、對課程等等的看法</p>
                <Link href="/user/login">
                  <a className="btn btn-lg mx-1" style={{ borderColor: "#12bbad", color: "#12bbad" }}>我要登入</a>
                </Link>
                <Link href="">
                  <a className="btn btn-lg mx-1" style={{ backgroundColor: "#12bbad", borderColor: "#12bbad" }}>我要註冊</a>
                </Link>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
