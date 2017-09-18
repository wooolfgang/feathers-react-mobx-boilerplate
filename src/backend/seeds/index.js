import fs from 'fs';
import path from 'path';

const seed = (fileName, index = 0, lastIndex = 0) => {
  const seedPath = path.join(process.cwd(), `src/backend/seeds/${fileName}.js`);
  const fileExists = fs.existsSync(seedPath);

  if (fileExists) {
    const seedFunction = require(`./${fileName}.js`);
    seedFunction()
      .then(() => console.log(`Seed for ${fileName} successful`))
      .catch(err => console.log(err, 'error'));
    if (index === lastIndex) {
      process.exit(0);
    }
  } else {
    console.log(`File ${fileName} does not exist.`);
    if (index === lastIndex) {
      process.exit(0);
    }
  }
};

const runSeeds = () => {
  const arg = process.argv[2];

  if (arg === 'all') {
    const excludedFiles = ['index.js'];
    const seedPath = path.join(process.cwd(), 'src/backend/seeds');
    const lastIndex = readdirSync(seedPath).length - 2;

    fs.readdirSync(seedPath).map((file, index) => {
      if (!excludedFiles.includes(file)) {
        const fileName = file.split('.')[0];
        seed(fileName, index, lastIndex);
      }
    });
  } else {
    seed(arg);
  }
};

runSeeds();
