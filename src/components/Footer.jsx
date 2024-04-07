import React from 'react'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className='screen-max-width'>
            <div className=''>
                <p className='font-semibold text-gray text-xs'>
                    More way to shop
                    <span className='underline text-blue'>
                    {' '}Find An Apple Store {' '}
                    </span>
                    Or
                    <span className='underline text-blue'>
                    {' '}Other Retailer {' '}
                    </span>
                    Near You.
                </p>
                <p className='font-semibold text-gray text-xs'>
                <span className='underline text-blue'>
                Find a retailer {' '}
                </span>
                near you. 
                </p>
            </div>
            <div className='bg-neutral-700 my-5 h-[1px] w-full'>
                <p className='font-semibold text-gray text-s'>
            Copyright © 2024 Apple Inc. All rights reserved.
            </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer