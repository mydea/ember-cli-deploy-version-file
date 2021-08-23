const DeployPluginBase = require('ember-cli-deploy-plugin');
const fs = require('fs');
const path = require('path');

module.exports = {
  name: require('./package').name,

  createDeployPlugin(options) {
    let DeployPlugin = DeployPluginBase.extend({
      name: options.name,

      runAfter: ['build'],

      defaultConfig: {
        version(context) {
          return context.project.pkg.version;
        },
        fileName: 'version.json',
        propertyName: 'version',
      },

      build(context) {
        let version = this.readConfig('version');
        let fileName = this.readConfig('fileName');
        let propertyName = this.readConfig('propertyName');

        let outputPath = context.distDir;
        let outputFiles = context.distFiles;

        // If fileName is in a directory, ensure we create it first
        let folder = path.join(outputPath, path.dirname(fileName));
        fs.mkdirSync(folder, { recursive: true });

        fs.writeFileSync(
          path.join(outputPath, fileName),
          JSON.stringify({ [propertyName]: version }),
          'utf-8'
        );

        outputFiles.push(fileName);

        return { outputFiles };
      },
    });

    return new DeployPlugin();
  },
};
