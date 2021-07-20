const parser = require('@babel/parser')
const generate = require('@babel/generator').default

const code = 'class Example {}'
const ast = parser.parse(code)

const output = generate(
  ast,
  {
    /* options */
  },
  code
)

console.log(output)
