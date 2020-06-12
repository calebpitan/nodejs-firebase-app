const admin = require("firebase-admin")

const serviceAccount = require("../secret/serviceAccountKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://thecathedralapp-ed7f8.firebaseio.com",
})

const db = admin.database()

module.exports = db
