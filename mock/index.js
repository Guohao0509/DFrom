var tagRouter = require('./api/tag.js');

module.exports = function(app) {
  app.use('/api/tag', tagRouter)
}