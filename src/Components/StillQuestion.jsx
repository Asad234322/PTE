import React from 'react'
import QuestionImage from './../images/2 (6) 1.png'
import Headings from './Headings'
import Button from './Button'

function StillQuestion() {
    return (
        <>
            <div className='w-full mt-24'>
                <div className=' w-4/5 mx-auto my-10 py-10 px-10 flex justify-between shadow-xl rounded-lg'>
                    <img src={QuestionImage} alt="QuestionImage" />
                    <div className='w-2/5 mt-10'>
                        <Headings heading="Still have questions? We're here to help" />
                    </div>
                    <div className='mt-12'>
                        <Button data="Get Started Now" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StillQuestion