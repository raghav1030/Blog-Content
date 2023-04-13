import React from 'react'
import {Header} from '../Components/Header'
import { useNavigate , useLocation } from 'react-router-dom'
import  {Pagination } from '../Components/Pagination'
import  {BlogsContainer } from '../Components/BlogsContainer'

const CategoryPage = () => {

    const navigation = useNavigate()
    const location = useLocation();
    const category = location.pathname.split('/').at(-1)

  return (
    <div>
        <Header></Header>

      <div className='w-full flex  justify-center  '>
        <div className=' pt-[85px] w-6/12  flex-col justify-start space-y-4   '>
            <button className='border border-gray-500 shadow-sm w-auto px-2 rounded-md' onClick={()=>{navigation(-1)}} >Back</button>
            <div className='flex space-x-1'>

            <h2 className=' '>Blogs related to Category</h2>
            <p className='text-blue-500  '> "{category}" </p>
            </div>
        </div>
      </div>
        <BlogsContainer></BlogsContainer>
      <Pagination></Pagination>
    </div>
  )
}

export default CategoryPage