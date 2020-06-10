const db = require("./db");
const ref = db.ref();
const mailingList = ref.child("MailingList");

function getSubscribers() {
  return new Promise((resolve, reject) => {
    mailingList.on(
      "value",
      (snapshot) => resolve(snapshot.val()),
      (err) => reject(err)
    );
  });
}

module.exports = getSubscribers;
