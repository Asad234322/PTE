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
            <div className='bd-image2 pb-32'>
                <div className='text-center mb-7'>
                    <div className='mb-5'>
                        <Button data="Know More About PTEkey" />
                    </div>
                    <img src={Diamond11} alt="Diamond11" className='absolute w-36 left-44' />
                    <img src={Diamond} alt="Diamond" className='absolute w-24 right-44' />
                    <div className='mb-5 mt-40'>
                        <Headings heading="Main Features" />
                    </div>
                    <p className='w-3/5 mx-auto'>
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