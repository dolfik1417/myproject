import React from 'react'

export default function Plans() {
  return (
    
    <div className='max-w[50px] m-auto mt-20 py-16 px-4 grid lg:grid-cols-2 gap-4 bg-gray-200'>
          <p className='justify-start'>Recent post</p>
          <a href='view all' className='font-semibold text-blue-700 flex justify-end'>View all</a>

        <div className='flex flex-col h-full justify-center bg-white mt-auto py-10 px-10'>
          <h2 className='text-[18px] font-bold'>Making a design system from scratch</h2><br />
          <p>29 oct 2024  |  Design pattern</p> <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nihil temporibus distinctio rerum at est.</p>
      </div>

      <div className='flex flex-col h-full justify-center bg-white m-auto py-10 px-10'>
        <h3 className='text-[18px] font-bold'>Creating pixel perfect icon in figmha</h3><br />
        <p>29 oct 2024  |  Design pattern</p> <br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quae rerum sequi doloribus soluta est molestiae corrupti illo aliquam asperiores?</p>
      </div>

      
    </div>
    
  )
}
