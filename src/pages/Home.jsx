import React from 'react'
import BlogCard from '../components/BlogCard'

function Home() {
  return (
    <div className='home-container'>
      <h1 style={{ marginTop: '1em', opacity: '.8' }}>Welcome</h1>
      <BlogCard />
      <BlogCard />
    </div>
  )
}

export default Home