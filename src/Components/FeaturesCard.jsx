import React from 'react'
import Frame2550 from './../images/Frame 2550.png'
import Frame2551 from './../images/Frame 2550 (1).png'
import Frame2552 from './../images/Frame 2550 (2).png'
import Frame2553 from './../images/Frame 2550 (3).png'
import Frame2554 from './../images/Frame 2550 (4).png'
import Frame2555 from './../images/Frame 2550 (5).png'
import Button from './Button'

function FeaturesCard() {
    return (
        <>
            <div className='w-full'>
                <div className='flex flex-wrap mt-24 shadow-md rounded-2xl w-4/5 mx-auto px-5 py-5 bg-white'>
                    <div className='w-2/6 my-7'>
                        <img src={Frame2550} alt="Frame2550" className='w-14' />
                        <span className='font-bold leading-9'>Latest & Updated Material</span>
                        <p className='w-3/4'>Material on the portal is regularly updated with real exam questions</p>
                    </div>
                    <div className='w-2/6 my-7'>
                        <img src={Frame2551} alt="Frame2551" className='w-14' />
                        <span className='font-bold leading-9'>Artificle Inteligence</span>
                        <p className='w-3/4'>The portal's Al offers a 95% accuracy & similarly to PTE Algorithm</p>
                    </div>
                    <div className='w-2/6 my-7'>
                        <img src={Frame2552} alt="Frame2552" className='w-14' />
                        <span className='font-bold leading-9'>Full & Sectional Tests</span>
                        <p className='w-3/4'>Alfa PTE offers the most accurate & unique sectional tests</p>
                    </div>
                    <div className='w-2/6 my-7'>
                        <img src={Frame2554} alt="Frame2554" className='w-14' />
                        <span className='font-bold leading-9'>Prediction</span>
                        <p className='w-3/4'>Practice with the highest frequency of prediction questions with Al</p>
                    </div>
                    <div className='w-2/6 my-7'>
                        <img src={Frame2553} alt="Frame2553" className='w-14' />
                        <span className='font-bold leading-9'>Detailed Score Anylysis</span>
                        <p className='w-3/4'>Portal gives an accurate picture of the student's performance </p>
                    </div>
                    <div className='w-2/6 my-7'>
                        <img src={Frame2555} alt="Frame2555" className='w-14' />
                        <span className='font-bold leading-9'>Detailed Webinar</span>
                        <p className='w-3/4'>The daily webinars provide PTE strategies in-depth & are
                            available at one's own convenience
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FeaturesCard