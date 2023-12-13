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
            <img src={Vector4} alt="Vector4" className='absolute w-44 right-px' />
                <div className='flex w-4/6 rounded-3xl shadow-xl px-8 justify-between'>
                    <div className='w-4/6 pt-8 '>
                        <span className='font-black text-2xl'>PTE Study Tools</span>
                        <p>Unique And Powerful Suite Of Software To Run Your Entire Business,
                            Brought To You By A Company With The Long Term Vision To Transform
                            The Way You Work.
                        </p>
                    </div>
                    <img src={MedicalBook} alt="MedicalBook" className='w-1/4' />
                </div>
                <div className='rounded-3xl shadow-xl w-2/6 px-4 py-4'>
                    <img src={VOCAB} alt="VOCAB" className='w-1/5 my-2'/>
                    <span className='font-bold'>Vocab Book</span>
                    <p>So I said codswallop car boot cheers mufty I don't want no agro are you talking
                        the piss cheeky.
                    </p>
                </div>
            </div>
            <div className='flex w-full px-24 justify-between mt-4'>
            <div className='rounded-3xl shadow-xl w-2/6 px-4 py-4'>
                    <img src={Shadowig} alt="Shadowig" className='w-1/5 my-2'/>
                    <span className='font-bold'>Shadowing</span>
                    <p>So I said codswallop car boot cheers mufty I don't want no agro are you talking
                        the piss cheeky.
                    </p>
                </div>
                <div className='rounded-3xl shadow-xl w-2/6 px-4 py-4'>
                    <img src={Alianalysis} alt="Alianalysis" className='w-1/5 my-2'/>
                    <span className='font-bold'>Al Analysis</span>
                    <p>So I said codswallop car boot cheers mufty I don't want no agro are you talking
                        the piss cheeky.
                    </p>
                </div>
                <div className='rounded-3xl shadow-xl w-2/6 px-4 py-4'>
                    <img src={More} alt="More" className='w-1/5 my-2'/>
                    <span className='font-bold'>More</span>
                    <p>So I said codswallop car boot cheers mufty I don't want no agro are you talking
                        the piss cheeky.
                    </p>
                </div>
            </div>
        </>
    )
}

export default PTEstudyTool