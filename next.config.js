const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

nextraConfig = withNextra({
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true
  }
})

delete nextraConfig.rewrites
module.exports = nextraConfig
