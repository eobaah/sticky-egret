const express = require( 'express' );
const router = express.Router();
const path = require( 'path' )
const { getAllPosts } = require( '../database' )
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

module.exports = router;
