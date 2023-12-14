import React from 'react'
import Headings from './Headings'
import Microphone from './../images/microphone.png'
import Grammer from './../images/Grammer.png'
import pte from './../images/pte.png'
import write from './../images/Write.png'
import './../StyleSheet.css'

function PTEMaterials() {
    return (
        <>
            <div className='BG_image'>
                <div className='text-center pt-[10rem]'>
                    <div className='pl-[27rem]'>
                        <Headings heading="Download PTE Material" />
                    </div>
                    <p className='w-3/5 mx-auto my-6 font-normal text-xl'>Unique And Powerful Suite Of Software To Run Your Entire Business,
                        Brought To You By A Company With The Long Term Vision To Transform
                        The Way You Work.
                    </p>
                </div>
                <div className='flex ml-7 flex-wrap px-24 mt-[3rem] gap-8 '>
                    <div className='flex border-2 border-[#F9F9F9] shadow-md rounded-[20px] py-[35px] px-6 bg-white w-[45%]'>
                        <img src={Microphone} alt="Microphone" className='w-14 h-14 mt-4' />
                        <div className='w-4/5 mx-auto'>
                            <span className='text-[32px] font-semibold text-[#2C234D]'>Speaking Templates</span>
                            <p className='font-normal text-xl text-[#5D5A67]'>
                                Download Describe Image <br></br> Download Re-tell Lecture.
                            </p>
                        </div>
                    </div>
                    <div className='flex border-2 border-[#F9F9F9] shadow-md rounded-[20px] py-[35px] px-6 bg-white w-[45%]'>
                        <img src={write} alt="write" className='w-14 h-14 mt-4' />
                        <div className='w-4/5 mx-auto'>
                            <span className='text-[32px] font-semibold text-[#2C234D]'>Writing Templates</span>
                            <p className='font-normal text-xl text-[#5D5A67]'>
                                Download Summarize Spoken Text Download Eassy
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <div className='flex border-2 border-[#F9F9F9] shadow-md rounded-[20px] py-[35px] px-6  bg-white w-[45%]'>
                        <img src={Grammer} alt="Grammer" className='w-14 h-14 mt-4' />
                        <div className='w-4/5 mx-auto'>
                            <span className='text-[32px] font-semibold text-[#2C234D]'>Grammers Rules</span>
                            <p className='font-normal text-xl text-[#5D5A67]'>
                                Improve Your Scores with the Help of English grammers rule
                            </p>
                        </div>
                    </div>
                    <div className='flex  border-2 border-[#F9F9F9] shadow-md rounded-[20px] py-[35px] px-6 w-[45%] bg-white'>
                        <img src={pte} alt="pte" className='w-14 h-14 mt-4' />
                        <div className='w-4/5 mx-auto'>
                            <span className='text-[32px] font-semibold text-[#2C234D]'>PTE Prediction File</span>
                            <p className='font-normal text-xl text-[#5D5A67]'>
                            Our Prediction File has the highest frequency of repeated questions
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PTEMaterials