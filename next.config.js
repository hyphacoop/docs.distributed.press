const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})
 
nextraConfig = withNextra({
  output: 'export',
  images: {
    unoptimized: true,
  }
})

console.log(nextraConfig.rewrites.toString())

delete nextraConfig.rewrites
module.exports = nextraConfig
