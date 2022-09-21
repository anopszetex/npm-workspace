import StringUtil from "@anopszetex/string-util"

const availableFormats = {
  'dd/mm/yyyy': '$<day>/$<month>/$<year>',
  'dd-mm-yyyy': '$<day>-$<month>-$<year>',
  'dd.mm.yyyy': '$<day>.$<month>.$<year>',
  'yyyy-mm-dd': '$<year>-$<month>-$<day>',
  'yyyy/mm/dd': '$<year>/$<month>/$<day>',
  'yyyy.mm.dd': '$<year>.$<month>.$<day>',
}

const FORMAT_YYYY_MM_DD = /(?<year>\d{4}).(?<month>\d{2}).(?<day>\d{2})/g
const FORMAT_DD_MM_YYYY = /(?<day>\d{2}).(?<month>\d{2}).(?<year>\d{4})/g


const stringToDateExps = {
  'dd/mm/yyyy': FORMAT_DD_MM_YYYY,
  'dd-mm-yyyy': FORMAT_DD_MM_YYYY,
  'dd.mm.yyyy': FORMAT_DD_MM_YYYY,
  'yyyy-mm-dd': FORMAT_YYYY_MM_DD,
  'yyyy/mm/dd': FORMAT_YYYY_MM_DD,
  'yyyy.mm.dd': FORMAT_YYYY_MM_DD
}

export default class DateUtil {
  static formatDate(date, format ) {
    if(!Object.keys(availableFormats).includes(format)) {
      return { error: `Invalid date format: ${format}` }
    }

    if(!(date instanceof Date)) {
      return { error: `Invalid date: ${date}` }
    }

    const exp = availableFormats[format]

    const [result] = date.toISOString().match(FORMAT_YYYY_MM_DD)
    
    return result.replace(FORMAT_YYYY_MM_DD, exp)
  }

  static formatString(dateStr, currentFormat, expectedFormat) {
    if(StringUtil.isEmpty(dateStr)) {
      return { error: 'Your text is empty' }
    }

    if(!Object.keys(availableFormats).includes(currentFormat)) {
      return { error: `The format ${currentFormat} is not available yet` }
    }

    if(!Object.keys(availableFormats).includes(expectedFormat)) {
      return { error: `The format ${expectedFormat} is not available yet` }
    }

    const toDateExp = stringToDateExps[currentFormat]

    const dateStringInISO = StringUtil
      .removeEmptySpaces(dateStr)
      .replace(toDateExp, '$<year>-$<month>-$<day>')

    const finalDate = new Date(dateStringInISO)

    return this.formatDate(finalDate, expectedFormat)
  }
}