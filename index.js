const addSubscriber = require("./lib/db-write");
const getSubscribers = require("./lib/db-read");

addSubscriber({
  email: "subscriber@example.com",
  verified: false,
  date: new Date().toISOString(),
}).then(() => console.log("New subscriber added to the mailing list"));

getSubscribers()
  .then((value) => {
    console.log("Retrieved Values:")
    console.log(value);
  })
  .catch((error) => {
    console.error("An error occured")
    console.error(error);
  });
