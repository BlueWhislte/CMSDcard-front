import Head from 'next/head'
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
                            <p className="lead mb-0">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment.</p>
                        </div>
                        <div className="p-0 col-lg-2">
                            <img className="img-fluid d-block" src="idea.png" />
                        </div>
                    </div>
                    <div className="row mb-4 mt-5 d-flex justify-content-center">
                        <div className="p-0 order-2 order-lg-1 col-lg-2">
                            <img className="img-fluid d-block" src="email.png" />
                        </div>
                        <div className="d-flex flex-column justify-content-center p-3 ml-1 col-lg-7 order-1 order-lg-2">
                            <h3>聯絡我們</h3>
                            <p className="lead mb-0">
                                Email: cmsforum.official@gmail.com <br />
                                如果有任何使用上的困難、疑問，抑或又任何建議、指教，都歡迎告訴我們!
                                </p>
                        </div>
                    </div>
                    <div className="row mt-2 mb-5 d-flex justify-content-center">
                        <div className="d-flex flex-column justify-content-center p-3 col-lg-7">
                            <h3>網站作者</h3>
                            <p className="lead mb-0">
                                鹿介，協同中學高X生。喜歡打code，因而把整個暑假都奉獻給這個網站了。
                                平常會彈吉他、看Youtube、玩Minecraft當消遣。
                                一般上課不太睡覺的，但每逢生物課必定先睡半節再說，導致每次上完生物課心情都很好。
                                </p>
                        </div>
                        <div className="p-0 col-lg-2">
                            <img className="img-fluid d-block" src="lemon.png" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}