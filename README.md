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
 const result = StringUtil.removeEmptySpaces(' H e l l o W o r l d ') //=> HelloWorld
}
```
