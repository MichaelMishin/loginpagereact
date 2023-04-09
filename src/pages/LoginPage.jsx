import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { BouncingBallCanvas } from '../components';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: add login logic
    // add spin animation and validate user


    navigate('/Home');
  };

  return (
    <div 
        className='h-screen w-screen relative overflow-hidden'>

        <motion.div 
            initial={{scale: 1}}
            animate={{scale: 1 }}
            exit={{
                transition: { duration: 2.5 },
                scale: 10,
                zIndex: 999
              }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56"></motion.div>

        <motion.div 
            initial={{scale: 1}}
            animate={{scale: 1 }}
            exit={{
                transition: { duration: 2.5, delay: 0.1 },
                scale: 10,
                zIndex: 1000
              }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-35-r w-35-r bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full absolute right-2/3 -bottom-56"></motion.div>

        <BouncingBallCanvas height={window.innerHeight} width={window.innerWidth} />
        
        {/* login form glassmorphism center in middle of screen */}
        <div 
            className='h-96 w-96 bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl flex flex-col items-center justify-center p-8 shadow-xl z-50'>
            <h1 className='text-4xl font-bold text-white mb-4'>Welcome back</h1>
            <form className='flex flex-col w-full' onSubmit={handleSubmit}>
                <label htmlFor="userName" className='text-white text-opacity-80 mb-2'>Username</label>
                <input value={userName} onChange={e => setUserName(e.target.value)} type="userName" name="userName " autocomplete="off" className='border-2 border-gray-300 border-opacity-50 rounded-md h-10 px-4 mb-4 bg-transparent text-white text-opacity-80 focus:outline-none focus:border-gray-300 focus:border-opacity-100' />
                <label htmlFor="password" className='text-white text-opacity-80 mb-2'>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" className='border-2 border-gray-300 border-opacity-50 rounded-md h-10 px-4 mb-4 bg-transparent text-white text-opacity-80 focus:outline-none focus:border-gray-300 focus:border-opacity-100' />
                <button type='submit' className='bg-gray-300 bg-opacity-10 rounded-md text-white text-opacity-80 h-10 w-full hover:bg-opacity-20 transition duration-300'>
                  Login
                </button>
            </form>
        </div>

        {/* Register form */}
        {/* <div
            className='h-96 w-96 bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl flex flex-col items-center justify-center p-8 shadow-xl z-50'>
            <h1 className='text-4xl font-bold text-white mb-4'>Register</h1>
            <form className='flex flex-col w-full'>
                <label htmlFor="userName" className='text-white text-opacity-80 mb-2'>Username</label>
                <input value={userName} onChange={e => setUserName(e.target.value)} type="userName " autocomplete="off" className='border-2 border-gray-300 border-opacity-50 rounded-md h-10 px-4 mb-4 bg-transparent text-white text-opacity-80 focus:outline-none focus:border-gray-300 focus:border-opacity-100' />
                <label htmlFor="password" className='text-white text-opacity-80 mb-2'>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" className='border-2 border-gray-300 border-opacity-50 rounded-md h-10 px-4 mb-4 bg-transparent text-white text-opacity-80 focus:outline-none focus:border-gray-300 focus:border-opacity-100' />
                <button type='submit' className='bg-gray-300 bg-opacity-10 rounded-md text-white text-opacity-80 h-10 w-full hover:bg-opacity-20 transition duration-300'>
                  Register
                </button>
            </form>
        </div> */}


        {/* Big Text in the middle of the screen with the name of the account. displays after login */}
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 0 }}
            exit={{ opacity: 1, zIndex: 1001, transition: { duration: 2, delay: 0.5 }}}
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-opacity-80 text-8xl font-bold'>
            <span>Hello, </span>
            <span className='underline text-slate-900'>{userName}</span>
        </motion.div>
    </div>
  )
}

export default LoginPage