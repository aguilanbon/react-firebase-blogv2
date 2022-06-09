import React from 'react'
import { motion } from 'framer-motion'

function BlogCard({ title, content, author, uri }) {
    return (
        <motion.div whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className='blog-card'>
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