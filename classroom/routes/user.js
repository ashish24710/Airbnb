const express = require("express");
const router = express.Router();
//index -users
router.get("/" ,(req,res)=> {
    res.send("get am root");
});

//show - users
router.get("/:id" ,(req,res)=> {
    res.send("get for a users id");
});

//post -user
router.post("/" ,(req,res)=> {
    res.send("post for user");
});

//delete usere
router.delete("/:id" ,(req,res)=> {
    res.send("delete for user");
});

module.exports = router;