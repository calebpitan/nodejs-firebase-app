const db = require("./database");
const { MESSAGE_ROOT } = require("../constants");

const ref = db.ref();
const post = ref.child(MESSAGE_ROOT);

/**
 * @param withKey whether to get posts with firebase auto-generated key
 * @param withKey the firebase auto-generated key
 */
function getPosts(withKey = false, key) {
  return new Promise((resolve, reject) => {
    post.on(
      "value",
      (snapshot) => {
        const oValue = snapshot.val()
        let value

        if (withKey && key !== null && key !== void 0) {
          // get single post by firebase auto-generated key
          value = oValue !== null ? oValue[key] : {}
          resolve(value)
          return
        } else if (!withKey && !isNaN(parseInt(key))) {
          // convert object to value array and get by index specified by `key` which is a number
          const values = oValue !== null ? Object.values(oValue) : null
          const id = parseInt(key) - 1
          value = values !== null && values[id] !== null ? values[id] : {}
          resolve(value)
          return
        }
        const values = oValue !== null ? Object.values(oValue) : []
        resolve(values)
      },
      (err) => reject(err)
    );
  });
}

module.exports = getPosts;
