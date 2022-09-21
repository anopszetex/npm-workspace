import { deepStrictEqual } from 'node:assert'
import DateUtil from "./index.js"

{
  const format = 'dd-m-Y'
  const expected = { error: `Invalid date format: ${format}` }
  const date = new Date(1990, 2, 1)

  const result = DateUtil.formatDate(date, format)

  deepStrictEqual(result, expected)
}

{
  const expected = { error: 'Invalid date: 1' }
  const format = 'dd/mm/yyyy'
  const date = 1

  const result = DateUtil.formatDate(date, format)

  deepStrictEqual(result, expected)
}

{
  const expected = { error: 'Invalid date: 1990/12/01T00:00:00.000Z' }
  const format = 'dd/mm/yyyy'
  const date = '1990/12/01T00:00:00.000Z'

  const result = DateUtil.formatDate(date, format)

  deepStrictEqual(result, expected)
}

{
  const expected = '01-12-1990'
  const format = 'dd-mm-yyyy'
  const date = new Date('1990-12-01')

  const result = DateUtil.formatDate(date, format)

  deepStrictEqual(result, expected)
}

{
  const expected = '01.12.1990'
  const format = 'dd.mm.yyyy'
  const date = new Date('1990.12.01')

  const result = DateUtil.formatDate(date, format)

  deepStrictEqual(result, expected)
}

{
  const expected = '01/12/1990'
  const format = 'dd/mm/yyyy'
  const date = new Date('1990.12.01')

  const result = DateUtil.formatDate(date, format)

  deepStrictEqual(result, expected)
}

{
  const expected = '2022-09-20'
  const format = 'yyyy-mm-dd'
  const date = new Date('2022-09-20')

  const result = DateUtil.formatDate(date, format)

  deepStrictEqual(result, expected)
}

{
  const expected = '2022/09/20'
  const format = 'yyyy/mm/dd'
  const date = new Date('2022-09-20')

  const result = DateUtil.formatDate(date, format)

  deepStrictEqual(result, expected)
}

{
  const expected = '2022.09.20'
  const format = 'yyyy.mm.dd'
  const date = new Date('2022-09-20')

  const result = DateUtil.formatDate(date, format)

  deepStrictEqual(result, expected)
}

// FormatString
{
  const expected = { error: 'Your text is empty' }
  const date = ''
  const result = DateUtil.formatString(date)

  deepStrictEqual(result, expected)
}

{
  
  const date = {
    value: '1990-april-01',
    format: 'yyyy-M-dd'
  }

  const expected = { error: `The format ${date.format} is not available yet` }

  const result = DateUtil.formatString(date.value, date.format)

  deepStrictEqual(result, expected)
}

{
  
  const date = {
    value: '1990-01-01',
    format: 'yyyy-mm-dd'
  }

  const expectedFormat = 'dd/M/yyyy'

  const expected = { error: `The format ${expectedFormat} is not available yet` }

  const result = DateUtil.formatString(date.value, date.format, expectedFormat)

  deepStrictEqual(result, expected)
}

{
  
  const date = {
    value: '1990-01-01',
    format: 'yyyy-mm-dd'
  }

  const expectedFormat = 'dd-mm-yyyy'
  const expected = '01-01-1990'
  
  const result = DateUtil.formatString(date.value, date.format, expectedFormat)

  deepStrictEqual(result, expected)
}

{
  
  const date = {
    value: '   1 9 9 0 - 0 7 - 0 1   ',
    format: 'yyyy/mm/dd'
  }

  const expectedFormat = 'dd/mm/yyyy'
  const expected = '01/07/1990'

  const result = DateUtil.formatString(date.value, date.format, expectedFormat)

  deepStrictEqual(result, expected)
}

{
  
  const date = {
    value: '   1 9 9 0 - 0 7 - 0 1   ',
    format: 'yyyy/mm/dd'
  }

  const expectedFormat = 'yyyy/mm/dd'
  const expected = '1990/07/01'

  const result = DateUtil.formatString(date.value, date.format, expectedFormat)

  deepStrictEqual(result, expected)
}

{
  
  const date = {
    value: '   1 9 9 0 - 0 7 - 0 1   ',
    format: 'yyyy-mm-dd'
  }

  const expectedFormat = 'yyyy-mm-dd'
  const expected = '1990-07-01'

  const result = DateUtil.formatString(date.value, date.format, expectedFormat)

  deepStrictEqual(result, expected)
}

{
  
  const date = {
    value: '   1 9 9 0 - 0 7 - 0 1   ',
    format: 'yyyy.mm.dd'
  }

  const expectedFormat = 'yyyy.mm.dd'
  const expected = '1990.07.01'

  const result = DateUtil.formatString(date.value, date.format, expectedFormat)

  deepStrictEqual(result, expected)
}