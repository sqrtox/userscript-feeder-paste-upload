import { build, type BuildOptions } from 'esbuild';
import { stringify, type Metadata } from 'userscript-metadata';
import pkg from '~package.json';
import { readIcon } from '~/utils/readIcon';

(async () => {
  const metadata: Metadata = {
    name: 'Feeder - Paste Upload',
    'name:ja': 'Feeder - 貼り付けてアップロード',
    description: pkg.description,
    'description:ja': 'Feederチャットでクリップボードからファイルをアップロードするためのユーザースクリプトです。',
    version: pkg.version,
    icon: await readIcon('./src/assets/icon.ico'),
    match: 'https://*.x-feeder.info/*/',
    exclude: 'https://*.x-feeder.info/*/*/*',
    namespace: pkg.repository.url.replace(/^git\+|\.git$/, ''),
    author: pkg.author,
    license: pkg.license,
    grant: 'unsafeWindow'
  };

  const options: BuildOptions = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: 'browser',
    outfile: `dist/${pkg.name.replace(/^userscript-/, '')}.user.js`,
    banner: {
      js: stringify(metadata)
    }
  };

  await build(options).catch(err => {
    process.stderr.write(err.stderr);
    process.exit(1);
  });
})();
