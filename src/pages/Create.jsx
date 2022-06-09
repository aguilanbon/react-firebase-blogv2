import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Create({ isAuth }) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const postsCollection = collection(db, 'posts')

    const navigate = useNavigate()

    const createPost = async () => {
        setIsLoading(true)
        await addDoc(postsCollection, {
            title, content,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            }
        })
        navigate('/')
    }

    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
    })


    return (
        <motion.div animate={{ x: [-150, 0] }} transition={{ duration: 1 }} className='create-container'>
            {/* <h1>Add New Blog</h1> */}
            <div className="create-form-container">
                <form action="" onSubmit={e => {
                    e.preventDefault()
                    createPost()
                }}>
                    <label htmlFor="title">Blog Title</label>
                    <input type="text" name="title" id="" onChange={e => setTitle(e.target.value)} />
                    <label htmlFor="content">Content</label>
                    <textarea style={{ whiteSpace: 'pre-wrap' }} name="content" id="" cols="30" rows="15" onChange={e => setContent(e.target.value)}></textarea>
                    <input type="submit" value={isLoading === true ? 'posting...' : 'post'} />
                </form>
            </div>
        </motion.div>
    )
}

export default Create
