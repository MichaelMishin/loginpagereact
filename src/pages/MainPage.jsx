import React from 'react';
import { SideBar } from '../components';

const MainPage = () => {
    // create a generic Home Page here
  return (
    <div className='h-screen w-screen'>
        <div className='flex '>
            <div className='flex-initial w-48'>
                <SideBar />
            </div>
            <div className='flex-1'>
                <label class="relative block my-4 mr-4">
                <span class="sr-only">Search</span>
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                </span>
                <input class="placeholder:italic text-white placeholder:text-slate-400 block bg-slate-700 w-full border border-slate-600 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                </label>
                
                <div className='h-96 bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center p-8 shadow-xl gap-4 mr-4'>
                    <h1 className='text-4xl font-bold text-white mb-4'>Home Page Example</h1>
                    <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
                    When you look
                    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                        <span class="relative text-white">annoyed</span>
                    </span>
                    all the time, people think that you're busy.
                    </blockquote>

                    <p class="first-line:uppercase first-line:tracking-widest
                        first-letter:text-7xl first-letter:font-bold first-letter:text-white
                        first-letter:mr-3 first-letter:float-left
                        ">
                        Well, let me tell you something, funny boy. Y'know that little stamp, the one
                        that says "New York Public Library"? Well that may not mean anything to you,
                        but that means a lot to me. One whole hell of a lot.
                    </p>
                </div>



                
            </div>
        </div>

    </div>
  )
}

export default MainPage