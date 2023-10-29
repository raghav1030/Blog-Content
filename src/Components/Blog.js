import React from 'react'
import Tag from './Tag'
import { NavLink } from 'react-router-dom'

const Blog = ({posts}) => {
  return (
    <div className='flex flex-col w-6/12 m-6 flex-wrap  '>
        
        <NavLink to={`/blog/${posts.id}`} >
        <p className='font-semibold text-xl   '>{posts.title}</p>
        </NavLink>

        <p className='text-[14px] mt-1 italic '>By <span>{posts.author}</span> on
        <NavLink to={`/categories/${posts.category.replaceAll(' ', '-')}`} >
        <span  className='underline font-semibold '> {posts.category}</span>
        </NavLink>
        </p>
        <p className='text-[14px]  '>Posted on : {posts.date}</p>
        <p className='text-justify mt-4'>{posts.content}</p>
        <div className=' flex space-x-3  pt-2 '>
            {posts.tags.map((tag , index) => {
              return (
              <NavLink key={index} to={`/tags/${tag.replaceAll(' ' , '-')}`}>

                <Tag tag={tag} key={index}/>
              </NavLink>
)        })}
        </div>
    </div>
  )

}

export default Blog