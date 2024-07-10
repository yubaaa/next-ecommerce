import Link from "next/link";
import Image from "next/image";
import React from "react";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8  gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/7615526/pexels-photo-7615526.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "
          />
          <Image
            src="https://images.pexels.com/photos/26051261/pexels-photo-26051261/free-photo-of-bois-oiseau-eau-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>

        <div className="text-sm text-gray-500">My desc</div>
        <button className="rounded-2xl ring-1 ring-yubi text-yubi py-2 px-4 text-xs hover:bg-yubi hover:text-white w-max">
          ADD TO CART
        </button>
      </Link>
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/7615526/pexels-photo-7615526.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "
          />
          <Image
            src="https://images.pexels.com/photos/26051261/pexels-photo-26051261/free-photo-of-bois-oiseau-eau-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>

        <div className="text-sm text-gray-500">My desc</div>
        <button className="rounded-2xl ring-1 ring-yubi text-yubi py-2 px-4 text-xs hover:bg-yubi hover:text-white w-max">
          ADD TO CART
        </button>
      </Link>
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/7615526/pexels-photo-7615526.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "
          />
          <Image
            src="https://images.pexels.com/photos/26051261/pexels-photo-26051261/free-photo-of-bois-oiseau-eau-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>

        <div className="text-sm text-gray-500">My desc</div>
        <button className="rounded-2xl ring-1 ring-yubi text-yubi py-2 px-4 text-xs hover:bg-yubi hover:text-white w-max">
          ADD TO CART
        </button>
      </Link>
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/7615526/pexels-photo-7615526.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "
          />
          <Image
            src="https://images.pexels.com/photos/26051261/pexels-photo-26051261/free-photo-of-bois-oiseau-eau-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>

        <div className="text-sm text-gray-500">My desc</div>
        <button className="rounded-2xl ring-1 ring-yubi text-yubi py-2 px-4 text-xs hover:bg-yubi hover:text-white w-max">
          ADD TO CART
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
