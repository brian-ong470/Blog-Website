import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'


const PostItem = ({postID, category, tittle, description, authorID, thumbnail}) => {
    const shortenDescription= description.length > 145 ? description.substr(0,145) +'...': description;
    const postTittle= tittle.length > 50 ? tittle.substr(0,50) +'...': tittle;
  return (
    <article className="post">
        <div className="post__thumbnail">
            <img src={thumbnail} alt={tittle} />
        </div>
        <div className="post__content">
            <Link to={'/posts/${postID'}>
                <h3>{postTittle}</h3>
            </Link>
            <p>{shortenDescription}</p>
            <div className='post__footer'>
                <PostAuthor/>
                <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem
