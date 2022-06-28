import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import { getDocs, collection, query, orderBy, limit, startAfter, endBefore } from 'firebase/firestore'
import { db } from '../firebase-config'

function Home() {

  const [posts, setPosts] = useState([])
  const [lastVisible, setLastVisible] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  const postsCollection = collection(db, 'posts')

  const nextPage = async () => {
    const nextQ = query(postsCollection, orderBy('createdAt', 'desc'), limit(5), startAfter(lastVisible))
    const nextDocs = await getDocs(nextQ)
    setLastVisible(nextDocs.docs[nextDocs.docs.length - 1])
    setPosts(nextDocs.docs.map(item => ({ ...item.data(), id: item.id })))
    setPageNumber(prevCounter => prevCounter + 1)
  }

  const prevPage = async () => {
    const prevQ = query(postsCollection, orderBy('createdAt', 'desc'), limit(5), endBefore(posts.length - 1))
    const prevDocs = await getDocs(prevQ)
    setLastVisible(prevDocs.docs[prevDocs.docs.length - 1])
    setPosts(prevDocs.docs.map(item => ({ ...item.data(), id: item.id })))
    setPageNumber(prevCounter => prevCounter - 1)
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
      {posts.map((post) => (
        <BlogCard key={post.id} title={post.title} content={post.content} author={post.author} uri={post.imageURL} postId={post.id} />
      ))}
      <div className="page-button__container">
        {pageNumber === 1 ? '' : <button className='page-button' onClick={() => prevPage()}>Prev</button>}
        {posts.length < 5 ? '' : <button className='page-button' onClick={() => nextPage()}>Next</button>}
      </div>
    </div>
  )
}

export default Home