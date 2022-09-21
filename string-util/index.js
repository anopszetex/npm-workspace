export default class StringUtil {
  static removeEmptySpaces(str) {
    return str.replace(/\s/g, '')
  }

  static isEmpty(str) {
    if(typeof str !== 'string') {
      return true
    }

    return !str.trim().length
  }
}