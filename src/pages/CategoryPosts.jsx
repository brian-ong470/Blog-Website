import React, { useState } from 'react'
import {DUMMY_POSTS} from '../data'
import PostItem from '../components/PostItem'

const CategoryPosts = () => {
  const [posts,setPosts]=useState(DUMMY_POSTS)
  return (
    <section >
        {posts.length >0 ? <div className="container posts__container">
        {
                posts.map(({id, thumbnail,category,tittle,desc,authorID}) => <PostItem key={id} postID={id} thumbnail={thumbnail} 
                category={category} tittle={tittle} description={desc} authorID={authorID} />)
            }
        </div> :<h2 className='center'>no posts found</h2>}
    </section>
  )
}

export default CategoryPosts