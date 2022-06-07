import React from 'react'

function BlogCard() {
  return (
    <div className='blog-card'>
        <div className="card-container">
            <div className="card-container__image">
                <img src="../z.png" alt="" />
            </div>
            <div className="card-container__content">
                <div className="card-container__content__title">
                    <h1>Zenitsu: Origins</h1>
                </div>
                <div className="card-container__content__body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, temporibus. Non, qui hic temporibus ipsum optio facere saepe alias earum sequi voluptates. Nesciunt, deserunt asperiores! Sequi in vel sapiente nam.
                    </p>
                </div>
                <div className="card-container__content__footer">
                    <p>By: Kamado Gonpachiro</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard