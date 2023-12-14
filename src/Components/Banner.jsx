import React, { lazy } from 'react'
import Layer1 from '../images/layer 1.png'
import Button from './Button'
import Cube1 from './../images/Cube.png'
import Cube2 from './../images/Cube (1).png'
import Diamond from './../images/Diamond.png'
import Vector1 from './../images/Vector 3.png'

function Banner() {
    return (
        <>
            <div className='flex justify-between'>
                <div className='text-justify ml-28	'>
                    <h1 className=' font-bold text-6xl leading-[72px] text-[#2C234D] mt-16'>Practice
                        <span className="text-[#5838FC]"> ILETS</span><br></br>
                        with AI Scorings,<br></br> for <span className="text-[#5838FC]">Free</span>
                    </h1>
                    
                    <img src={Cube1} alt="Cube1" className='absolute top-[-1rem] left-56' />
                    <img src={Cube2} alt="Cube2" className='absolute bottom-0 left-[3rem]' />
                    <img src={Diamond} alt="Diamond" className='absolute bottom-[-1rem] left-[41rem] w-24' />
                    <div className='mt-[3rem] absolute bottom-[-2rem]'>
                        <Button data="Practice Now" />
                    </div>
                </div>
                <img src={Layer1}
                    alt="Layer1 cl"
                    className='block w-[35rem] h-[25rem]' />
                <img src={Vector1} alt="Vector1" className='absolute top-[21rem] w-28' />
            </div>
        </>
    )
}

export default Banner