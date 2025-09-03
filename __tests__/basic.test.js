```js
const { getModulePaths } = require('../src/utils/paths');
const fs = require('fs');

test('getModulePaths returns correct structure', () => {
  const paths = getModulePaths('/myapp', 'TestModule');
  expect(paths.js).toContain('modules/TestModule/src');
  expect(paths.ios).toContain('modules/TestModule/ios');
});