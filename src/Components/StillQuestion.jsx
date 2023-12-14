import React from 'react'
import QuestionImage from './../images/2 (6) 1.png'
import Headings from './Headings'
import Button from './Button'

function StillQuestion() {
    return (
        <>
            <div className='w-full mt-[5rem] absolute '>
                <div className='bg-white w-4/5 mx-auto my-10 py-10 px-10 flex gap-[106px] drop-shadow-2xl rounded-[34px]'>
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