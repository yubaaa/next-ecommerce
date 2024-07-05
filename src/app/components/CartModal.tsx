"use client"

import Image from 'next/image'
import React from 'react'

const CartModal = () => {

const cartItems = true

  return (
    <>
      
       <div className=" w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col">
         {!cartItems ? (
            <div className=''> cart is empty</div>
         ) : (
            <>
            <h2 className='text-xl font-semibold font-serif mb-6'>Shopping Cart </h2>
            <div className="flex flex-col gap-8">
                {/*ITEM*/}
            <div className='flex gap-4'>
                <Image src="https://images.pexels.com/photos/7615526/pexels-photo-7615526.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={72} height={96} className='object-cover rounded-md' alt='' />
                <div className='flex flex-col justify-between w-full'>
                     <div className="">
                        <div className="">
                            <div className="flex items-center justify-between gap-8">
                                <h3 className='font-semibold'>Product name</h3>
                                <div className="p-1 bg-gray-50 rounded-sm font-semibold ">$33</div>
                            </div>
                            <div className='text-m text-gray-500'>Availabale</div>
                        </div>
                     </div>
                <div className="flex justify-between text-sm">
                    <span className='text-gray-500'>Qte.2</span>
                    <span className='text-blue-500  cursor-pointer'>Remove</span>
                </div>
                </div>
            </div>
             {/*ITEM*/}
             <div className='flex gap-4'>
                <Image src="https://images.pexels.com/photos/7615526/pexels-photo-7615526.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={72} height={96} className='object-cover rounded-md' alt='' />
                <div className='flex flex-col justify-between w-full'>
                     <div className="">
                        <div className="">
                            <div className="flex items-center justify-between gap-8">
                                <h3 className='font-semibold'>Product Name</h3>
                                <div className="p-1 bg-gray-50 rounded-sm font-semibold ">$33</div>
                            </div>
                            <div className='text-m text-gray-500'>Availabale</div>
                        </div>
                     </div>
                <div className="flex justify-between text-sm">
                    <span className='text-gray-500'>Qte.2</span>
                    <span className='text-blue-500 cursor-pointer '>Remove</span>
                </div>
                </div>
            </div>
            </div>

            <div className="mt-7">
                <div className="flex items-center justify-between font-semibold">
                    <span className="font-semibold"> Subtotal
                    </span>
                    <span className="font-semibold">$79</span>
                </div>
                <p className="text-gray-500 text-sm mt-2 mb-2">Shipping and taxes calculated at checkout.</p>
                <div className="flex justify-between text-sm">
                    <button className=" ring-1 ring-gray-300 rounded-md py-3 px-4 ">View Cart</button>
                    <button className="bg-black rounded-md py-3 px-4 text-white ">Checkout</button>
                </div>
            </div>
           </>
         )}

       </div>
    
    </>
  )
}

export default CartModal
