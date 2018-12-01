/**
  * @namespace post
  */
module.exports = {
  network: String,
  nid: String,
  username: String,

  /**
    * One to many
    */
  identity: ['user', 'profiles']
};
