const express = require("express")
const router = express.Router()
const {static,alluser,login,register,update,userdelete,apiinfo} = require('../controller/controller')

router.get("/static_users",static)
router.get("",apiinfo)
router.get("/users",alluser)
router.post("/login",login)
router.post("/register",register)
router.patch("/update/:id",update)
router.post("/register",register)
router.delete('/delete/:id',userdelete)


module.exports = router
