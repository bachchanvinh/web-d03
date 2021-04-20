const posts = [
    {
        id: "1",
        title: "Nhung cuoc tinh chong vang",
        content: 'Khong co cuoc tinh nao ',
        author: "Unknow",
        time: "12:30 21/01/20",
        comment: [{
            person: "A",
            content: "Khong hieu"
        },
        {
            person: "B",
            content: "ok"
        }
        ]
    },
    {
        id: "2",
        title: "Hom nay la ngay moi",
        content: 'No comment ',
        author: "Unknow",
        time: "12:30 21/1/20",
        comment: [{
            person: "A",
            content: "Khong hieu"
        },
        {
            person: "B",
            content: "ok"
        }
        ]

    }, {
        id: "3",
        title: "Hom qua la ngay cu",
        content: 'No comment ',
        author: "Unknow",
        time: "12:30 21/1/20",
        comment: [{
            person: "A",
            content: "Khong hieu"
        },
        {
            person: "B",
            content: "ok"
        }
        ]
    }
]

module.exports.getPosts = (req, res) => {
    if (!posts) {
        return res.status(400).json({
            isSuccess: false,
            message: 'not found any post',
        })
    }
    res.status(200).json({
        isSuccess: true,
        message: 'success',
        posts: posts
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
    if (!newpost) {
        return res.status(400).json({
            isSuccess: false,
            message: "Cant find newpost",
            test: newpost
        })
    }
    newpost.id = `${posts.length + 1}`
    posts.push(newpost)
    return res.status(200).json({
        isSuccess: true,
        message: "Post susccesed",
        posts: posts
    })

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