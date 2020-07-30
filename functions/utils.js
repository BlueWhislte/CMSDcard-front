export function convertTime(iso) {
    let date = new Date(iso)

    let month = date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth()
    let day = date.getDay() < 10 ? '0'+date.getDay() : date.getDay()
    let hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours()
    let minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()

    let dateString = date.getFullYear() + '-' + month + '-' + day
    let timeString = hours + ':' + minutes
    return dateString + ' ' + timeString
}