require('dotenv').config()
const PORT = process.env.FIREBASE_APP_PORT || 8000
const app = require('./app')

app.listen(PORT, () => {
  console.log(`App running on  localhost:${PORT}`)
})
