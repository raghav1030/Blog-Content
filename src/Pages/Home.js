import React from 'react'
import { Pagination } from '../Components/Pagination'
import { Header } from '../Components/Header'
import { BlogsContainer } from '../Components/BlogsContainer'


const Home = () => {
  return (
    <div>
        <Header>   
        </Header>
            <div>

            <BlogsContainer></BlogsContainer>
            <Pagination></Pagination>
            </div>
        
    </div>
  )
}

export default Home