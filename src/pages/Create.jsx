import React from 'react'

function Create() {
    return (
        <div className='create-container'>
            <h1>Add New Blog</h1>
            <div className="create-form-container">
                <form action="">
                    <label htmlFor="title">Blog Title</label>
                    <input type="text" name="title" id="" />
                    <label htmlFor="content">Content</label>
                    <textarea name="content" id="" cols="30" rows="15"></textarea>
                    <input type="submit" value="Add Blog" />
                </form>
            </div>
        </div>
    )
}

export default Create
