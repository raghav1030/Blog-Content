import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation , useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
// import { baseUrl } from '../baseUrl'
import axios from 'axios'
import { Loader } from '../Components/Loader'
import { Header } from '../Components/Header'
import Blog from '../Components/Blog'

const BlogsPage = () => {

  const newBaseURL = 'https://codehelp-apis.vercel.app/api/'

  const [blog , setBlog] = useState(null)
  const [relatedBlog , setRelatedBlog] = useState([])
  const location = useLocation()
  const navigate = useNavigate()

  const {setLoading , loading} = useContext(AppContext)
  const blogId = location.pathname.split('/').at(-1)
  console.log('blog id : ', blogId)
  
  async function fetchRelatedBlogsPosts(){
    setLoading(true)
    const url = `${newBaseURL}get-blog?blogId=${blogId}` ;
    console.log(url)

    try{

      
      const data = await axios.get(url)
      console.log("Hello from the blogspage",data)
      setBlog(data.data.blog)
      setRelatedBlog(data.data.relatedBlogs)
    }
    
    catch(e){
      console.log("Error in Calling API for blog ID " , e)
      setBlog(null);
      setRelatedBlog([])
    }
    
    setLoading(false)
    
  }
  
  
  useEffect(()=>{
    if(blogId){

      fetchRelatedBlogsPosts();
    }
  },[location.pathname])
  
  return (
    <div className='w-full flex flex-col justify-center items-center mt-[55px] mb-[55px] h-fit'>
      <Header></Header>
        <div className='w-6/12 pt-[45px] pb-11 ' >
          <button className='border border-gray-500 shadow-sm w-auto px-2 rounded-md ' onClick={()=>{
            navigate(-1)
          }} >Back</button>

  
        </div>
      

    {
      loading ? <Loader></Loader> : (blog ? (<Blog posts = {blog} />) : <p>No Blog Found</p> )
    }

    <h2 className='text-center font-bold text-3xl pt-28 '>Related Blogs</h2>

<div className='w-full flex flex-col justify-center items-center  mb-[55px] h-fit'>

  {  relatedBlog.map((post)=> {
    return  <Blog key={post.id} posts={post} ></Blog>
  })

  } 
    </div> 
      </div>
  )
}

export default BlogsPage