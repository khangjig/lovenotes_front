import moment from 'moment'


export const convertDate = (date) => {
    var thisDay = new Date(moment(date).format('YYYY/MM/DD'))
    var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ]

    dayTwo = Date.now()
    var range = (dayTwo - thisDay.getTime()) / (1000 * 3600 * 24)

    if (range <= 1) {
        return 'Today'
    }
    if (range <= 2 && range > 1) {
        return '1 day ago'
    }
    if (range <= 3 && range > 2) {
        return '2 day ago'
    }

    var day = thisDay.getDate()
    var month = thisDay.getMonth()
    var year = thisDay.getFullYear()

    return monthNames[month] + ' ' + day + ', ' + year
}

export const convertTitle = (str) => {
    if (str.length < 20) {
        return str
    }
    else {
        return str.substring(0, 20) + ' . . .'
    }
}

export const convertContent = (str) => {
    if (str.split("\n").length > 0) {
        let arrayStr = str.split("\n")
        if (arrayStr[0].length < 28) {
            return arrayStr[0] + ' . . .'
        }
        else {
            return arrayStr[0].substring(0, 28) + ' . . .'
        }
    }
    else

        if (str.length < 28) {
            return str
        }
        else {
            return str.substring(0, 28) + ' . . .'
        }
}

export const convertOnThisDay = (date) => {
    var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ]


    var thisDay = new Date(moment(date).format('YYYY/MM/DD'))
    var dayNow = new Date(Date.now())

    var dayDayNow = dayNow.getDate()
    var monthDayNow = dayNow.getMonth()
    var year = thisDay.getFullYear()

    var day = thisDay.getDate()
    var month = thisDay.getMonth()

    if (day - dayDayNow === 1 && monthDayNow === month) {
        return 'Tomorow'
    }
    if (day - dayNow === 2 && monthDayNow === month) {
        return 'Next 2 days'
    }
    if (day - dayNow === 3 && monthDayNow === month) {
        return 'Next 3 days'
    }
    return monthNames[month] + ' ' + day + ', ' + year
}