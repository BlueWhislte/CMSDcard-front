import Link from 'next/link'
import { useState, useEffect } from 'react'
import { themeColor } from '../functions/utils'

export default function Nav() {
    const [token, setToken] = useState()

    useEffect(() => {
        setToken(localStorage.getItem('auth'))
    })

    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "#000000" }}>
            <div className="container">
                <Link href={token ? "" : "/"}>
                    <a className="navbar-brand">
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
                            <Link href={token ? "/article/hot" : ""}>
                                <a className="nav-link">熱門文章</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={token ? "/article/new" : ""}>
                                <a className="nav-link">最新文章</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={token ? "/404" : ""}>
                                <a className="nav-link">先人文章</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={token ? "/article/post" : ""}>
                                <a className="nav-link">我要投稿</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={token ? "/article/search" : ""}>
                                <a className="nav-link">搜尋文章</a>
                            </Link>
                        </li>
                    </ul>
                    {token ? (
                        <>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link href="/user/account">
                                        <a className="nav-link">我的帳號</a>
                                    </Link>
                                </li>
                            </ul>
                            <Link href="/user/login">
                                <a className="btn navbar-btn ml-md-2" onClick={() => { localStorage.removeItem('auth') }} style={{ backgroundColor: themeColor }}>登出</a>
                            </Link>
                        </>
                    ) : (
                            <>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link href="/user/register">
                                            <a className="nav-link">註冊</a>
                                        </Link>
                                    </li>
                                </ul>
                                <Link href="/user/login">
                                    <a className="btn navbar-btn ml-md-2" style={{ backgroundColor: themeColor }}>登入</a>
                                </Link>
                            </>
                        )}
                </div>
            </div>
        </nav>
    )
}