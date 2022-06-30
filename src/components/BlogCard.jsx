import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatePage from './AnimatePage'

function BlogCard({ title, content, author, uri, postId, createdAt }) {

    return (
        <AnimatePage>
            <motion.div whileHover={{ scale: 1.1 }} className='blog-card'>
                <Link style={cardStyle} to={`/blog/${postId}`}>
                    <div className="card-container">
                        <div className="card-container__image">
                            <img loading='lazy' src={uri} alt="" />
                        </div>
                        <div className="card-container__content">
                            <div className="card-container__content__title">
                                <h1>{title}</h1>
                                <p style={{ fontSize: '.8rem', opacity: '.7' }}>{createdAt ? `Posted on ${createdAt.toDate().toLocaleDateString()}` : ''}</p>
                            </div>
                            <div className="card-container__content__body">
                                <p style={{ whiteSpace: 'pre-wrap' }}>
                                    {content.substring(0, 100)}...
                                </p>
                            </div>
                            <div className="card-container__content__footer">
                                <p>By: {author.name}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </AnimatePage>
    )
}

const cardStyle = {
    textDecoration: 'none',
    color: 'black'
}

export default BlogCard