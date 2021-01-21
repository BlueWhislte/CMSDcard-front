import Layout from '../component/layout'
import Link from 'next/link'

export default function AboutUs() {
    return (
        <Layout title="關於我們">
            <div className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-5 mt-3">關於我們</h1>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>


            <div className="pb-3" >
                <div className="container">
                    <div className="row mt-2 mb-5 d-flex justify-content-center">
                        <div className="d-flex flex-column justify-content-center p-3 col-lg-7">
                            <h3>創立宗旨</h3>
                            <p className="lead mb-0">
                                協同學生論壇為一由學生創作並主導的網站。
                                希望透過這個平台，可以帶動協同學生對校內議題的討論，培養同學們關心學校事務的風氣；
                                讓每個人都能發表意見，並期望能夠將意見彙整，最後要求校方做出改變。
                            </p>
                        </div>
                        <div className="p-4 col-lg-2">
                            <img title="Icons made by Freepik from Flaticon" className="img-fluid d-block" src="/img/idea.png" />
                        </div>
                    </div>
                    <div className="row mb-4 mt-5 d-flex justify-content-center">
                        <div className="p-4 order-2 order-lg-1 col-lg-2">
                            <img title="Icons made by Freepik from Flaticon" className="img-fluid d-block" src="/img/email.png" />
                        </div>
                        <div className="d-flex flex-column justify-content-center p-3 ml-1 col-lg-7 order-1 order-lg-2">
                            <h3>聯絡我們</h3>
                            <p className="lead mb-0">
                                Email: cmsforum.official@gmail.com <br />
                                如果有任何使用上的困難、疑問，抑或有任何建議、指教，都歡迎告訴我們!
                                也可以到<Link href="/blog"><a>部落格</a></Link>連結欄的連結裡提出喔!
                            </p>
                        </div>
                    </div>
                    <div className="row mt-2 mb-5 d-flex justify-content-center">
                        <div className="d-flex flex-column justify-content-center p-3 col-lg-7">
                            <h3>源碼開放</h3>
                            <p className="lead mb-0">
                                本網站由藍哨子團隊架設，為一開源專案，歡迎凡是有能力、有意願的協同人一同維護這個論壇。
                            </p>
                            <p className="lead mt-2">
                                <a className="mr-2" target="_blank" href="https://github.com/BlueWhislte/CMSDcard-front">網站原始碼</a>
                            </p>
                        </div>
                        <div className="p-4 col-lg-2">
                            <img title="Icons made by Freepik from Flaticon" className="img-fluid d-block" src="/img/code.png" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}