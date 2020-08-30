import Layout from '../component/layout'

export default function AboutUs() {
    return (
        <Layout>
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
                                希望透過這個平台，可以帶動協同學生對校內議題的討論，培養同學們關心學校事務的風氣；
                                讓每個人都能發表意見，並期望能夠將意見彙整，最後要求校方做出改變。
                            </p>
                        </div>
                        <div className="p-0 col-lg-2">
                            <img className="img-fluid d-block" src="/img/idea.png" />
                        </div>
                    </div>
                    <div className="row mb-4 mt-5 d-flex justify-content-center">
                        <div className="p-0 order-2 order-lg-1 col-lg-2">
                            <img className="img-fluid d-block" src="/img/email.png" />
                        </div>
                        <div className="d-flex flex-column justify-content-center p-3 ml-1 col-lg-7 order-1 order-lg-2">
                            <h3>聯絡我們</h3>
                            <p className="lead mb-0">
                                Email: cmsforum.official@gmail.com <br />
                                如果有任何使用上的困難、疑問，抑或有任何建議、指教，都歡迎告訴我們!
                            </p>
                        </div>
                    </div>
                    <div className="row mt-2 mb-5 d-flex justify-content-center">
                        <div className="d-flex flex-column justify-content-center p-3 col-lg-7">
                            <h3>網站作者</h3>
                            <p className="lead mb-0">
                                鹿介，協同中學高X生。喜歡打code，因而把整個暑假都奉獻給這個網站了。
                                平常會看Youtube、玩Minecraft當消遣。
                                一般上課不太睡覺的，但每逢生物課必定先睡半節再說，導致每次上完課心情都很好。
                            </p>
                        </div>
                        <div className="p-0 col-lg-2">
                            <img className="img-fluid d-block" src="/img/avatar.png" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}