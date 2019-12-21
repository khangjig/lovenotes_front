import moment from 'moment'


export const convertDate = (date) => {
    var date = new Date(moment(date).format('YYYY/MM/DD'))
    var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ]

    var day = date.getDate()
    var monthIndex = date.getMonth()
    var year = date.getFullYear()

    return monthNames[monthIndex] + ' ' + day + ', ' + year
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
    if (str.length < 28) {
        return str
    }
    else {
        return str.substring(0, 28) + ' . . .'
    }
}