import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useNavigate } from 'react-router-dom'

function Edit({postId}) {
  let id = useParams(postId)
  let navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [buttonState, setButtonState] = useState(false)

  const updatePost = async () => {
      setButtonState(true)
      const updateRef = doc(db, 'posts', id.postId)
      await updateDoc(updateRef, {
        title, content
      })
      navigate('/')
  }
  
  useEffect(() => {
    const getById = async () => {
        const postRef = doc(db, 'posts', id.postId)
        const response = await getDoc(postRef)
        setTitle(response.data().title)
        setContent(response.data().content)
    }
    getById()
  },[id.postId])

  return (
    <div className='edit-page__container'>
        <div className="create-form-container">
            <form onSubmit={(e) => {
              e.preventDefault()
              updatePost()
            }}>
                <label htmlFor="image">Banner Image</label>
                <input type="file" name="image" id=""/>
                <label htmlFor="title">Blog Title</label>
                <input type="text" name="title" id="" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="content">Content</label>
                <textarea style={{ whiteSpace: 'pre-wrap' }} name="content" id="" cols="30" rows="15" defaultValue={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <input type="submit" value={buttonState ? 'Updating...' : 'Update' } disabled={buttonState} />
            </form>
        </div>
    </div>
  )
}

export default Edit