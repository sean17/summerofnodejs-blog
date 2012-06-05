var blogit = require('blogit')
  , blog = blogit({ port: process.argv[2] || 80 })

blog.on('listening', function () {
  console.log('Blog listening on ', blog.address())
})