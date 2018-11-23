module.exports = {
  /**
    * @namespace user
    */
  user: {
    name: String,

    // Following and followers are inversely related (many-to-many).
    following: [ Array('user'), 'followers' ],
    followers: [ Array('user'), 'following' ],

    // Many-to-one relationship of user posts to post author.
    posts: [ Array('post'), 'author' ]
  },
  /**
    * @namespace post
    */
  post: {
    message: String,

    // One-to-many relationship of post author to user posts.
    author: [ 'user', 'posts' ]
  },
  /**
    * @namespace salutation
    */
  salutation: {
    name: String,
    tags: Array
  },
  /**
    * @namespace exchange
    */
  exchange: {
    name: String,
    barcode: String,
    qty: Number,
    prices: Array,
    tags: Array,
  }
};
