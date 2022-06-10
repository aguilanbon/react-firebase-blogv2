import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase-config'

function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const postsCollection = collection(db, 'posts')
    const getPosts = async () => {
      const response = await getDocs(postsCollection)
      setPosts(response.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    getPosts()
  }, [])

  return (
    <div className='home-container'>
      <h1 style={{ marginTop: '1em', opacity: '.8' }}>Welcome</h1>
      {posts.map((post, i) => (
        <BlogCard key={post.id} title={post.title} content={post.content} author={post.author} uri={post.imageURL} postId={post.id} />
      ))}
    </div>
  )
}

export default Home