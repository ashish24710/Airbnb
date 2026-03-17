const express = require("express");
const router = express.Router();

//post
//index 
router.get("/" ,(req,res)=> {
    res.send("get am postst");
});

//show 
router.get("/:id" ,(req,res)=> {
    res.send("get for a postsid");
});

//post
router.post("/" ,(req,res)=> {
    res.send("post for posts");
});

//delete
router.delete("/:id" ,(req,res)=> {
    res.send("delete for post");
});

module.exports = router;