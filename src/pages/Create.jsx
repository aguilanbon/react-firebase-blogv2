import React, { useEffect, useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, auth, storage } from '../firebase-config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { v4 } from 'uuid'
import { useContext } from 'react'
import BlogContext from '../BlogContext'
// import toast from 'react-hot-toast'

function Create() {

    const { isAuth, setIsActive } = useContext(BlogContext)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState(null)
    const [createError, setCreateError] = useState('')

    let imgURL = ''

    const postsCollection = collection(db, 'posts')

    const navigate = useNavigate()

    const createPost = async () => {
        setIsLoading(true)
        setIsActive('')
        try {
            if (title === '' || content === '') {
                setCreateError('Blog must have both a title and content')
                setIsLoading('post')
            }
            else if (title && content) {
                await imageUpload()
                await addDoc(postsCollection, {
                    title, content, imageURL: imgURL, createdAt: serverTimestamp(),
                    author: {
                        name: auth.currentUser.displayName,
                        id: auth.currentUser.uid
                    }
                })
                // toast.promise(response, {
                //     loading: 'Loading',
                //     success: 'Got the data',
                //     error: 'Error when fetching',
                // });
                navigate('/')
            }

        } catch (error) {
            console.log(error);
        }
    }

    const imageUpload = async () => {
        if (image == null) return
        const imageRef = ref(storage, `blogBanners/${image.name + v4()}`)
        await uploadBytes(imageRef, image)
        const imgURI = await getDownloadURL(imageRef)
        imgURL = imgURI
    }

    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
    })

    return (
        <motion.div animate={{ x: [-150, 0] }} transition={{ duration: 1 }} className='create-container'>
            {createError === '' ? '' : <p className='create-error'>{createError}</p>}
            <div className="create-form-container">
                <form action="" onSubmit={e => {
                    e.preventDefault()
                    createPost()
                }}>
                    <label htmlFor="title">Blog Title</label>
                    <input type="text" name="title" id="" onChange={e => setTitle(e.target.value)} />
                    <label htmlFor="content">Content</label>
                    <textarea style={{ whiteSpace: 'pre-wrap' }} name="content" id="" cols="30" rows="15" onChange={e => setContent(e.target.value)}></textarea>
                    <label htmlFor="image">Upload an image for your blog</label>
                    <input type="file" name="image" id="" onChange={e => setImage(e.target.files[0])} />
                    <input type="submit" value={isLoading === true ? 'posting...' : 'post'} />
                </form>
            </div>
        </motion.div>
    )
}

export default Create
