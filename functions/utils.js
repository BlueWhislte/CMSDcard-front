export function convertTime(iso) {
    let date = new Date(iso)
    let getMonth = date.getMonth() + 1
    let getDay = date.getDay() + 2

    let month = getMonth < 10 ? '0'+getMonth : getMonth
    let day = getDay < 10 ? '0'+getDay : getDay
    let hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours()
    let minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()

    let dateString = date.getFullYear() + '-' + month + '-' + day
    let timeString = hours + ':' + minutes
    return dateString + ' ' + timeString
}