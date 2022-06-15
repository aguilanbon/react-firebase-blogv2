import { collection, getDoc, doc, where, query } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase-config'

function Blog({postId}) {
    let id = useParams(postId)
    
    useEffect(() => {
        const getById = async () => {
            const postRef = doc(db, 'posts', id.postId)
            const response = await getDoc(postRef)
            console.log(response.data());
        }
        getById()
    })

  return (
    <div className='blog-post__container'>
    </div>
  )
}

export default Blog