"use client";

//Compnent for Home Page design 

import React from 'react'
import { useState, useEffect } from 'react';
import images from "../assets/images.js"
import Image from 'next/image.js';
import Profit from './Profit.jsx';

const Home = () => {

  const [progress, setProgress] = useState(0);    //for animation of the progress circle
  const [animate,setAnimate] = useState(false);   //for animation of the progress bars
  const [dark, setDark] = useState(false);        //for switching of dark theme

  useEffect(()=>{
    setAnimate(true);      //for aniamting on page refresh
  },[])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");   //for switching theme on updating the toggle switch
  }, [dark]);

  useEffect(() => {
    let value = 0;                            //for animation of the progress bar on refreshing the page 
    const interval = setInterval(() => {
      if (value < 85) {
        value++;
        setProgress(value);
      } else {
        clearInterval(interval);
      }
    }, 8);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* the header for the home page */}
      <div className='w-full border-b-2 border-[var(--border)] flex items-center justify-end py-4 px-8 gap-4'>
        <button className=" bg-none border-0 btn btn-sm" onClick={() => setDark(!dark)}>
          {dark ? <Image src={images.moon} alt='moon' className='w-5' /> : <Image src={images.sun} alt='sun' className='bg-none border-0 w-5' />}
        </button>
        <button className='bg-none border-0 btn btn-sm'>
          <Image className='w-5' src={images.settings}  alt='settings'/>
        </button>
        <Image className='w-10 h-10 rounded-full' src={images.person1} alt='person1' />
      </div>

      {/* the account progess section */}
      <div className='flex bg-[var(--background)] w-full flex-wrap lg:flex-nowrap'>
        <div className='flex flex-col justify-center w-full lg:w-1/3 border-2 border-[var(--border)] my-8 mx-4 rounded-lg'>
          <div className='flex flex-col justify-center items-center gap-4 m-4 pb-4 px-4 border-b-2 border-[var(--border)]'>
            <p className='text-[var(--foreground)] text-xl font-semibold'>Account Progress</p>
            <div className="radial-progress text-[var(--blue2)]" style={{ "--value": progress, "--size":"10rem" }} role="progressbar"><span className='text-[var(--foreground)] text-2xl font-semibold'>85%</span></div>
          </div>

          {/* the  steps completed section inside account progess section */}
          <div className='mx-4 my-2 p-4 flex flex-col gap-2 bg-[var(--secback)] rounded-lg'>
            <p className='text-gray-700 text-md font-semibold'>Steps Competleted</p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'><p className='rounded-full w-2.5 h-2.5 bg-gray-300 m-2'></p> <p className='text- md text-gray-600'>Proile Setup</p></div>
              <Image src={images.check} alt='checkMark' className='w-4 h-4' />
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'><p className='rounded-full w-2.5 h-2.5 bg-gray-300 m-2'></p> <p className='text-md text-gray-600'>Initial Training</p></div>
              <Image src={images.check} alt='checkMark' className='w-4 h-4' />
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'><p className='rounded-full w-2.5 h-2.5 bg-gray-300 m-2'></p> <p className='text-md text-gray-600'>Legal Documents</p></div>
              <Image src={images.check} alt='checkMark' className='w-4 h-4' />
            </div>
          </div>

          {/* the  steps remaining section inside account progess section */}
          <div className='mx-4 my-2 p-4 flex flex-col gap-2 bg-[var(--secback)] rounded-lg'>
            <p className='text-gray-700 text-md font-semibold'>Steps Remaining</p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'><p className='rounded-full w-2.5 h-2.5 bg-gray-300 m-2'></p> <p className='text-md text-gray-600'>Proile Setup</p></div>
              <Image src={images.check} alt='checkMark' className='w-4 h-4 opacity-50' />
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'><p className='rounded-full w-2.5 h-2.5 bg-gray-300 m-2'></p> <p className='text-md text-gray-600'>Initial Training</p></div>
              <Image src={images.check} alt='checkMark' className='w-4 h-4 opacity-50' />
            </div>
          </div>
        </div>

        {/* the four sections */}
        <div className='grid grid-cols-1 w-full lg:2/3 lg:grid-cols-2 gap-x-4'>

          {/* Total franchises section */}
          <div className='flex flex-col gap-4 border-2 border-[var(--border)] rounded-lg mt-8 mb-5 mx-4 lg:mx-1 px-8 py-4'>
            <p className='text-lg font-semibold text-[var(--foreground)]'>Total Franchisees Onboard</p>

            <div className='flex justify-between items-center'>
              <div className='flex gap-2 justify-between items-center' >
                <p className='text-4xl font-semibold text-[var(--foreground)] mx-2'>14</p>
                <Profit text={"7.4%"} />
              </div>

              {/* stacked profiles in total franchises section */}
              <div className='flex relative'>
                <Image className='z-50 bg-gray-200 first:ml-0 w-8 h-8 border-2 border-[var(--background)] rounded-full' src={images.person9} alt='person9' />
                <Image className='z-51 bg-gray-200 -ml-2 w-8 h-8 border-2 border-[var(--background)] rounded-full' src={images.person5} alt='person5' />
                <Image className='z-52 bg-gray-200 -ml-2 w-8 h-8 border-2 border-[var(--background)] rounded-full' src={images.person8} alt='person8' />
                <Image className='z-53 bg-gray-200 -ml-2 w-8 h-8 border-2 border-[var(--background)] rounded-full' src={images.person7} alt='person7' />
                <Image className='z-54 bg-gray-200 -ml-2 w-8 h-8 border-2 border-[var(--background)] rounded-full' src={images.person6} alt='person6' />
                <p className='p-1 z-55 bg-gray-200 -ml-2 w-8 h-8 border-2 border-[var(--background)] rounded-full text-gray-500 text-sm font-semibold' >+7</p>
              </div>
            </div>

            {/* Progressbars section in total franchises section */}
            <div className='flex w-full'>
              <div className={`bg-[var(--blue1)] m-1 h-3 rounded-lg transition-all duration-1000 ease-in-out ${animate ? "w-3/9" : "w-0"}`} ></div>
              <div className={`bg-[var(--blue2)] m-1 h-3 rounded-lg transition-all duration-1000 ease-in-out ${animate ? "w-2/9" : "w-0"}`} ></div>
              <div className={`bg-[var(--blue3)] m-1 h-3 rounded-lg transition-all duration-1000 ease-in-out ${animate ? "w-4/9" : "w-0"}`} ></div>
            </div>

            <div className='flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'><p className='rounded-full w-2.5 h-2.5 bg-[var(--blue1)] m-2'></p><p className='text-md ml-1 text-gray-600'>Stage 1 (Initial enquiry)</p></div>
              <p className='text-[var(--foreground)] text-lg font-semibold '>02</p>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'><p className='rounded-full w-2.5 h-2.5 bg-[var(--blue2)] m-2'></p> <p className='text-md ml-1 text-gray-600'>Stage 2 (Document Submission)</p></div>
              <p className='text-[var(--foreground)] text-lg font-semibold '>07</p>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'><p className='rounded-full w-2.5 h-2.5 bg-[var(--blue3)] m-2'></p> <p className='text-md ml-1 text-gray-600'>Stage 3 (Training)</p></div>
              <p className='text-[var(--foreground)] text-lg font-semibold '>05</p>
            </div>
            </div>
            
          </div>
          {/* Key Insights & Feedback section */}
          <div className='flex flex-col gap-4 border-2 border-[var(--border)] rounded-lg mt-8 mb-5 mx-4 lg:mr-8 px-8 py-4'>
            <p className='text-[var(--foreground)] text-xl font-semibold'>Key Insights & Feedback</p>
            <div className='flex justify-between items-center border-b-2 pb-4 border-[var(--border)]'>
              <div>
                <p className='text-4xl font-semibold text-[var(--foreground)]' >10%</p>
                <p className='text-md ml-1 text-gray-600'>Sales Growth</p>
              </div>

              <div className='flex flex-col justify-center items-center gap-2'>
                <Image className='w-10 h-10' src={images.best} alt='best' />
                <div className='text-sm w-30 flex items-center justify-center text-[var(--blue2)] bg-sky-100 rounded-2xl' >Top Performer</div>
              </div>
            </div>

            {/* Feedback section */}
            <div className='bg-[var(--secback)] p-4 rounded-lg'>
              <p className='text-gray-700 text-md font-semibold mb-2'>Feedback</p>
              <div className='flex'><p className='rounded-full w-3.5 h-2.5 bg-gray-300 m-2'></p> <p className='text-sm text-gray-600'>Franchisees are requesting more detailed training materials.</p></div>
            </div>
          </div>

          {/* Financial wellbeing section */}
          <div className='flex flex-col gap-4 border-2 border-[var(--border)] rounded-lg mx-4 lg:mx-0 mb-8 px-8 py-4'>
            <p className='text-[var(--foreground)] text-xl font-semibold'>Financial Wellbeing</p>
            <div className='flex justify-between items-center border-b-2 pb-4 border-[var(--border)]'>
              <div>
                <p className='text-4xl font-semibold text-[var(--foreground)] ml-2' >20</p>
                <p className='text-md ml-1 text-gray-600'>Total Franchisees</p>
              </div>

              <Profit text={"2.1%"} />
            </div>
            <div className='flex justify-center items-center gap-5'>
              <div className='flex flex-col justify-center items-center bg-[var(--secback)] rounded-lg w-full py-8 gap-2'>
                <p className='text-md font-semibold ml-1 text-gray-700'>Target</p>
                <p className='text-xl font-semibold text-black'>$500,000</p>
              </div>
              <div className='flex flex-col justify-center items-center bg-[var(--secback)] rounded-lg w-full py-8 gap-2'>
                <p className='text-md font-semibold ml-1 text-gray-700'>Current</p>
                <p className='text-xl font-semibold text-black'>$450,000</p>
              </div>
            </div>
          </div>
          
          {/* Prospect Leads section */}
          <div className='flex flex-col gap-4 border-2 border-[var(--border)] rounded-lg mb-8 mx-4 lg:mr-8 px-8 py-4'>
            <p className='text-[var(--foreground)] text-xl font-semibold'>Prospect Leads</p>
            <div className='flex justify-between items-center bg-[var(--secback)] p-3 rounded-lg'>
              <div className='flex justify-center items-center'>
                <Image src={images.person4} alt='person4' className='w-9 h-9 rounded-full m-1'/>
                <p className='text-black text-md m-1'>Wade Warren</p>
              </div>
                <div className='flex justify-center items-center'>
                  <p className='text-gray-600 text-sm hidden sm:block'>Stage: </p>
                  <p className='text-black text-sm ml-1'> Initial enquiry</p>
                </div>
            </div>
            <div className='flex justify-between items-center bg-[var(--secback)] p-3 rounded-lg'>
              <div className='flex justify-center items-center'>
                <Image src={images.person3} alt='person3' className='w-9 h-9 rounded-full m-1'/>
                <p className='text-black text-md m-1 '>Ava Wright</p>
              </div>
                <div className='flex justify-center items-center'>
                  <p className='text-gray-600 text-sm hidden sm:block'>Stage: </p>
                  <p className='text-black text-sm ml-1'> Initial enquiry</p>
                </div>
            </div>
            <div className='flex justify-between items-center bg-[var(--secback)] p-3 rounded-lg'>
              <div className='flex justify-center items-center'>
                <Image src={images.person2} alt='person2' className='w-9 h-9 rounded-full m-1'/>
                <p className='text-black text-md m-1 '>Cody Fisher</p>
              </div>
                <div className='flex justify-center items-center'>
                  <p className='text-gray-600 text-sm hidden sm:block'>Stage: </p>
                  <p className='text-black text-sm ml-1'> Initial enquiry</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom section of the home page */}

      <div className='flex flex-wrap lg:flex-nowrap w-full lg:border-t-2 border-[var(--border)]'>

      {/* Pending quesitons section */}
        <div className='flex flex-col justify-between items-center w-full border-2 border-[var(--border)] m-4 lg:m-0 rounded-lg lg:border-0 lg:w-1/3'>
          <div className='flex justify-between items-center m-1 py-2 px-4 w-full border-b-2 border-[var(--border)]'>
            <p className='text-[var(--foreground)] text-xl font-semibold'>Pending Questions</p>
            <p className='text-[var(--background)] bg-[var(--blue2)] rounded-sm text-xs p-1' >02</p>
          </div>

          {/*section of pending questions of eaach user  */}
          <div className='flex flex-col px-4  border-b-2 border-[var(--border)]'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <p  className='rounded-full w-2 h-2 bg-[var(--blue2)] m-2'></p>
                <div className='flex m-2'>
                  <Image className='relative w-11 h-11 rounded-full border-1 bg-gray-200 ' src={images.person5}  alt='person5'/>
                  <p className='absolute rounded-full mt-8 ml-8 w-3 h-3 border-2 border-[var(--border)] bg-green-600 m-2'></p>
                </div>
                <div className='flex flex-col justify-between py-2 px-1'>
                  <p className='text-[var(--foreground)]/80 text-md font-semibold '>Phoenix Baker</p>
                  <p className='text-[var(--foreground)]/70 text-md '>@phoenix</p>
                </div>
              </div>
              <p className='text-[var(--foreground)]/80 text-sm m-2 pb-5'>5min ago</p>
            </div>
            <p className='text-[var(--foreground)]/70 text-md ml-8 pb-5' >What are the requirements for opening a new store?</p>
          </div>

          <div className='flex flex-col px-4 border-b-2 border-[var(--border)]'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <p  className='rounded-full w-2 h-2 bg-[var(--blue2)] m-2'></p>
                <div className='flex m-2'>
                  <Image className='relative w-11 h-11 rounded-full border-1 bg-gray-200 ' src={images.person10}  alt='person10'/>
                  <p className='absolute rounded-full mt-8 ml-8 w-3 h-3 border-2 border-[var(--border)] bg-green-600 m-2'></p>
                </div>
                <div className='flex flex-col justify-between py-2 px-1'>
                  <p className='text-[var(--foreground)]/80 text-md font-semibold '>Koray Okumus</p>
                  <p className='text-[var(--foreground)]/70 text-md '>@koray</p>
                </div>
              </div>
              <p className='text-[var(--foreground)]/80 text-sm m-2 pb-5'>4hr ago</p>
            </div>
            <p className='text-[var(--foreground)]/70 text-md ml-8 pb-5' >What are the requirements for opening a new store?</p>
          </div>
        </div>

        {/* the AI assistant section */}
        <div className='w-full lg:w-2/3 flex flex-col  bg-[var(--secback)] p-4'>
          <div className='flex !justify-end'>
            <button className="cursor-poitner bg-none border-0">
              <Image className='w-7 h-7' src={images.button} alt='button' />
            </button>
          </div>
          <div className='w-full h-full flex flex-col justify-center  items-center'>
            <Image src={images.logo}  alt='logo' className='w-15  md:w-20'/>
            <p className='text-xl md:text-4xl font-semibold text-[var(--foreground)] mt-4 mb-8'>Welcome to the AI Chat Assistant</p>
            <div className='flex justify-between w-[80%] bg-[var(--background)]  border-1 border-[var(--border)] p-2'>
              <input className='border-0 w-full h-full' placeholder='Ask your question here..'></input>
              <Image src={images.send} alt='send' className='w-6 h-6' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home