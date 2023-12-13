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
                    <h1 className=' font-bold text-6xl leading-snug text-gray-600 mt-16'>Practice
                        <span className="text-purple-500"> ILETS</span><br></br>
                        with AI Scorings,<br></br> for <span className="text-purple-500">Free</span>
                    </h1>
                    <div className='mt-12'>
                        <Button data="Practice Now" />
                    </div>
                    <img src={Cube1} alt="Cube1" className='absolute top-4 left-40' />
                    <img src={Cube2} alt="Cube2" className='absolute bottom-12' />
                    <img src={Diamond} alt="Diamond" className='absolute bottom-8 left-2/4 w-14' />
                </div>
                <img src={Layer1}
                    alt="Layer1 cl"
                    className='block' />
                <img src={Vector1} alt="Vector1" className='absolute top-72 w-44' />
            </div>
        </>
    )
}

export default Banner