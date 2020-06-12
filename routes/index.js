const express = require("express");
const getPost = require("../firebase/read");
const writePost = require("../firebase/write");

const router = express.Router();

router.get("/post", async function (_req, res, _next) {
  try {
    const post = await getPost();
    res.setHeader("Content-Type", "application/json");
    res.send(post);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.get("/post/:id", async function (req, res, _next) {
  try {
    const { id } = req.params;
    const idIsNumber = !isNaN(parseInt(id))
    const withKey = !idIsNumber
    console.log(id, withKey, idIsNumber)
    const post = await getPost(withKey, id);

    res.setHeader("Content-Type", "application/json");
    res.send(post);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.post("/post", function (req, res) {
  const { title, message } = req.body;
  console.log(req.body);
  writePost({
    title,
    message,
  })
    .then((value) => {
      res.send({
        success: true,
        info: {
          key: value.key,
          data: {
            title,
            message,
          },
        },
      });
    })
    .catch((e) => {
      console.error(e);
      res.sendStatus(500);
    });
});

module.exports = router;
