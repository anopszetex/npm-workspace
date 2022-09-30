# npm-workspace
Is an example using NPM Workspaces + Code Coverage with c8

## Install

### String-util
```
$ npm install @anopszetex/string-util
```

### Usage

```js
import StringUtil from '@anopszetex/string-util';

{
const result = StringUtil.isEmpty('') //=> true
}

{
 const result = StringUtil.isEmpty(1) //=> true
}

{
 const result = StringUtil.isEmpty('    ') //=> true
}

{
 const result = StringUtil.isEmpty('not_empty') //=> false
}

{
 const result = StringUtil.removeEmptySpaces(' H e l l o W o r l d ') //=> 'HelloWorld'
}
```
## API
### StringUtil.isEmpty(str: string)

Returns true if is empty, otherwise false

### StringUtil.removeEmptySpaces(str: string)

Remove space at begin string and end the string

## DateUtil
```
$ npm install @anopszetex/date-util
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
```
For more examples, check out the path: `date-util/index.test.js`
