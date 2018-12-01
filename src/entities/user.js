/**
  * @namespace user
  */
module.exports = {
  name: String,

  // Following and followers are inversely related (many-to-many).
  following: [Array('user'), 'followers'],
  followers: [Array('user'), 'following'],

  /**
    * Many to one
    */
  posts: [Array('post'), 'author'],
  profiles: [Array('profile'), 'identity']
};
