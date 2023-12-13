import React from 'react'
import Frame2563 from '../images/Frame 2563.png'
import Button from './Button'

function PTEpracticePlatform() {
    return (
        <>
            <div className='flex w-full px-24 mt-24'>
                <div className='w-3/5 py-12 px-5'>
                    <p className='text-4xl font-bold my-4'>PTE Al Practice Platform</p>
                    <span className='text-sky-800 my-4'>Who Else Do You Know Who'll Do That For You ?</span>
                    <p className='text-justify w-4/6 my-6'>Unique And Powerful Suite Of Software To Run Your Entire Business,
                        Brought To You By A Company With The Long Term Vision To Transform
                        The Way You Work.
                    </p>
                    <Button data="Practice Now" />
                </div>
                    <img src={Frame2563} alt="Frame2563" className='w-1/3 float-right' />
            </div>
        </>
    )
}

export default PTEpracticePlatform