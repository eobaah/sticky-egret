import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import FontAwesome from 'react-fontawesome'
import moment from 'moment'


import NavBar from './NavBar.jsx'
import MainBlog from './MainBlog.jsx'
import Sidebar from './Sidebar.jsx'
import ModalEditPost from './ModalEditPost.jsx'


export default class App extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      blogs: [],
    }
  }

  componentWillMount() {
    this.getTheBlogs()
  }


  getTheBlogs() {
    fetch('http://localhost:3000/getPosts', {
      method: 'get',
    })
      .then( response => response.json())
      .then( posts => {
        let initialPosts = posts.posts
        initialPosts = initialPosts.map( post => {
          const normalizedDate = normalizeDate(post.post_date)
          post.post_date = normalizedDate
          return post
        })
        this.setState({
          blogs: initialPosts
        })
      })
      const normalizeDate = (date) =>{
        return moment(date).format('MMMM Do YYYY')
      }
  }

  render() {
    let blogTitles = this.state.blogs.map( post =>
      <div key={post.id} className="mainBlogs">
        <MainBlog className="mainBlog" post={post} />
      </div>
    )
    return (
      <div className="topContainer">
        <NavBar className="NavBar"/>
        <div className="blogContainer">
            <div>{blogTitles}</div>
          <Sidebar />
        </div>
      </div>
    )
  }
}
