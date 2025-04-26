"use client";

//Navbar component to visible in all pages

import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const[isOpen,setIsOpen] = useState(true);   //for responsive nav bar in smaller screens

    const pathname = usePathname();

    //for routing of the sections in navbar

    const links = [
        {href:"/", label : "Home"},
        {href:"/stageschecklists", label : "Stages & Checklist"},
        {href:"/uploaddocs", label : "Upload Docs"},
        {href:"/preferredvendors", label : "Preferred Vendors"},
        {href:"/techstack", label : "Tech Stack"},
        {href:"/targets", label : "Targets"},
        {href:"/zeesalestargets", label : "Zee Sales Targets"},
        {href:"/maisettings", label : "MAI Settings"},
        {href:"/pendingquestions", label : "Pending Questions"},
    ]

  return (
    <nav className={`bg-[var(--blue1)] fixed top-0 left-0 h-full z-200 transition-all duration-300 ease-in-out
        ${isOpen ? "w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-5 py-10" : "w-14 sm:w-20 px-2 sm:px-3"} 
      `}>
        <button onClick={()=>setIsOpen(!isOpen)}  className=' md:hidden w-10 text-lg p-2 rounded-lg text-white/60 hover:bg-[var(--background)] hover:text-[var(--blue1)] transition ease-in-out duration-200 font-bold' >{isOpen ? '✕' : '☰'}</button>
        <div className='flex flex-col justify-between h-full'>
            <div className={`flex flex-col gap-3
            ${isOpen ?"flex" : "hidden md:flex"}`}>
                {links.map(({href,label})=>{
                    const isActive = (pathname === href) ? true : false;
                    const pq = (href == "/pendingquestions  ") ? true : false;
                    return(
                        <Link
                            key={href}
                            href={href}
                            className={`text-lg p-2 rounded-lg text-white/60 hover:bg-[var(--background)] hover:text-[var(--blue1)] transition ease-in-out duration-200 text-nowrap 
                            ${isActive ? "!text-[var(--blue2)] bg-white/10 " : " "} flex justify-between items-center`}
                            >
                            {label} {pq && <span className=" text-sm w-5 bg-[var(--background)] text-[var(--blue1)] rounded-full"><center>3</center></span>}
                        </Link>
                    )
                })}
            </div>
            <p className={` text-lg p-2 rounded-lg text-white/60 hover:bg-[var(--background)] hover:text-[var(--blue1)] transition ease-in-out duration-200
            ${isOpen ?"flex" : "hidden md:flex"}`}> Logout</p>
        </div>
    </nav>
  )
}

export default Navbar