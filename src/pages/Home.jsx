import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import { getDocs, collection, query, orderBy, limit, startAfter, getDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

function Home() {

  const [posts, setPosts] = useState([])
  const [lastVisible, setLastVisible] = useState([])

  const postsCollection = collection(db, 'posts')

  const nextPage = async () => {
    const nextQ = query(postsCollection, orderBy('createdAt', 'desc'), limit(5), startAfter(lastVisible))
    const nextDocs = await getDocs(nextQ)
    setLastVisible(nextDocs.docs[nextDocs.docs.length - 1])
    setPosts(nextDocs.docs.map(item => ({ ...item.data(), id: item.id })))
  }

  useEffect(() => {
    const getPosts = async () => {
      const q = query(postsCollection, orderBy('createdAt', 'desc'), limit(5))
      const response = await getDocs(q)
      setPosts(response.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      setLastVisible(response.docs[response.docs.length - 1])
    }
    getPosts()
  }, [])

  return (
    <div className='home-container'>
      <h1 style={{ marginTop: '1em', opacity: '.8' }}>Welcome</h1>
      {posts.map((post, i) => (
        <BlogCard key={post.id} title={post.title} content={post.content} author={post.author} uri={post.imageURL} postId={post.id} />
      ))}
      <button onClick={() => nextPage()}>Next</button>
    </div>
  )
}

export default Home