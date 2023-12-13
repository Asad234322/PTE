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
    <div className='w-full mt-20'>
        <div className='w-4/5 mx-auto my-10 flex justify-between'>
            <div className='w-4/12'>
                <img src={Logo} alt="Logo" className='mb-7' />
                <span>Lost The Plot Richard You Mug Cup Of Tea Knackered Boot Bender</span>
                <div className='flex mt-8 justify-between pr-28'>
                    <img src={Facebook} alt="Facebook" />
                    <img src={Vector1} alt="Vector1" />
                    <img src={Vector2} alt="Vector2" />
                    <img src={Vector3} alt="Vector3" />
                    <img src={Vector4} alt="Vector4" />
                </div>
            </div>
            <div className='w-1/5'>
                <span className='mb-7 font-bold block text-xl'>Pearson PTE</span>
                <span className='block pb-1.5'>Pearson Official Website</span>
                <span className='block pb-1.5'>Pearson PTE Mock Tests</span>
                <span className='block pb-1.5'>Book PTE Tests</span>
                <span className='block'>Contact Pearson PTE</span>
            </div>
            <div className='w-1/5'>
                <span className='mb-7 font-bold block text-xl'>PTE Course</span>
                <span className='block pb-1.5'>PTE Speaking Course</span>
                <span className='block pb-1.5'>PTE Writing Course</span>
                <span className='block pb-1.5'>PTE Reading Course</span>
                <span className='block pb-1.5'>PTE Listening Course</span>
            </div>
            <div className='w-1/5'>
                <span className='mb-7 font-bold block text-xl' >Contact Us</span>
                <span className='block pb-2.5'>1700 W Blanke St, kiyev Port South USA, American</span>
                <span className='block '>+3255 456 789</span>
                <span className='block'>Mail@Primary.com</span>
            </div>
        </div>
    </div>
  </>
  )
}

export default Footer