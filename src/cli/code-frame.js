const codeFrame = require('@babel/code-frame')

const rawLines = `class Foo {
  constructor()
}`
const location = { start: { line: 2, column: 16 } }

const result = codeFrame.codeFrameColumns(rawLines, location, {
  /* options */
})

console.log(result)
