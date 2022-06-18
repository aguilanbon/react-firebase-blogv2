import { getDoc, doc, deleteDoc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { auth, db, storage } from '../firebase-config'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

function Blog({postId}) {
    let id = useParams(postId)
    const navigate = useNavigate()

    const [blogPost, setBlogPost] = useState({})
    const [author, setAuthor] = useState('')
    const [authUser, setAuthUser] = useState(null)


    const deletePost = async (pid) => {
        try {
            const getPath = ref(storage, blogPost.imageURL)
            const objRef = ref(storage, getPath.fullPath)
            if  (objRef.fullPath === '') {
                await deleteDoc(doc(db, 'posts', pid));
                toast.success('Your blog post was deleted.')
                navigate('/')
            } else {
                await deleteObject(objRef)
                await deleteDoc(doc(db, 'posts', pid));
                toast.success('Your blog post was deleted.', {duration: 4000})
                navigate('/')
            }
        } catch (error) {
            if(error.message === 'storage/object-not-found') {
                await deleteDoc(doc(db, 'posts', pid));
            }
        }
    }

    // const editPost = () => {
    // }

    useEffect(() => {
        const getById = async () => {
            try {
                const postRef = doc(db, 'posts', id.postId)
                const response = await getDoc(postRef)
                if(response._document !== null) {
                    setBlogPost(response.data())
                    setAuthor(response.data().author)
                    if(auth.currentUser === null) return
                    setAuthUser(auth.currentUser.uid)
                } else {
                    navigate('*')
                }

            } catch (error) {
                console.log(error);
            }
        }
        getById()
    },[id.postId, authUser, navigate])
    
  return (
    <div className='blog-post__container'>
        <div className="blog-post__content">
            <motion.div animate={{y: [-100, 0]}} className="blog-post__content__image">
                <img src={blogPost.imageURL} alt="" />
            </motion.div>
            <motion.div animate={{y: [100, 0], opacity: [0, 1]}} transition={{delay: 0.5}} className="blog-post__content__title">
                <h1>{blogPost.title}</h1>
            </motion.div>
            <motion.div animate={{y: [100, 0], opacity: [0, 1]}} transition={{delay: 1}} className="blog-post__content__author">
                <p>{author.name}</p>
            </motion.div>
            <motion.div animate={{y: [100, 0], opacity: [0, 1]}} transition={{delay: 1.5}} className="blog-post__content__body">
                <p>{blogPost.content}</p>
            </motion.div>
            {author.id === authUser ? 
                <div className="blog-post__actions">
                    <button id='edit-btn'>
                        <Link to={`/blog/edit/${id.postId}`}>Edit</Link>
                    </button>
                    <button id='del-btn' onClick={() => deletePost(id.postId)}>Delete</button>
                </div> : ''
            }
        </div>
    </div>
  )
}

export default Blog