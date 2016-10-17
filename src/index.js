import Plugin from 'stc-plugin';
import {extend} from 'stc-helper';

let UglifyJS = null;
export default class JSCompressPlugin extends Plugin {
  /**
   * run
   */
  async run(){
    if(!UglifyJS){
      UglifyJS = require('uglify-js');
    }
    let content = await this.getContent('utf8');
    try{
      let {parser, uglify} = UglifyJS;
      let ast = parser.parse(content); 
      ast = uglify.ast_mangle(ast); // get a new AST with mangled names
      ast = uglify.ast_squeeze(ast); // get an AST with compression optimizations
      let ret = uglify.gen_code(ast); // compressed code here
      return {content: ret};
    } catch(e) {
      if(this.file.prop('virtual')) {
        e.message += (' ' + content);
      }
      return {err: e};
    }
   
  }
  /**
   * update
   */
  update(data){
    let {err} = data;
    if(err){
      return this.fatal(err.message, err.line, err.col);
    }
    this.setContent(data.content);
  }
  /**
   * default include
   */
  static include(){
    return /\.js$/i;
  }
  /**
   * use cluster
   */
  static cluster(){
    return true;
  }
  /**
   * use cache
   */
  static cache(){
    return true;
  }
}