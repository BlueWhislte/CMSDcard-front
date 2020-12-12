export default function PagingButtons({ totalPage, currPage, changePage }) {
    if (totalPage <= 1) {
        return null
    }

    const buttons = () => {
        let array = []
        for (let i = 1; i <= totalPage; i++) {
            array.push(<li key={i} className={"page-item" + (currPage == i ? " active" : "")}>
                <a className="page-link" href="" onClick={(e)=>{
                    e.preventDefault()
                    changePage(i)
                }}>{i}</a>
            </li>)
        }
        return array
    }

    return (
        <div>
            <ul className="pagination">
                <li className={"page-item" + (currPage == 1 ? " disabled" : "")}>
                    <a className="page-link" href="" onClick={(e)=>{
                        e.preventDefault()
                        changePage(currPage-1)
                    }}>上一頁</a>
                </li>
                {
                    buttons().map(item => item)
                }
                <li className={"page-item" + (currPage == totalPage ? " disabled" : "")}>
                    <a className="page-link" href="" onClick={(e)=>{
                        e.preventDefault()
                        changePage(currPage+1)
                    }}>下一頁</a>
                </li>
            </ul>
        </div>
    )
}