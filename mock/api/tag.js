const express = require('express');
const router = express.Router();

router.get('/list', function (req, res) {
  res.json({
    code: '0',
    msg: '这是个tag/list测试接口',
    tagList: [
      {
        name: 'warning',
        id: '1'
      }
    ]
  })
})

module.exports = router;