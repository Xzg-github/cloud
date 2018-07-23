import { writeFile, copyFile, makeDir, copyDir, cleanDir} from './lib/fs';
import pkg from '../package.json';
import spawn from 'cross-spawn';

async function copy() {
  console.log('开始打包...');
  spawn.sync(
    'react-app-rewired',
    ['build'],
    { stdio: 'inherit' }
  );

  console.log('重组目录结构...');
  await makeDir('build/public');
  await copyDir('build', 'build/public');
  await cleanDir('build/*', {ignore: ['build/public']});
  await writeFile('build/package.json', JSON.stringify({
    private: true,
    engines: pkg.engines,
    dependencies: pkg.dependencies,
    scripts: {
      start: 'node server.js',
    },
  }, null, 2));
  await copyFile('src/server.js', 'build/server.js');
}

copy();

export default copy