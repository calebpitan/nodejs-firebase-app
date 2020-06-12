const db = require("./database");
const { MESSAGE_ROOT } = require("../constants");

const ref = db.ref();
const post = ref.child(MESSAGE_ROOT);

function writePost(data) {
  return post.push(data);
}

module.exports = writePost;
