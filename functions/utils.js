function parseMonth(date) {
    let getMonth = date.getMonth() + 1
    let month = getMonth < 10 ? '0' + getMonth : getMonth
    return month
}

function parseDay(date) {
    let getDay = date.getDate()
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

    let oneMinute = 60000
    let oneHour = 3600000
    let oneDay = 86400000
    let oneWeek = 604800000
    let oneMonth = 2629800000
    let oneYear = 31557600000

    if (ms < oneMinute) return '剛剛'
    else if (ms < oneHour) return '' + Math.floor(ms / oneMinute) + '分鐘前'
    else if (ms < oneDay) return '' + Math.floor(ms / oneHour) + '小時前'
    else if (ms < oneWeek) return '' + Math.floor(ms / oneDay) + '天前'
    else if (ms < oneMonth) return '' + Math.floor(ms / oneWeek) + '週前'
    else if (ms < oneYear) return '' + Math.floor(ms / oneWeek) + '個月前'
    else return '' + Math.floor(ms % oneYear) + '年前'
}

export function convertDateOnly(iso) {
    let date = new Date(iso)

    let month = parseMonth(date)
    let day = parseDay(date)

    return date.getFullYear() + '-' + month + '-' + day
}

export const themeColor = "#7BA23F"

export const violationCode = [
    "禁止不雅、侮辱、歧視及攻擊詞語",
    "禁止不雅、侮辱、歧視及攻擊詞語",
    "涉及毀謗他人之名譽",
    "不得指名或透漏任何學生的身份",
    "嚴禁張貼不正當的外部連結"
]