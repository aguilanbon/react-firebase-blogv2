import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'

function Create() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const postsCollection = collection(db, 'posts')

    let navigate = useNavigate()

    const createPost = async () => {
        await addDoc(postsCollection, {
            title, content,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            }
        })
        navigate('/')
    }

    return (
        <div className='create-container'>
            <h1>Add New Blog</h1>
            <div className="create-form-container">
                <form action="" onSubmit={e => {
                    e.preventDefault()
                    createPost()
                }}>
                    <label htmlFor="title">Blog Title</label>
                    <input type="text" name="title" id="" onChange={e => setTitle(e.target.value)} />
                    <label htmlFor="content">Content</label>
                    <textarea name="content" id="" cols="30" rows="15" onChange={e => setContent(e.target.value)}></textarea>
                    <input type="submit" value="Add Blog" />
                </form>
            </div>
        </div>
    )
}

export default Create
