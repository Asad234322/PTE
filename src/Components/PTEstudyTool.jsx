import React from 'react'
import MedicalBook from '../images/Medical Book.png'
import VOCAB from '../images/VOCAB.png'
import Alianalysis from '../images/AI-ANALYSIS.png'
import Shadowig from '../images/SHADOWING.png'
import More from '../images/more.png'
import Vector4 from './../images/Vector 4.png'

function PTEstudyTool() {
    return (
        <>
            <div className='flex w-full px-24 mt-24 justify-between'>
            <img src={Vector4} alt="Vector4" className='absolute w-44  h-[50rem] right-px' />
                <div className='flex w-[66%] h-[263px] rounded-[10px] shadow-xl px-8 justify-between border-2 border-[#F9F9F9]'>
                    <div className='w-4/6 pt-8 '>
                        <span className='text-4xl font-bold text-[#2C234D]'>PTE Study Tools</span>
                        <p className='text-xl leading-[32px] font-normal text-[#5D5A67]'>Unique And Powerful Suite Of Software To Run Your Entire Business,
                            Brought To You By A Company With The Long Term Vision To Transform
                            The Way You Work.
                        </p>
                    </div>
                    <img src={MedicalBook} alt="MedicalBook" className='w-1/4' />
                </div>
                <div className='rounded-[10px] z-40 border-2 border-[#F9F9F9] shadow-xl w-[32%] h-[263px] px-4 py-4'>
                    <img src={VOCAB} alt="VOCAB" className='w-[80px] h-[80px] my-2'/>
                    <span className='font-bold text-[22px] leading-[27px] text-[#2C234D]'>Vocab Book</span>
                    <p className='text-lg leading-[22px] text-[#5D5A67] font-normal'>So I said codswallop car boot cheers mufty I don't want no agro are you talking
                        the piss cheeky.
                    </p>
                </div>
            </div>
            <div className='flex w-full px-24 justify-between mt-[1.5rem]'>
            <div className='rounded-[10px] border-2 border-[#F9F9F9] shadow-xl w-[32%] h-[263px] px-4 py-4'>
                    <img src={Shadowig} alt="Shadowig" className='w-[80px] h-[80px] my-2'/>
                    <span className='font-bold text-[22px] leading-[27px] text-[#2C234D]'>Shadowing</span>
                    <p className='text-lg leading-[22px] text-[#5D5A67] font-normal'> So I said codswallop car boot cheers mufty I don't want no agro are you talking
                        the piss cheeky.
                    </p>
                </div>
                <div className='rounded-[10px] border-2 border-[#F9F9F9] shadow-xl w-[32%] h-[263px] px-4 py-4'>
                    <img src={Alianalysis} alt="Alianalysis" className='w-[80px] h-[80px] my-2'/>
                    <span className='font-bold text-[22px] leading-[27px] text-[#2C234D]'>Al Analysis</span>
                    <p className='text-lg leading-[22px] text-[#5D5A67] font-normal'>So I said codswallop car boot cheers mufty I don't want no agro are you talking
                        the piss cheeky.
                    </p>
                </div>
                <div className='rounded-[10px]  border-2 border-[#F9F9F9] shadow-xl w-[32%] h-[263px] px-4 py-4'>
                    <img src={More} alt="More" className='w-[80px] h-[80px] my-2'/>
                    <span className='font-bold text-[22px] leading-[27px] text-[#2C234D]'>More</span>
                    <p className='text-lg leading-[22px] text-[#5D5A67] font-normal'>So I said codswallop car boot cheers mufty I don't want no agro are you talking
                        the piss cheeky.
                    </p>
                </div>
            </div>
        </>
    )
}

export default PTEstudyTool