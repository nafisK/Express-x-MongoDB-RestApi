const express = require('express')
const Post = require('../models/Post')
const router = express.Router()

// gets all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
})

// gets a single post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
  } catch (err) {
    res.json({ message: err })
  }
})

// submits a post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  })

  try {
    const savedPost = await post.save()
    res.json(savedPost)
  } catch {
    res.json({ message: 'Error saving post' })
  }
})

// deletes a post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId })
    res.json(removedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

// updates a post
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    )
    res.json(updatedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
