const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Example 1",
    "postContent": "This is an example post 1!",
    "userId": 1
  },
  {
    "postTitle": "Example 2",
    "postContent": "This is an example post 2!",
    "userId": 2
  },
  {
    "postTitle": "Example 3",
    "postContent": "This is an example post 3!",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;