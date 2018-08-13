// server/models/Article.js
const mongoose = require('mongoose')

const Twit = require("twit");
const config = {
  consumer_key: 'MWkqEZekUfQ94zKcEGlIBZQul',
  consumer_secret: 'Ew33hHqkbmg61pZEWK3XerC8WLXUJsPTh1lZcOE3iAUCY7YcLl',
  access_token_key: '2992999025-GVqxG5BDOk0gJrecdXtX5gCVP2pc7zJqD2eUwrk',
  access_token: '2992999025-GVqxG5BDOk0gJrecdXtX5gCVP2pc7zJqD2eUwrk',
  access_token_secret: 'vnHnDavzn8aYTL6TZagQGiiICqef4KFguestIJM54tKpX'
}

// let ArticleSchema = new Twit(config);
let ArticleSchema = new mongoose.Schema( config );
// function tweetStatus(message) {
//   var tweet = {
//     include_email: true
//   }
//   T.get('account/verify_credentials', tweet, tweeted)
//   function tweeted (err, data, response) {
//     if(err) {
//       console.log(err)
//     } else {
//       console.log('data', JSON.stringify(data))
//     }
//   }
// }
// tweetStatus()
// let ArticleSchema = new mongoose.Schema(
//     {
//         text: String,
//         title: String,
//         description: String,
//         feature_img: String,
//         claps: Number,
//         author: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'User'
//         },
//         comments: [
//             {
//                 author: {
//                     type: mongoose.Schema.Types.ObjectId,
//                     ref: 'User'
//                 },
//                 text: String
//             }
//         ]
//     }
// );
// ArticleSchema.methods.clap = function() {
//     this.claps++
//     return this.save()
// }
// ArticleSchema.methods.comment = function(c) {
//     this.comments.push(c)
//     return this.save()
// }
// ArticleSchema.methods.addAuthor = function (author_id) {
//     this.author = author_id
//     return this.save()
// }
// ArticleSchema.methods.getUserArticle = function (_id) {
//     Article.find({'author': _id}).then((article) => {
//         return article
//     })
// }
module.exports = mongoose.model('Article', ArticleSchema)