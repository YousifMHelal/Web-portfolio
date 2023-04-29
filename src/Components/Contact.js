import React from 'react'

const Contact = ({ theme }) => {
  return (
    <div className='container mx-auto max-w-[1172px] px-4 py-8 ' id='contact'>
      <div>
        <h1 className='text-center bg-gradient-to-r from-start-blue to-end-blue bg-clip-text head'>Contact me</h1>
        <p className='text-center text-3xl capitalize text-light-h dark:text-dark-h'>get in touch...</p>
      </div>
      <div className='text-center mt-8 text-light-p dark:text-dark-p'>
        {
          theme === 'dark'
            ? <form className='flex flex-col items-center'>
              <div className='flex justify-between max-md:flex-col max-md:w-full'>
                <input className='w-[292px] p-2 m-2 dark-blue-border border-solid border-transparent rounded-md border-2 max-md:w-full max-md:mx-0' type='text' placeholder='First name' />
                <input className='w-[292px] p-2 m-2 dark-blue-border border-solid border-transparent rounded-md border-2 max-md:w-full max-md:mx-0' type='text' placeholder='last name' />
              </div>
              <input className='w-[600px] p-2 my-2 dark-blue-border border-solid border-transparent rounded-md border-2 max-md:w-full' type='email' placeholder='Email' />
              <textarea className='w-[600px] p-2 my-2 dark-blue-border border-solid border-transparent rounded-md border-2 max-md:w-full'
                placeholder='Your project'
                rows={7}
              />
              <button type="submit" className="btn dark-blue-btn mt-4">Send your massage</button>
            </form>

            : <form className='flex flex-col items-center'>
              <div className='flex justify-between max-md:flex-col max-md:w-full'>
                <input className='w-[292px] p-2 m-2 blue-border border-solid border-transparent rounded-md border-2 max-md:w-full max-md:mx-0' type='text' placeholder='First name' />
                <input className='w-[292px] p-2 m-2 blue-border border-solid border-transparent rounded-md border-2 max-md:w-full max-md:mx-0' type='text' placeholder='last name' />
              </div>
              <input className='w-[600px] p-2 my-2 blue-border border-solid border-transparent rounded-md border-2 max-md:w-full' type='email' placeholder='Email' />
              <textarea className='w-[600px] p-2 my-2 blue-border border-solid border-transparent rounded-md border-2 max-md:w-full'
                placeholder='Your project'
                rows={7}
              />
              <button type="submit" className="btn blue-btn mt-4">Send your massage</button>
            </form>
        }
      </div>
    </div>
  )
}

export default Contact