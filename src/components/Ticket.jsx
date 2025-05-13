import React from 'react'

const Ticket = ({name,email,github,avatar}) => {
  return (
    <div>
        <div className='flex flex-col items-center h-full m-auto p-10 z-10 absolute top-0 left-[50%] translate-x-[-50%] text-white font-[inconsolata regular]'>
            <div><img src="https://codingconferencegenerator.netlify.app/logo-full.svg" alt="logo"/></div>
            <h1 className='text-5xl mt-12'>Your Ticket to Coding Conf</h1>
            <h1 className='text-5xl'>2025 is Ready!</h1>
            <div className='mt-5'><h1 className='text-xl m-auto'>Secure your spot at next year's biggest coding conference</h1></div>
            <div className='flex flex-col items-center justify-center w-[400px] mt-5 p-4 gap-3'>
            <img src={avatar} alt="avatar" className='rounded-full w-[200px] h-[200px]' />
            <h1 className='text-xl'>{name}</h1>
            <h1 className='text-xl'>{email}</h1>
            <h1 className='text-xl'>{github}</h1>
            </div>
        </div>
    </div>
  )
}

export default Ticket