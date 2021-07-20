module.exports = () => {
  return {
    visitor: {
      Identifier(path, state) {
        // console.log('dummy', path.node)
      },
    },
  }
}
