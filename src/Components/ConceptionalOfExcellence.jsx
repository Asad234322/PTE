import React from 'react'
import frame from '../images/1 (7) 1.png'
import Button from './Button'
import Headings from './Headings'

function ConceptionalOfExcellence() {
    return (
        <>
            <div className='flex w-full px-24 mt-24'>
                <div className='w-6/12 py-12 px-5'>
                    <Headings heading="The Conceptional Of Excellence"/>
                    <p className='text-justify'>IELTSKEY.Com Is A Studebr Practice Platform For IELTS Acadmic Which Has Been Developed
                        By An Australian Based Training School. The Portal Offers FREE Practice & Comes 
                        With A 'State Of The Art' Artificial Intelligence Scoring With Highly Accurate Results.
                    </p>
                    <Button data="Read More" />
                </div>
                <div className='w-6/12'>
                    <img src={frame} alt="image" className='w-3/4' />
                </div>
            </div>
        </>
    )
}

export default ConceptionalOfExcellence