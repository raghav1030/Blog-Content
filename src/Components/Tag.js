import React from 'react'

const Tag = ({tag}) => {
  return (
    <span className=' text-blue-500 ' > {`#${tag}`} </span>
  )
}

export default Tag