function parseMonth(date) {
    let getMonth = date.getMonth() + 1
    let month = getMonth < 10 ? '0' + getMonth : getMonth
    return month
}

function parseDay(date) {
    let getDay = date.getDay() + 1
    let day = getDay < 10 ? '0' + getDay : getDay
    return day
}

export function convertFullTime(iso) {
    let date = new Date(iso)

    let month = parseMonth(date)
    let day = parseDay(date)
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

    let dateString = date.getFullYear() + '-' + month + '-' + day
    let timeString = hours + ':' + minutes
    return dateString + ' ' + timeString
}

export function convertBriefTime(iso) {
    let milisec = new Date(iso).getTime()
    let ms = new Date().getTime() - milisec

    let ago = ' ago'
    let oneMinute = 60000
    let oneHour = 3600000
    let oneDay = 86400000
    let oneWeek = 604800000
    let oneMonth = 2629800000
    let oneYear = 31557600000

    if (ms < oneMinute) return 'just now'
    else if (ms < oneHour) return '' + Math.round(ms / oneMinute) + ' minutes' + ago
    else if (ms < oneDay) return '' + Math.round(ms / oneHour) + ' hours' + ago
    else if (ms < oneWeek) return '' + Math.round(ms / oneDay) + ' days' + ago
    else if (ms < oneMonth) return '' + Math.round(ms / oneWeek) + ' weeks' + ago
    else if (ms < oneYear) return '' + Math.round(ms / oneWeek) + ' months' + ago
    else return '' + Math.round(ms % oneYear) + ' years' + ago
}

export function convertDateOnly(iso) {
    let date = new Date(iso)

    let month = parseMonth(date)
    let day = parseDay(date)
    date.getMi

    return date.getFullYear() + '-' + month + '-' + day
}