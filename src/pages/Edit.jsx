import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db, storage } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

function Edit({postId}) {

  let id = useParams(postId)
  let navigate = useNavigate()
  let imgURL = ''

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)
  const [imgLink, setImgLink] = useState('')
  const [buttonState, setButtonState] = useState(false)

  const updatePost = async () => {
      setButtonState(true)
      try {
        await imageUpload()
        const updateRef = doc(db, 'posts', id.postId)
            await updateDoc(updateRef, {
              title, content, imageURL : imgURL === '' ? imgLink : imgURL
        })
        navigate('/')

     } catch (error) {
      
     }
  }

  const imageUpload = async () => {
      if (image == null) return

      const currentObjURL = ref(storage, imgLink)
      const currentObjRef = ref(storage, currentObjURL.fullPath)
      await deleteObject(currentObjRef)

      const imageRef = ref(storage, `blogBanners/${image.name + v4()}`)
      await uploadBytes(imageRef, image)
      const imgURI = await getDownloadURL(imageRef)
      imgURL = imgURI
  }
  
  useEffect(() => {
    const getById = async () => {
        const postRef = doc(db, 'posts', id.postId)
        const response = await getDoc(postRef)
        setTitle(response.data().title)
        setContent(response.data().content)
        setImgLink(response.data().imageURL)
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
                <input type="file" name="image" id="" onChange={e => setImage(e.target.files[0])}/>
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