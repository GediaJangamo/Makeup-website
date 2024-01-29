"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const NavBar = () => {

  const [menuIcon, setMenuIcon] = useState(false)

  const handleSmallerScreenNavigation = () => {
    setMenuIcon(!menuIcon)
  }

  return (
    <header className='w-full ease-in duration-300 fixed top-0 left-0 z-10'>
      <nav className='mx-auto flex justify-between items-center h-[100px]  p-4'>
        {/* logo */}
        <div className=''>
          <Image
            src='/newLogo.svg'
            alt='logo'
            width={118}
            height={18}

          />

        </div>

        {/* Menu */}
        <ul className='hidden md:flex  text-xl lg:text-[18px] '>
          <li className='mr-4 font-Poppins hover:text-[#de5b7a]'>
            <Link href="/" > Home</Link>
          </li>

          <li className='mr-4 font-Poppins hover:text-[#de5b7a]'>
            <Link href="/" > sobre-nos</Link>
          </li>

          <li className='mr-4 font-Poppins hover:text-[#de5b7a]'>
            <Link href="/" > servicos</Link>
          </li>

          <li className='mr-4 font-Poppins hover:text-[#de5b7a]'>
            <Link href="/" > Produtos</Link>
          </li>

        </ul>

        {/* Contact Button  */}
        <div className='hidden md:flex'>
          <div className='flex font-Poppins'>
            <Link href="/">
              <button className="rounded-full text-white px-8 py-3 bg-[#de5b7a] hover:text-white hover:bg-slate-800">
                Contacte-nos
              </button>
            </Link>
          </div>
        </div>

        {/* smaller screen navigation */}
        {/* onclick change the icon  */}
        <div onClick={handleSmallerScreenNavigation} className="flex md:hidden">
          {menuIcon ?

            (<AiOutlineClose size={25} className='text-[#de5b7a]' />)
            :
            (<AiOutlineMenu size={25} className='text-[#de5b7a]' />)

          }
        </div>

        {/* menu smaller screen navigation */}

        <div className={
          menuIcon ? 'md:hidden absolute top-[100px] bottom-0 left-0 right-0 justify-center items-center w-full h-screen text-white ease-in duration-300 bg-slate-800'
            : 'md:hidden absolute top-[100px] bottom-0 left-[-100%] right-0 justify-center items-center w-full h-screen ease-in duration-300 text-center bg-slate-800'
        }>

          <div className='w-full text-center'>
            <ul className='text-xl text-center lg:text-[18px] mb-2'>
              <li onClick={handleSmallerScreenNavigation} className='py-5  font-Poppins hover:text-[#de5b7a] cursor-pointer'>
                <Link href="/" > Home</Link>
              </li>
              <li onClick={handleSmallerScreenNavigation} className='py-5  font-Poppins hover:text-[#de5b7a] cursor-pointer'>
                <Link href="/" > sobre-nos</Link>
              </li>
              <li onClick={handleSmallerScreenNavigation} className='py-5  font-Poppins hover:text-[#de5b7a] cursor-pointer'>
                <Link href="/" > servicos</Link>
              </li>
              <li onClick={handleSmallerScreenNavigation} className='py-5  font-Poppins hover:text-[#de5b7a] cursor-pointer'>
                <Link href="/" > Produtos</Link>
              </li>
            </ul>

            <div className=''>

              <Link href="/" onClick={handleSmallerScreenNavigation} className=''>

                <button className='rounded-full font-Poppins px-10 py-3 text-[18px] hover:text-white hover:bg-[#de5b7a] text-slate-800 bg-white'>   Contacte-nos </button>

              </Link>

            </div>

          </div>
        </div>

      </nav>

    </header>
  )
}

export default NavBar
