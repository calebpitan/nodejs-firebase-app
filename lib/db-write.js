const db = require("./db")
const ref = db.ref()
const mailingList = ref.child("MailingList")

function addSubscriber(data) {
  return mailingList.push(data)
}

module.exports = addSubscriber
