import { getDoc, doc, deleteDoc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db, storage } from '../firebase-config'

function Blog({postId}) {
    let id = useParams(postId)

    const [blogPost, setBlogPost] = useState({})
    const [author, setAuthor] = useState('')

    let navigate = useNavigate()

    const deletePost = async (pid) => {
        
        try {
            const getPath = ref(storage, blogPost.imageURL)
            const objRef = ref(storage, getPath.fullPath)

            await deleteObject(objRef)
            await deleteDoc(doc(db, 'posts', pid));

            navigate('/')
        } catch (error) {
            if(error.message === 'storage/object-not-found') return
                await deleteDoc(doc(db, 'posts', pid));
        }
      
    }

    // const editPost = () => {
    // }

    useEffect(() => {
        const getById = async () => {
            const postRef = doc(db, 'posts', id.postId)
            const response = await getDoc(postRef)
            setBlogPost(response.data())
            setAuthor(response.data().author)
        }
        getById()
    },[id.postId])

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
                <p>{author.name}</p>
            </div>
            <div className="blog-post__content__body">
                <p>{blogPost.content}</p>
            </div>
            <div className="blog-post__actions">
                <button>Edit</button>
                <button onClick={() => deletePost(id.postId)}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Blog