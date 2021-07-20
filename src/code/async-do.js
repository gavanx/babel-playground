Promise.all([
  async do {
    const result = await fetch('https://example.com/A')
    await result.json()
  },
  async do {
    const result = await fetch('https://example.org/B')
    await result.json()
  },
]).then(([a, b]) => {
  console.log('example.com/A', a)
  console.log('example.org/B', b)
})
