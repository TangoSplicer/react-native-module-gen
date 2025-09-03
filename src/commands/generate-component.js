const { ensureDir } = require('../utils/fs');
const { getProjectRoot, getModulePaths } = require('../utils/paths');
const logger = require('../utils/logger');
const ejs = require('ejs');
const fs = require('fs').promises;
const path = require('path');

module.exports = async function generateComponent(name, options) {
  const { props = '', events = '', ios = true, android = true } = options;
  const projectRoot = getProjectRoot();
  const modPaths = getModulePaths(projectRoot, name);

  const root = path.join(modPaths.root, 'components', name);
  const jsDir = path.join(root, 'src');
  const iosDir = path.join(root, 'ios');
  const androidDir = path.join(root, 'android');

  await ensureDir(jsDir);
  if (ios) await ensureDir(iosDir);
  if (android) await ensureDir(androidDir);

  const data = { name, props, events, hash: Date.now() };

  // Generate JS
  await renderTemplate('js/fabric-spec.js.ejs', path.join(jsDir, `Native${name}.js`), data);
  await renderTemplate('js/fabric-component.tsx.ejs', path.join(jsDir, `${name}.tsx`), data);

  // iOS
  if (ios) {
    await renderTemplate('ios/FabricView.swift.ejs', path.join(iosDir, `${name}.swift`), data);
  }

  // Android
  if (android) {
    const pkgDir = path.join(androidDir, 'com/yourapp', name.toLowerCase());
    await ensureDir(pkgDir);
    await renderTemplate('android/FabricViewManager.kt.ejs', path.join(pkgDir, `${name}Manager.kt`), data);
    await renderTemplate('android/FabricPackage.kt.ejs', path.join(pkgDir, `${name}Package.kt`), data);
  }

  logger.success(`✅ Fabric Component "${name}" generated!`);
  logger.tip(`Add to your Podfile and MainApplication.java if needed.`);
};

// Reuse renderTemplate from generate.js
async function renderTemplate(templateName, outputPath, data) {
  const templatePath = path.join(__dirname, '..', 'templates', templateName);
  const template = await fs.readFile(templatePath, 'utf8');
  const content = ejs.render(template, data);
  await fs.writeFile(outputPath, content, 'utf8');
}