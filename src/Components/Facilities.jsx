import React from 'react'
import Group4 from '../images/Group 4.png'
import Group5 from '../images/Group 5.png'
import Group6 from '../images/Group 6.png'
import Button from './Button'
import Headings from './Headings'

function Facilities() {
    return (
        <>
            <div className=' relative flex w-full px-24'>
                <div className='w-6/12 flex justify-between'>
                    <div className='absolute top-36 w-44 py-6 pr-2 pl-2 shadow-md h-56 rounded-3xl'>
                        <img src={Group4} alt="Group4" className="h-10 w-10"/>
                        <span className='block font-bold pt-1 pb-1'>Powerful System</span>
                        <span>Provide Excellent, Customer Services, Answer More Tickets.</span>
                    </div>
                    <div className='absolute left-72 w-44 py-6 pr-2 pl-2 shadow-md h-56 rounded-3xl'>
                        <img src={Group5} alt="Group5" className="h-10 w-10"/>
                        <span className='block font-bold pt-1 pb-1'>User Friendly</span>
                        <span>USe Timeline To Plan Projects Rights How The Pieces Fit Together.</span>
                    </div>
                    <div className='absolute left-72 top-56 w-44 py-6 pr-2 pl-2 shadow-md h-56 rounded-3xl'>
                        <img src={Group6} alt="Group6" className="h-10 w-10" />
                        <span className='block font-bold pt-1 pb-1'>Accurate Results</span>
                        <span>Vivamus Massa Eliefind Etima Neque Odio Feugiat Dolor Est.</span>
                    </div>
                </div>
                <div className='w-5/12 px-10 pt-20'>
                    <span className='text-blue-800 font-semibold'>Why Choose Us</span>
                    < Headings heading="We Provides The Best Solutions For IELTS."/>
                    <p className='my-2'>Unique And Powerful Suite Of Software To Run Your Entire Business, Brought To You By
                        A Company The Long Term Vision To Transform The Way You Work.
                    </p>
                    <p className='my-2'>
                        Unique And Powerful Suite Of Software To Run Your Entire Business.
                    </p>
                    <Button data="Practice Now"  />

                </div>
            </div>
        </>
    )
}

export default Facilities