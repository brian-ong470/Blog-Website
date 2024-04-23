import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Avatar1 from '../images/avatar1.png'
import Avatar2 from '../images/avatar2.png'
import Avatar3 from '../images/avatar3.png'
import Avatar4 from '../images/avatar4.png'

const authorsData =[
  {id:1, avatar:Avatar1, name:'Psyduck', posts:3},
  {id:2, avatar:Avatar2, name:'Purple', posts:2},
  {id:3, avatar:Avatar3, name:'Fairy Fog', posts:1},
  {id:4, avatar:Avatar4, name:'Fire Dinasour', posts:0},
]

const Authors = () => {
  const [authors,setAuthors]=useState(authorsData)
  return (
    <section className='authors'>
      {authors.length >0 ? <div className="container authors__container">
        {
          authors.map(({id, avatar,name,posts})=>{
            return <Link key={id} to={`/posts/users/${id}`} className="author">
              <div className="author__avatar">
                <img src={avatar}alt={`Images of ${name}`} />
              </div>
              <div className="author__infor">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
      </div>:<h2 className="center">No user/authors found.</h2>}
    </section>
  )
}

export default Authors
