const { appEnv } = require('./main.config')

const config = {
  plugins: {
    autoprefixer: { overrideBrowserslist: ['last 2 versions'] }
  }
}

// Add css nano for production
if (appEnv === 'production') {
  config.plugins.cssnano = { preset: 'default' }
}

module.exports = config
