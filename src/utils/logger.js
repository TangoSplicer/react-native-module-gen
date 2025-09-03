const chalk = require('chalk');

exports.info = (msg) => console.log(chalk.blue('[INFO]'), msg);
exports.success = (msg) => console.log(chalk.green('[SUCCESS]'), msg);
exports.warn = (msg) => console.log(chalk.yellow('[WARN]'), msg);
exports.error = (msg) => console.log(chalk.red('[ERROR]'), msg);
exports.tip = (msg) => console.log(chalk.cyan('[TIP]'), msg);