import React from 'react'

const Contact = () => {
  return (
    <div className='container mx-auto max-w-[1172px] px-4 py-8'>
      <div>
        <h1 className='text-center bg-gradient-to-r from-start-color to-end-color bg-clip-text head'>Contact me</h1>
        <p className='text-center text-3xl capitalize text-dark-h'>get in touct...</p>
      </div>
      <div className='felx items-center w-full text-center mt-8'>
        <from className='inline-block max-md:flex max-md:flex-col'>
          <input className='w-[292px] p-2 m-2 bg-dark-bg border-2 border-solid border-transparent rounded-md border max-md:w-full' type='text' placeholder='First name' />
          <input className='w-[292px] p-2 m-2 bg-dark-bg border-2 border-solid border-transparent rounded-md border max-md:w-full' type='text' placeholder='last name' />
          <input className='w-[600px] p-2 m-2 bg-dark-bg border-2 border-solid border-transparent rounded-md border max-md:w-full' type='email' placeholder='Email' />
          <textarea className='w-[600px] p-2 m-2 bg-dark-bg border-2 border-solid border-transparent rounded-md border max-md:w-full'
            placeholder='Subject'
            rows={7}
          />
          <br></br>
          <button className='btn btn-contact p-16'>Send a message</button>
        </from>
      </div>
    </div>
  )
}

export default Contact