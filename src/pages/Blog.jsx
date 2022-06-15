import { collection, getDoc, doc, where, query } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase-config'

function Blog({postId}) {
    let id = useParams(postId)

    const [blogPost, setBlogPost] = useState({})
    const [author, setAuthor] = useState('')

    useEffect(() => {
        const getById = async () => {
            const postRef = doc(db, 'posts', id.postId)
            const response = await getDoc(postRef)
            setBlogPost(response.data())
        }
        getById()
    },[])

    console.log(blogPost);

  return (
    <div className='blog-post__container'>
        <div className="blog-post__content">
            <div className="blog-post__content__image">
                <img src={blogPost.imageURL} alt="" />
            </div>
            <div className="blog-post__content__title">
                <h1>{blogPost.title}</h1>
            </div>
            <div className="blog-post__content__author">
                {/* <p>{blogPost.author}</p> */}
            </div>
            <div className="blog-post__content__body">
                <p>{blogPost.content}</p>
            </div>
        </div>
                <div className="blog-post__actions">
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default Blog