export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div class="container"> <a class="navbar-brand" href="#">
                <i class="fa d-inline fa-commenting fa-lg"></i>
                <b></b>
            </a> <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                data-target="#navbar11">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar11">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item"> <a class="nav-link">熱門文章</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#">先人文章</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#">我要投稿</a> </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"> <a class="nav-link" href="#">註冊</a> </li>
                    </ul> <a class="btn btn-primary navbar-btn ml-md-2">登入</a>
                </div>
            </div>
        </nav>
    )
}