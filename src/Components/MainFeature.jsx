import React from 'react'
import Headings from './Headings'
import Button from './Button'
import Diamond11 from './../images/Diamond11.png'
import Diamond from './../images/Diamond.png'
import FeaturesCard from './FeaturesCard'
import './../StyleSheet.css'

function MainFeature() {
    return (
        <>
            <div className='bd-image2 pb-[17rem]'>
                <div className='text-center mb-7'>
                    <div className='mb-5 ml-[-1rem] pt-[5rem]'>
                        <Button data="Know More About PTEkey" />
                    </div>
                    <img src={Diamond11} alt="Diamond11" className='absolute w-36 left-[5rem]' />
                    <img src={Diamond} alt="Diamond" className='absolute w-24 right-44 top-[265rem]' />
                    <div className='mb-5 mt-40 pl-[27rem]'>
                        <Headings heading="Main Features" />
                    </div>
                    <p className='w-3/5 mx-auto text-xl text-[#5D5A67] leading-[24px]'>
                        PTEkey.Com Offers A Vareity Of Features That Will Help PTE Aspirants In
                        Preparing, Practicing & Achieving Their Desired Scores.
                    </p>
                </div>
                <FeaturesCard />
                <div>
                <div className='text-center mt-16'>
                    <Button data="Download Our Mobile App" />
                </div>
                </div>
            </div>

        </>
    )
}

export default MainFeature