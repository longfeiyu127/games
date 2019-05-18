const dev_env = {
  'process.env.NODE_ENV': JSON.stringify('development')
}

const test_env = {
  'process.env.NODE_ENV': JSON.stringify('test')
}

const pro_env = {
  'process.env.NODE_ENV': JSON.stringify('production')
}

module.exports = process.env.DEV ? dev_env : process.env.TEST ? test_env : pro_env