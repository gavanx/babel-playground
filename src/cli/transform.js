const babel = require('@babel/core')

const out = babel.transformSync('code', {})

console.log(out)
