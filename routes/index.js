const express = require( 'express' );
const router = express.Router();
const path = require( 'path' )
const { db, getAllPosts, getPost, createPost, editPost, deletePost } = require( '../database' )
const moment = require( 'moment' )


/* GET home page. */
router.get('/', function(req, res, next) {
  getAllPosts()
    .then( posts => {
      res.render('index', {
        posts,
        title: 'MY BLOG',
        normalizeDate: normalizeDate
      });
    })
});

const normalizeDate = (date) =>{
  return moment(date).format('MMMM Do YYYY')
}

router.post( '/create', ( req, res, next ) => {
  const post = req.body
  createPost(post)
    .then( () => res.redirect('/'))
})

router.post( '/delete/:id', ( req, res, next ) => {
  const id = req.params.id
  console.log(req.params.id)
  deletePost( id )
    .then( () => res.redirect( '/' ) )
})

router.post( '/edit/:id', ( req, res, next ) => {
  const id  = req.params.id
  const post  = req.body
  editPost( id, post )
  .then( () => {
    res.redirect( '/' )
  })
})


module.exports = router;
