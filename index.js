const PORT = process.env.FIREBASE_APP_PORT || 8080
const app = require('./app')

app.listen(PORT, () => {
  console.log(`App running on  localhost:${PORT}`)
})
