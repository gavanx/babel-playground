module.exports = () => {
  return {
    visitor: {
      Identifier(path, state) {
        console.log(path, state)
      },
    },
  }
}
