## DateUtil
It's just a simple example

### Install
```
$ npm i @anopszetex/date-util
```

### Usage

```js
import DateUtil from '@anopszetex/date-util';

{
 const format = 'dd-m-Y'
 const date = new Date(1990, 2, 1)

 const result = DateUtil.formatDate(date, format) //=> { error: 'Invalid date format: dd-m-Y' }
}

{
 const format = 'dd/mm/yyyy'
 const date = 1

 const result = DateUtil.formatDate(date, format) //=> { error: 'Invalid date: 1' }
}

{
 const format = 'dd/mm/yyyy'
 const date = '1990/12/01T00:00:00.000Z'
 
 const result = DateUtil.formatDate(date, format) //=> { error: 'Invalid date: 1990/12/01T00:00:00.000Z' }
}

{
  const format = 'dd-mm-yyyy'
  const date = new Date('1990-12-01')

  const result = DateUtil.formatDate(date, format) // => '01-12-1990' is valid
}

{
  const format = 'dd/mm/yyyy'
  const date = new Date('1990.12.01')

  const result = DateUtil.formatDate(date, format) //=> '01/12/1990' is valid
}

{
  const date = {
    value: '   1 9 9 0 - 0 7 - 0 1   ',
    format: 'yyyy.mm.dd'
  }

  const expectedFormat = 'yyyy.mm.dd'
  
  const result = DateUtil.formatString(date.value, date.format, expectedFormat) // => '1990.07.01'
}
```
### API

### DateUtil.formatDate(date: Date, format: string)
Format a date to a given format

### DateUtil.formatString(dateStr: string, currentFormat: string, expectedFormat: string)
Format a date string to a given format

| Available Formats |
| ------------------|
| dd/mm/yyyy        |
| dd-mm-yyyy        |
| dd.mm.yyyy        |
| yyyy-mm-dd        |
| yyyy/mm/dd        |
| yyyy.mm.dd        |

For more examples, check out the path: `date-util/index.test.js`
