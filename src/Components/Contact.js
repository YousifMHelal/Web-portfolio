import React from 'react'

const Contact = () => {
  return (
    <div className='container mx-auto max-w-[1172px] px-4 py-8'>
      <div>
        <h1 className='text-center bg-gradient-to-r from-start-color to-end-color bg-clip-text head'>Contact me</h1>
        <p className='text-center text-3xl capitalize text-dark-h'>get in touct...</p>
      </div>
      <div className='text-center mt-8'>
        <from className='flex flex-col items-center'>
          <div className='flex justify-between max-md:flex-col max-md:w-full'>
            <input className='w-[292px] p-2 m-2 bg-dark-bg border-2 border-solid border-transparent rounded-md border max-md:w-full max-md:mx-0' type='text' placeholder='First name' />
            <input className='w-[292px] p-2 m-2 bg-dark-bg border-2 border-solid border-transparent rounded-md border max-md:w-full max-md:mx-0' type='text' placeholder='last name' />
          </div>
          <input className='w-[600px] p-2 my-2 bg-dark-bg border-2 border-solid border-transparent rounded-md border max-md:w-full' type='email' placeholder='Email' />
          <textarea className='w-[600px] p-2 my-2 bg-dark-bg border-2 border-solid border-transparent rounded-md border max-md:w-full'
            placeholder='Subject'
            rows={7}
          />
          <button type="submit" class="btn btn-contact mt-4">Submit</button>
        </from>
      </div>
    </div>
  )
}

export default Contact