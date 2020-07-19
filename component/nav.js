import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor: "#000000"}}>
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand" href="#">
                        <i className="fa d-inline fa-commenting fa-lg"></i>
                    </a>
                </Link>
                <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                    data-target="#navbar11">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar11">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link href="/article/hot">
                                <a className="nav-link">熱門文章</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/article/new">
                                <a className="nav-link">最新文章</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/404">
                                <a className="nav-link">先人文章</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/article/post">
                                <a className="nav-link">我要投稿</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="">
                                <a className="nav-link">註冊</a>
                            </Link>
                        </li>
                    </ul>
                    <Link href="">
                        <a className="btn navbar-btn ml-md-2" style={{ backgroundColor: "#12bbad" }}>登入</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}