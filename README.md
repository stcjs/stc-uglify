# stc-uglify

Use [UglifyJS](https://github.com/mishoo/UglifyJS2) to compress JavaScript

## How to use

```js
//stc.config.js

import stcUglify from 'stc-uglify';

stc.workflow({
  jsCompress: {plugin: stcUglify, include: /\.js$/, options: {}}
});

```