import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth, storage } from '../firebase-config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { v4 } from 'uuid'

function Create({ isAuth, setIsActive }) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState(null)
    const [imageURL, setImgURL] = useState('')

    const postsCollection = collection(db, 'posts')

    const navigate = useNavigate()

    const createPost = async () => {
        setIsLoading(true)
        setIsActive('')
        try {
            await imageUpload()
            await addDoc(postsCollection, {
                title, content,
                author: {
                    name: auth.currentUser.displayName,
                    id: auth.currentUser.uid
                }, bannerURI: imageURL
            })
            navigate('/')

        } catch (error) {
            console.log(error);
        }
    }

    const imageUpload = async () => {
        if (image == null) return

        const imageRef = ref(storage, `blogBanners/${image.name + v4()}`)
        await uploadBytes(imageRef, image)
        const imgURI = await getDownloadURL(imageRef)
        setImgURL(imgURI)
    }

    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
    })

    return (
        <motion.div animate={{ x: [-150, 0] }} transition={{ duration: 1 }} className='create-container'>
            <div className="create-form-container">
                <form action="" onSubmit={e => {
                    e.preventDefault()
                    createPost()
                }}>
                    <input type="file" name="" id="" onChange={e => setImage(e.target.files[0])} />
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
