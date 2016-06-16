# stc-uglify

Use [UglifyJS](https://github.com/mishoo/UglifyJS2) to compress JavaScript


## Install

```sh
npm install stc-uglify
```

## How to use

```js
//stc.config.js

import uglify from 'stc-uglify';

stc.workflow({
  jsCompress: {plugin: uglify, include: /\.js$/, options: {}}
});

```