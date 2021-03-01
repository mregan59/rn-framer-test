const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path')

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync(
        {
          ...env,
          babel: {
            dangerouslyAddModulePathsToTranspile: [
              // Ensure that all packages starting with @evanbacon are transpiled.
              '@ui-kitten',
            ],
          },
        },
        argv
      );
    return config;
};
