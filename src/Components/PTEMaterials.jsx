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
        <div className='text-center'>
                <Headings heading="Download PTE Material" />
                <p className='w-3/5 mx-auto my-6'>Unique And Powerful Suite Of Software To Run Your Entire Business,
                    Brought To You By A Company With The Long Term Vision To Transform
                    The Way You Work.
                </p>
            </div>
            <div className='flex ml-7 flex-wrap px-24 mt-24 '>
                <div className='flex shadow-md rounded-3xl py-6 px-6 my-6 mx-6 bg-white'>
                    <img src={Microphone} alt="Microphone" className='w-14 h-14' />
                    <div className='w-4/5 mx-auto'>
                        <span className='font-bold'>Speaking Templates</span>
                        <p>
                            Download Describe Image Download Re-tell Lecture.
                        </p>
                    </div>
                </div>
                <div className='flex shadow-md rounded-3xl py-6 px-6 my-6 mx-6 bg-white'>
                    <img src={write} alt="write" className='w-14 h-14' />
                    <div className='w-4/5 mx-auto'>
                        <span className='font-bold'>Writing Templates</span>
                        <p>
                            Download Summarize Spoken Text Download Eassy
                        </p>
                    </div>
                </div>
                <div className='flex shadow-md rounded-3xl py-6 px-6 my-6 mx-6 w-5/12 bg-white'>
                    <img src={Grammer} alt="Grammer" className='w-14 h-14' />
                    <div className='w-4/5 mx-auto'>
                        <span className='font-bold'>Grammers Rules</span>
                        <p>
                            Improve Your Scores with the Help of English grammers rule
                        </p>
                    </div>
                </div>
                <div className='flex shadow-md rounded-3xl py-6 px-6 my-6 mx-6 w-5/12 bg-white'>
                    <img src={pte} alt="pte" className='w-14 h-14' />
                    <div className='w-4/5 mx-auto'>
                        <span className='font-bold'>PTE Prediction File</span>
                        <p>
                            Download Describe Image Download Re-tell Lecture.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PTEMaterials