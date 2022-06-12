const express = require('express');
const router = express.Router();
router.use(express.json());
const blogs = [];
router.post("/" ,(req,res , next) => {
    const {name} = req.body;
    if(!name || name.length<4){
        return res.status(400).send("invalid blog sorry");
    }
    blogs.push(name);
    console.log({blogs});
    res.status(200).send(`${name} successfully added`)
})
router.get('/',(req,res, next) => {
    res.status(200).send({blogs});
})
router.get("/:blogId",(req,res, next) => {
    const {blogId}= req.params;
    const result = blogs[blogId];
    if(!result){
        return res.status(200).send("invalid id no");
    }
    res.status(200).send({blogs: result});
})
router.put("/:blogId", (req, res, next) => {
    const {name} = req.body;
    const {blogId} = req.params;
    const result = blogs[blogId];
    if(!result){
        return res.status(400).send("wrong index no");
    }
    blogs[blogId] = name;
    res.status(200).send({blogs});
    console.log({blogs})
})
router.delete('/:blogId', (req,res, next) =>{
    const {name} = req.body;
    const {blogId} = req.params;
    const result = blogs[blogId];;
    if(!result){
        return res.status(400).send("wrong index nubmer sorry");
    }
    blogs.splice(blogId, 1);
    res.status(200).send({blogs});
})
module.exports = router;

