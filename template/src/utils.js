import moment from 'moment'
import {title as Title} from 'change-case'

export function formatTicketId(val) {
  const formatted = val.replace(/\D/g, '').slice(0,10)
  return (formatted.length >= 3) ? `${formatted.slice(0,2)}-${formatted.slice(2)}` : formatted
}

export function dateFormat(val, format) {
  return moment(val).format(format || 'MMM DD')
}

export function title(val) {
  return Title(val)
}
export default {
  formatTicketId,
  dateFormat,
  title,
}
