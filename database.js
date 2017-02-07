const promise = require( 'bluebird' )
const options = { promiseLib: promise}
const pgp = require( 'pg-promise' )( options )
const CONNECTION_STRING = `pg://${process.env.USER}@localhost:5432/sticky-egret-db`
const db = pgp( CONNECTION_STRING )

const getAllPosts = () =>
  db.any( "SELECT * FROM blogPosts ORDER BY post_date ASC")





module.exports = {db , getAllPosts}
