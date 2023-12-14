import React from 'react'
import frame from '../images/1 (7) 1.png'
import Button from './Button'
import Headings from './Headings'

function ConceptionalOfExcellence() {
    return (
        <>
            <div className='flex w-full px-24 mt-48'>
                <div className='w-6/12 py-12 px-5'>
                    <span className='text-4xl font-bold text-[#2C234D]  leading-[48px]'>The Conceptional Of Excellence</span>
                    <p className='text-justify text-xl font-normal text-[#5D5A67] leading-[32px]'>IELTSKEY.Com Is A Studebr Practice Platform For IELTS Acadmic Which Has Been Developed
                        By An Australian Based Training School. The Portal Offers FREE Practice & Comes
                        With A 'State Of The Art' Artificial Intelligence Scoring With Highly Accurate Results.
                    </p>
                    <div className='mt-16'>
                        <Button data="Read More" />
                    </div>
                </div>
                <div className='w-6/12'>
                    <img src={frame} alt="image" className='w-8/12 float-left ml-[9rem] mt-6' />
                </div>
            </div>
        </>
    )
}

export default ConceptionalOfExcellence