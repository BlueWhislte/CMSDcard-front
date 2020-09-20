import { themeColor } from '../functions/utils'

export default function Top() {
    return (
        <div className="text-center py-4" style={{ backgroundColor: themeColor }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-sm-12 col-7">
                        <h1>協同學生論壇 CMS Forum</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}