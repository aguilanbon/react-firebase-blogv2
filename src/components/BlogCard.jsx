import React from 'react'

function BlogCard({ title, content, author }) {
    return (
        <div className='blog-card'>
            <div className="card-container">
                {/* <div className="card-container__image">
                    <img src="../z.png" alt="" />
                </div> */}
                <div className="card-container__content">
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
                </div>
            </div>
        </div>
    )
}

export default BlogCard