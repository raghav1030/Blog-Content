import React, { useContext } from 'react'
import {AppContext} from '../Context/AppContext'
import { Loader } from './Loader'
import Blog from './Blog'
// import { Consumer } from 'react'

export const BlogsContainer = () => {

  const {posts , loading} = useContext(AppContext)
  // console.log(posts.length)
  return (
    <div  className='w-full flex flex-col justify-center items-center mt-[55px] mb-[55px] h-fit  '>
        {
          loading ? <div className='w-screen flex justify-center items-center h-screen bottom-[50px] '><Loader/></div> : (
            // <div  className='w-full flex flex-col justify-center items-center mt-[55px] mb-[55px] h-fit  '>
            (posts.length) === 0 ? 
            (<div>
              <p className='text-2xl place-self-center  '>No posts Found </p>
            </div>)
            :
            posts.map((posts) => (<Blog posts={posts} key={posts.id}></Blog>))
          // </div>
          )
        }
    </div>
  )
}
