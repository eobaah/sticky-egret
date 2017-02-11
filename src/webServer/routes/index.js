const express = require( 'express' );
const router = express.Router();
const path = require( 'path' )
const { db, getAllPosts, getPost, createPost, editPost, deletePost } = require( '../../dataServices/database' )
const moment = require( 'moment' )


/* GET home page. */
// router.get('/', function(req, res, next) {
//   const pathToIndex = path.resolve(__dirname + '/../../../public/index.html')
//   console.log('path', pathToIndex);
//   res.sendFile(pathToIndex)
// })

router.get('/getPosts', function(req, res) {
  getAllPosts()
    .then( posts => {
      res.send({posts, normalizeDate: normalizeDate })
    })
})

router.get('/blogs', function(req, res, next) {
  getAllPosts()
    .then( posts => {
      res.render('index', {
        posts,
        title: 'MY BLOG'
      })
    })
})

const normalizeDate = (date) =>{
  return moment(date).format('MMMM Do YYYY')
}

router.post( '/create', ( req, res, next ) => {
  const post = req.body
  console.log("create post data",post);
  createPost(post)
    .then( () => res.redirect('/blogs'))
})

router.post( '/delete/:id', ( req, res, next ) => {
  const id = req.params.id
  deletePost( id )
    .then( () => res.redirect( '/' ) )
})

router.post( '/edit/:id', ( req, res, next ) => {
  const id  = req.params.id
  console.log("edit post data",req.params.id)
  const post  = req.body
  editPost( id, post )
  .then( () => {
    res.redirect( '/' )
  })
})


module.exports = router;
