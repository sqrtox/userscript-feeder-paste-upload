import { build, type BuildOptions } from 'esbuild';
import { stringify, type Metadata } from 'userscript-metadata';
import pkg from '~package.json';

const metadata: Metadata = {
  name: 'Feeder - Paste Upload',
  'name:ja': 'Feeder - 貼り付けてアップロード',
  description: pkg.description,
  'description:ja': 'Feederチャットでクリップボードからファイルをアップロードするためのユーザースクリプトです。',
  version: pkg.version,
  icon: 'data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQ/wQAUP8GAAAAAAAAAAAASv4qAD//dgBL/qoBUf+yAFD/jwBQ/koAUP8FAAAAAABQ/wQAUP8FAE/+AABQ/wUAAAAAAAAAAAAAAAAATP9wA1L/6x5k//8LV//+AE3+/gBP//8AUP//AFD/qwBQ/h4AAAAAAAAAAAAAAAAAT/+UAFD+gQBQ/1kATv+MAEj//hxj//+rxf//SIH//wBF//8ATv//AE/+/wBQ//8AUP+8AFD/XQBQ/3EAUP+NAE/+aQBP/3wAUP+uAE7+/wBH//8tb//+3uj//l+R//8AQP7/AEn//gBO/v4AUP7/AFD//wBQ/tMAUP+HAE//eQBQ/jcAUP4uAE//mgBO/v8AR///K23//tTi//9YjP/+AD3//gBG//8ATf7/AFD+/wBQ//8AUP/KAE/+UABP/i0AUP+OAFD/gABQ/8kAT///AEf+/iBm///W4//+1+P//5q6/v+Utf/+Pnr+/gBK/v8ATv7/AFD/7wBQ/5kAUP5/AFD/EwBQ/wQAUP+OAE/+/wBH//8iZ//+0+H//sLV/v+Wt/7/ia7//ips//8ASP//AE7+/wBQ/tgAT/8yAFD/AAAAAAAAT/4SAFD+uwBO//8ARv//Km3//9zn//5+pv//F2D+/y5v//4rbf//BFL+/wBO/v8AT//zAE/+TwAAAAAAAAAAAFD+hwBP/v8AT/7/AEf//xZf/v7B1f/+5+7+/rrQ/v/P3v/+l7j+/ghW/v4ASv7/AE/+/wBQ/9MAUP4nAFD+LgBQ/98AT/7/AE/+/wBN//4AT///OHb//2CS/v9pmP7/Voz//x9l/v8ATP7+AE7+/gBP//8AT/7/AFD/aQBQ/0kAUP//AFD//wBQ//4AUP//AE///wBI//8ARf//AEb//wBG//8ASv7/AFD+/wBQ//4AUP//AFD//wBQ/5cAT/5NAFD//wBQ//8AUP//AFD//wBP//kAT/6AAE//ZgBP/3AAT/5pAE//xgBQ//8AUP//AFD+/wBQ//8AUP+eAFD/OABP/+sAUP7/AFD//wBQ/+YAT/5iAAAAAAAAAAAAAAAAAAAAAABQ/ygAUP+4AE/+/wBQ//8AUP//AFD/eABQ/w4AT/6BAFD+vABQ/3gAT/4nAAAAAAAAAAAAUP8FAE//AwBQ/wIAAAAAAFD/DABP/lYAT/+mAE/+tQBQ/jEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP4/AAD4DwAAIAYAAMABAADAAwAAAAEAAMADAADAAwAAgAEAAIABAACAAAAAgcAAAIfhAACf+QAA//8AAA==',
  match: 'https://*.x-feeder.info/*',
  homepage: 'https://greasyfork.org/ja/users/297030',
  author: pkg.author,
  license: pkg.license,
  grant: 'unsafeWindow'
};

const options: BuildOptions = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'browser',
  outfile: 'dist/feeder-paste-upload.user.js',
  banner: {
    js: stringify(metadata)
  }
};

build(options).catch(err => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
