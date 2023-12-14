import React from 'react'
import Header from './Header'
import Banner from './Banner'
import bgBannerImg from '../images/Group 1.png'


function MainBanner() {
    return (
        <>
            <div className='relative w-full'>
                <div>
                    <img src={bgBannerImg} alt="bgBannerImg" className="float-right w-3/5" />
                </div>
                <div className="absolute top-12 left-35 w-full">
                    <Header />
                </div>
                <div className='absolute top-48 w-11/12'>
                    <Banner />
                </div>
            </div>

        </>
    )
}

export default MainBanner