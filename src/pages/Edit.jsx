import React from 'react'

function Edit() {
  return (
    <div className='edit-page__container'>
        <div className="create-form-container">
            <form>
                <label htmlFor="image">Banner Image</label>
                <input type="file" name="image" id="" />
                <label htmlFor="title">Blog Title</label>
                <input type="text" name="title" id=""/>
                <label htmlFor="content">Content</label>
                <textarea style={{ whiteSpace: 'pre-wrap' }} name="content" id="" cols="30" rows="15"></textarea>
                <input type="submit" value='Update' />
            </form>
        </div>
    </div>
  )
}

export default Edit