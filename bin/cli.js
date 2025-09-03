#!/usr/bin/env node

const { Command } = require('commander');
const generate = require('../src/commands/generate');

const program = new Command();

program
  .name('react-native-module-gen')
  .description('CLI to generate React Native Turbo Native Modules')
  .version('0.1.0');

program
  .command('generate-component <name>')
  .alias('gc')
  .description('Generate a Fabric Native Component')
  .option('-p, --props <list>', 'Comma-separated props: text:string,width:number', '')
  .option('-e, --events <list>', 'Comma-separated events: onPress,onLoad', '')
  .option('--no-ios', 'Skip iOS')
  .option('--no-android', 'Skip Android')
  .action(async (name, options) => {
    const generateComponent = require('../src/commands/generate-component');
    await generateComponent(name, options);
  });

program.parse();