"use client"
import React from "react"
import { Spinner } from "react-rainbow-components"

const Loading = ({}) => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Spinner variant='brand' size='x-large' />
    </div>
  )
}

export default Loading
