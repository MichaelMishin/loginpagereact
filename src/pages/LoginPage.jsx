import React, { useEffect } from 'react';
import BouncingBallCanvas from '../components/BouncingBallCanvas';

const LoginPage = () => {

  return (
    <div className='bg-gray-900 h-screen w-screen relative overflow-hidden'>

        <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 animate-pulse"></div>
        <div className="h-35-r w-35-r bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full absolute right-2/3 -bottom-56 animate-pulse"></div>

        <BouncingBallCanvas height={window.innerHeight} width={window.innerWidth} />
        
        {/* login form glassmorphism center in middle of screen */}
        <div className='h-96 w-96 bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl flex flex-col items-center justify-center p-8 shadow-xl'>
            <h1 className='text-4xl font-bold text-white mb-4'>Welcome back</h1>
            <form className='flex flex-col w-full'>
                <label htmlFor="email" className='text-white text-opacity-80 mb-2'>Username</label>
                <input type="email" name="email" className='border-2 border-gray-300 border-opacity-50 rounded-md h-10 px-4 mb-4 bg-transparent text-white text-opacity-80 focus:outline-none focus:border-gray-300 focus:border-opacity-100' />
                <label htmlFor="password" className='text-white text-opacity-80 mb-2'>Password</label>
                <input type="password" name="password" className='border-2 border-gray-300 border-opacity-50 rounded-md h-10 px-4 mb-4 bg-transparent text-white text-opacity-80 focus:outline-none focus:border-gray-300 focus:border-opacity-100' />
                <button type='submit' className='bg-gray-300 bg-opacity-10 rounded-md text-white text-opacity-80 h-10 w-full hover:bg-opacity-20 transition duration-300'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage