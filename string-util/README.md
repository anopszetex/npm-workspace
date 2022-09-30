## StringUtil
It's just a simple example

## Install
```
$ npm i @anopszetex/string-util
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

For more examples, check out the path: `string-util/index.test.js`
