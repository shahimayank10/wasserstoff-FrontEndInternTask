import React from 'react'

const Form = ({setTicket,setFlag}) => {


   const handleForm = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        const file = formData.get('avatar')
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (setFlag,setTicket) => {
            setTicket({...data,avatar:reader.result});
            setFlag(0);
        }
        
    }
  return (
    <div className='flex flex-col items-center h-full m-auto p-10 z-10 absolute top-0 left-[50%] translate-x-[-50%] text-white font-[inconsolata regular]'>
      <div><img src="https://codingconferencegenerator.netlify.app/logo-full.svg" alt="logo"/></div>
      <h1 className='text-5xl mt-12'>Your Journey to Coding Conf </h1><h1 className='text-5xl'>2025 Starts Here</h1>
      <div className='mt-5'><h1 className='text-xl m-auto'>Secure your spot at next year's biggest coding conference</h1></div>


      <form action="" method="post" className='flex flex-col justify-center w-[400px] mt-5 p-4 gap-3' onSubmit={(e)=> handleForm(e)}>


        <h1 className='text-xl'>Upload Avatar</h1> 
       <div> <input type="file" name='avatar' className='border-2 border-dotted p-10 rounded-xl bg-[rgb(225,225,225,0.1)] backdrop-blur-[100px]' required/>
       <span className='text-[10px]'>Upload your photo (JPG or PNG, max size: 500KB)</span></div>

      <div>  <label htmlFor="fname" className='text-xl'>Full Name</label> <br />
        <input  type="text" id="fname" name='fname' className='border-white p-2 border-1 rounded w-full mt-1  bg-[rgb(225,225,225,0.1)] backdrop-blur-[100px]  text-white' required placeholder='enter your full name' /></div>

       <div> <label htmlFor="email" className='text-xl'>Email</label><br />
        <input type="text" id="email" name='email' className='border-white p-2 border-1 rounded w-full mt-1 backdrop-blur-[100px]  bg-[rgb(225,225,225,0.1)] text-white' required  placeholder='enter your email' /></div>

      <div>  <label htmlFor="gitname" className='text-xl'>GitHub Username</label><br />
        <input type="text" id="gitname" name='gitname'  className='border-white p-2 border-1 rounded w-full mt-1 backdrop-blur-[100px]  bg-[rgb(225,225,225,0.1)]  text-white' required placeholder='enter your Github username' /> </div>
      
      <input type="submit" value="Generate my ticket" className='border-1 border-gray-500 p-2 bg-gray-500 rounded ' />

      </form>
    </div>
  )
}

export default Form