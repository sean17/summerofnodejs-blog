var blogit = require('blogit')
  , blog = blogit({ port: 80 })

blog.on('listening', function () {
  console.log('Blog listening on ', blog.address())
})