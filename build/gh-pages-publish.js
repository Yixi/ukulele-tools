const ghPages = require('gh-pages')
const path = require('path')

ghPages.publish(path.resolve(__dirname, '../dist'), {
  user: {
    name: 'Deploy',
    email: 'deploy@deploy.com'
  }
}, err => {
  if (err) {
    console.error('publish fail')
    console.error(err)
    process.exit(1)
  } else {
    console.log('publish success')
    process.exit(0)
  }
})
