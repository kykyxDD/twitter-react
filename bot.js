var Twit = require("twit");
var config = {
  consumer_key: 'MWkqEZekUfQ94zKcEGlIBZQul',
  consumer_secret: 'Ew33hHqkbmg61pZEWK3XerC8WLXUJsPTh1lZcOE3iAUCY7YcLl',
  access_token_key: '2992999025-GVqxG5BDOk0gJrecdXtX5gCVP2pc7zJqD2eUwrk',
  access_token: '2992999025-GVqxG5BDOk0gJrecdXtX5gCVP2pc7zJqD2eUwrk',
  access_token_secret: 'vnHnDavzn8aYTL6TZagQGiiICqef4KFguestIJM54tKpX'
}

console.log(config)

var T = new Twit(config);
function tweetStatus(message) {
  var tweet = {
    screen_name: 'EuropaPlus'
  }
  T.get('users/show', tweet, tweeted)
  function tweeted (err, data, response) {
    if(err) {
      console.log(err)
    } else {
      console.log('data', JSON.stringify(data))
    }
  }
}
tweetStatus()