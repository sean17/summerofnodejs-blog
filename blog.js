var blogit = require('blogit')
  , blog = blogit()

blog.on('listening', function () {
  console.log('Blog listening on ', blog.address())
})