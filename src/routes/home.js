const {Router} = require('express')

const router = Router();

router.get("/home", (req, res) => {
    res.status(200).json({
        message : "hello world 123"
    })
})

module.exports = router;