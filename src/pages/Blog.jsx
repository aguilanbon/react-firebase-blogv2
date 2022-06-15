import React from 'react'
import { useParams } from 'react-router-dom'

function Blog({id}) {
    let blogId = useParams(id)

  return (
    <div className='blog-post__container'>
    </div>
  )
}

export default Blog