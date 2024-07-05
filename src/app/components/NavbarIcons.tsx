"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import CartModal from './CartModal'

const NavbarIcons = () => {
    const [isProfileOpen ,SetIsProfileOpen] = useState(false)
    const [isCartOpen ,SetIsCartOpen] = useState(false)

    const router= useRouter();

   const  isLoggedIn=true
    const handleProfile =() =>{

        if(!isLoggedIn){

            router.push("/Login")

        }
        SetIsProfileOpen((prev)=>(!prev))

    }

  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
     <Image src="/profile.png" alt='' width={22 } height={22} className='cursor-pointer' onClick={handleProfile} />
       {
        isProfileOpen && <div className='absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
          <Link href="/" >Profile</Link>
          <div className='mt-2 cursor-pointer'>Logout</div>
 
        </div>
       }

     <Image src="/notification.png" alt='' width={22 } height={22} className='cursor-pointer' />
     <div className='relative cursor-pointer'>
     <Image src="/cart.png" alt='' width={22 } height={22} className='cursor-pointer'
     onClick={()=>SetIsCartOpen((prev)=>(!prev))}
     />   
     <div className='absolute -top-4 -right-4 w-6 h-6 bg-yubi text-white rounded-full  text-sm flex items-center justify-center'>2</div> 
     </div>
    {isCartOpen && <CartModal />}
    </div>
  )
}

export default NavbarIcons
