// scripts/publish.js 未使用
const globby = require('globby');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const handlebars = require('handlebars');
const execa = require('execa');
const cwd = process.cwd();

const getPackagePath = () => {
  const packagePaths = globby.sync('../packages', {
    cwd: __dirname,
    onlyDirectories: true,
    deep: 1,
  });
  return packagePaths.map((item) => item.replace('../', ''));
};

const choosePackage = async (packages) => {
  const answer = await inquirer.prompt({
    type: 'checkbox',
    name: 'packages',
    message: '选择你要发布的包',
    choices: [...packages],
  });
  return answer;
};

const reWriteLerna = (packages) => {
  const jsonContent = fs.readFileSync(`${cwd}/lerna-template.txt`, 'utf-8');
  const jsonResult = handlebars.compile(jsonContent)(packages);
  fs.writeFileSync(`${cwd}/lerna.json`, jsonResult);
};

const publish = async () => {
  const packages = getPackagePath();
  const publishPackages = await choosePackage(packages);
  if (publishPackages.packages.length !== 0) {
    reWriteLerna(publishPackages);
    execa.commandSync('lerna publish', {
      stdio: 'inherit',
      cwd,
    });
  } else {
    console.log('没有选择包');
  }
};

publish();

// 作者：jjjona0215
// 链接：https://juejin.cn/post/7012622147726082055
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
