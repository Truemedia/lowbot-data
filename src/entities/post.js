/**
  * @namespace post
  */
module.exports = {
  message: String,

  /**
    * One to many
    */
  author: ['user', 'posts']
};
