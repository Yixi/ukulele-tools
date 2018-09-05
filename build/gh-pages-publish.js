const ghPages = require('gh-pages')
const path = require('path')

ghPages.publish(path.resolve(__dirname, '../dist'), err => {
  if (err) {
    console.error('publish fail')
    console.error(err)
    process.exit(0)
  } else {
    console.log('publish success')
  }
})
