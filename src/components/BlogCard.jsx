import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function BlogCard({ title, content, author, uri, postId }) {

    return (
        <motion.div whileHover={{ scale: 1.1 }} className='blog-card'>
            <Link style={cardStyle} to={`/blog/${postId}`}>
                <div className="card-container">
                    <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 2 }} className="card-container__image">
                        <img loading='lazy' src={uri} alt="" />
                    </motion.div>
                    <motion.div animate={{ x: [-150, 0], opacity: [0, 1] }} transition={{ duration: 2 }} className="card-container__content">
                        <div className="card-container__content__title">
                            <h1>{title}</h1>
                        </div>
                        <div className="card-container__content__body">
                            <p style={{ whiteSpace: 'pre-wrap' }}>
                                {content.substring(0, 100)}...
                            </p>
                        </div>
                        <div className="card-container__content__footer">
                            <p>By: {author.name}</p>
                        </div>
                    </motion.div>
                </div>
            </Link>
        </motion.div>
    )
}

const cardStyle = {
    textDecoration: 'none',
    color: 'black'
}

export default BlogCard