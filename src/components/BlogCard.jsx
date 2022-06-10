import React from 'react'
import { motion } from 'framer-motion'
// import { doc, deleteDoc } from 'firebase/firestore'
// import { db, auth } from '../firebase-config'

function BlogCard({ title, content, author, uri }) {

    // const deletePost = async (id) => {
    //     await deleteDoc(doc(db, 'posts', id))
    //     console.log('click');
    // }

    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}
            className='blog-card'>
            <div className="card-container">
                <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 2 }} className="card-container__image">
                    <img loading='lazy' src={uri} alt="" />
                </motion.div>
                <motion.div animate={{ x: [-150, 0] }} transition={{ duration: 1 }} className="card-container__content">
                    <div className="card-container__content__title">
                        <h1>{title}</h1>
                    </div>
                    <div className="card-container__content__body">
                        <p style={{ whiteSpace: 'pre-wrap' }}>
                            {content}
                        </p>
                    </div>
                    <div className="card-container__content__footer">
                        <p>By: {author.name}</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default BlogCard