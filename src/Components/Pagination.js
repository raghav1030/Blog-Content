import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

export const Pagination = () => {

  const {page , totalPages , handlePageChange} = useContext(AppContext)

  return (
    <div className='flex w-full shadow-md  border-t-2 fixed bg-white bottom-0    ' >

      <div className='w-6/12 flex justify-between mx-auto pt-2 pb-2 '>

    <div className='flex space-x-4 '>
      {
        page > 1 &&
        <button className='border border-gray-500 shadow-sm w-auto px-2 rounded-md  ' onClick={()=>{handlePageChange(page-1)}}>Previous</button>
      }
      {
        page < totalPages &&
        <button className='border border-gray-500 shadow-sm w-auto px-2 rounded-md ' onClick={()=>{handlePageChange(page+1)}} >Next</button>
      }

</div>
      
      <p className='text-sm font-semibold ' >Page {page} of {totalPages}</p>
    </div>
    </div>
  )
}
