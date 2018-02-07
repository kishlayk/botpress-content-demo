const _ = require('lodash')

module.exports = function(bp) {

  bp.hear(/GET_STARTED|hello|hi|test|hey|holla/i, (event, next) => {
    event.reply('#welcome')
  })

  bp.hear(/^question$/i, (event, next) => {
    bp.contentManager.listCategoryItems('trivia')
    .then(items => {
      const random = _.first(_.shuffle(items))
      event.reply('#!' + random.id)
    })
  })

  bp.hear(/TRIVIA_GOOD/i, (event, next) => {
    event.reply('#trivia-good')
  })

  bp.hear(/TRIVIA_BAD/i, (event, next) => {
    event.reply('#trivia-bad')
  })

  bp.fallbackHandler = (event, next) => {
    if (event.type === 'message' || event.type === 'text') {
      event.reply('#fallback')
    }
  }
}
