const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})
 
nextraConfig = withNextra({
  output: 'export'
})

delete nextraConfig.rewrites
module.exports = nextraConfig
