import React from 'react'
import Facebook from './../images/FooterIcons/Facebook.png'
import Vector1 from './../images/FooterIcons/Vector (1).png'
import Vector2 from './../images/FooterIcons/Vector (2).png'
import Vector3 from './../images/FooterIcons/Vector (3).png'
import Vector4 from './../images/FooterIcons/Vector.png'
import Logo from "./../images/logo.svg"

function Footer() {
  return (
  <>
    <div className='w-full pt-[15rem] bg-[#FAFAFA] pb-[3rem] mt-[15rem]'>
        <div className='w-4/5 mx-auto my-10 flex justify-between'>
            <div className='w-4/12'>
                <img src={Logo} alt="Logo" className='mb-7' />
                <span>Lost The Plot Richard You Mug Cup Of Tea Knackered Boot Bender</span>
                <div className='flex mt-8 justify-between pr-28'>
                    <img src={Facebook} alt="Facebook" className='w-[40px] h-[40px]' />
                    <img src={Vector1} alt="Vector1" className='w-[40px] h-[40px]' />
                    <img src={Vector2} alt="Vector2" className='w-[40px] h-[40px]' />
                    <img src={Vector3} alt="Vector3"  className='w-[40px] h-[40px]'/>
                    <img src={Vector4} alt="Vector4" className='w-[40px] h-[40px]'/>
                </div>
            </div>
            <div className='w-1/5'>
                <span className='mb-7 font-semibold block text-[25px] text-[#2C234D] leading-[34px]'>Pearson PTE</span>
                <span className='block pb-1.5 text-[#5D5A67]'>Pearson Official Website</span>
                <span className='block pb-1.5 text-[#5D5A67]'>Pearson PTE Mock Tests</span>
                <span className='block pb-1.5 text-[#5D5A67]'>Book PTE Tests</span>
                <span className='block text-[#5D5A67]'>Contact Pearson PTE</span>
            </div>
            <div className='w-1/5'>
                <span className='mb-7 font-semibold block text-[25px] text-[#2C234D] leading-[34px]'>PTE Course</span>
                <span className='block pb-1.5 text-[#5D5A67]'>PTE Speaking Course</span>
                <span className='block pb-1.5 text-[#5D5A67]'>PTE Writing Course</span>
                <span className='block pb-1.5 text-[#5D5A67]'>PTE Reading Course</span>
                <span className='block pb-1.5 text-[#5D5A67]'>PTE Listening Course</span>
            </div>
            <div className='w-1/5'>
                <span className='mb-7 font-semibold block text-[25px] text-[#2C234D] leading-[34px]' >Contact Us</span>
                <span className='block pb-2.5 text-[#5D5A67]'>1700 W Blanke St, kiyev Port South USA, American</span>
                <span className='block text-[#5D5A67]'>+3255 456 789</span>
                <span className='block text-[#5D5A67]'>Mail@Primary.com</span>
            </div>
        </div>
    </div>
  </>
  )
}

export default Footer