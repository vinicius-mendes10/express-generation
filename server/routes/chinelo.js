const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send("Só as chinela")
})

module.exports = router