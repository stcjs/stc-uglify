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


### 支持的配置
```
// 详细文档参考: https://github.com/mishoo/UglifyJS
// 部分配置需要参考代码
{
	strict_semicolons: false,

	mangle_options: {
		// angularjs --> mangle: false
		mangle       : true,
        toplevel     : false,
        defines      : null,
        except       : null,
        no_functions : false
	}, 
	squeeze_options: {
		make_seqs   : true,
        dead_code   : true,
        no_warnings : false,
        keep_comps  : true,
        unsafe      : false
	}, 
	gen_options: {
		indent_start : 0,
        indent_level : 4,
        quote_keys   : false,
        space_colon  : false,
        beautify     : false,
        ascii_only   : false,
        inline_script: false
	}
}
```