const Post =require('../models/post.route')
module.exports.getPosts = (req, res) => {
   const post= await Post.find((err,doc)=>{
       if(err){
           return res.status(500).json({
               isSuccess:false,
               message:"Fail to load post"
           })
       }
       else{
           return res.status(200).json({
               isSuccess:true,
               message:'Successed',
               posts:doc
           })
       }
   })
}

module.exports.getPostById = (req, res) => {
    const { id } = req.params
    const post = posts.find(post => post.id === id)
    if (!post) {
        return res.status(400).json({
            isSuccess: false,
            message: 'not found the id post',
        })
    }
    return res.status(200).json({
        isSuccess: true,
        message: "Succesed",
        post: post
    })
}

module.exports.addPost = (req, res) => {
    const { newpost } = req.body
   

}
module.exports.updatePost = (req, res) => {
    const idPost = req.params
    const newupdate = req.body
    if (!idPost || !newupdate) {
        return res.status(400).json({
            isSuccess: false,
            message: "Cant be updated"
        })
    }
    let Postupdate = posts.find(post => post.id === idPost.id)
    for (let x in newupdate) {
        Postupdate[x] = newupdate[x]
    }
    return res.status(200).json({
        isSuccess: true,
        message: "Succeed",
       Postupdate
    })
}