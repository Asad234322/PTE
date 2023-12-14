import React from 'react'
import Group4 from '../images/Group 4.png'
import Group5 from '../images/Group 5.png'
import Group6 from '../images/Group 6.png'
import Button from './Button'
import Headings from './Headings'
import './../StyleSheet.css'

function Facilities() {
    return (
        <>
            <div className=' relative flex w-full px-24'>
                <div className='w-6/12  flex gap-[30px]  centerImage'>
                    <div className=' bg-white  py-[40px] px-[30px] shadow-md  rounded-[12px] border-[3px]'>
                        <img src={Group4} alt="Group4" className="h-[80px] w-[80px]" />
                        <span className='block w-[143px] font-medium pt-1 pb-1 text-2xl text-[#303030]'>Powerful System</span>
                        <span className='text-lg font-normal text-[#303030]'>Provide Excellent, Customer Services, Answer More Tickets.</span>
                    </div>
                    <div className='flex flex-col gap-[30px]'>
                        <div className=' bg-white  py-[40px] px-[30px]  shadow-md  rounded-[12px] border-[3px]'>
                            <img src={Group5} alt="Group5" className="h-[80px] w-[80px]" />
                            <span className='block w-[143px] font-medium pt-1 pb-1 text-2xl  text-[#303030]'>User Friendly</span>
                            <span className='text-lg font-normal text-[#303030]'>Use Timeline To Plan Projects Rights How The Pieces Fit Together.</span>
                        </div>
                        <div className=' bg-white  py-[40px] px-[30px]  shadow-md  rounded-[12px] border-[3px]'>
                            <img src={Group6} alt="Group6" className="h-[80px] w-[80px]" />
                            <span className='block w-[143px] font-medium pt-1 pb-1 text-2xl text-[#303030]'>Accurate Results</span>
                            <span className='text-lg font-normal text-[#303030]'>Vivamus Massa Eliefind Etima Neque Odio Feugiat Dolor Est.</span>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] pr-10 pl-[5.5rem] pt-20'>
                    <span className='text-blue-800 font-semibold'>Why Choose Us</span>
                    < Headings heading="We Provides The Best Solutions For IELTS." />
                    <p className='my-2 text-justify text-xl'>Unique And Powerful Suite Of Software To Run Your Entire Business, Brought To You By
                        A Company The Long Term Vision To Transform The Way You Work.
                    </p>
                    <p className='my-2 text-justify text-xl'>
                        Unique And Powerful Suite Of Software To Run Your Entire Business.
                    </p>
                    <div className='mt-[4rem]'>
                    <Button data="Practice Now" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Facilities