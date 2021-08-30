const template = (str, obj) => str.replace(/\$\{(.*?)\}/g, (_, key) => obj[key]);

console.log(template('我已经有${year}年${pos}开发经验了', { year: 1, pos: 'fe' }));
