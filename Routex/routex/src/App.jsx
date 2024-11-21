import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaAngleDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdModeOfTravel } from "react-icons/md";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { MdLocalAirport } from "react-icons/md";

function App() {

  return (
    <>
      <header>
        <div class="container mx-auto px-4 grid">
          <div class="flex">
            <div class="w-1/4 flex items-center">
              <a href="#"><img src="../../../../public/logo.svg" alt="logo" /></a>
            </div>
            <div class="w-1/2">
              <ul class="list-none flex justify-cente">
                <li className='py-8 header-list'><a href="#" className='px-3 text-[#83CD20] font-[700] leading-[26px] flex items-center gap-[.2rem]'>HOME <FaAngleDown /></a></li>
                <li className='py-8 header-list'><a href="#" className='px-3 text-[#034833] font-[700] leading-[26px] flex items-center gap-[.2rem]'>ABOUT US</a></li>
                <li className='py-8 header-list'><a href="#" className='px-3 text-[#034833] font-[700] leading-[26px] flex items-center gap-[.2rem]'>STORY <FaAngleDown /></a></li>
                <li className='py-8 header-list'><a href="#" className='px-3 text-[#034833] font-[700] leading-[26px] flex items-center gap-[.2rem]'>VISA <FaAngleDown /></a></li>
                <li className='py-8 header-list'><a href="#" className='px-3 text-[#034833] font-[700] leading-[26px] flex items-center gap-[.2rem]'>BLOG <FaAngleDown /></a></li>
                <li className='py-8 header-list'><a href="#" className='px-3 text-[#034833] font-[700] leading-[26px] flex items-center gap-[.2rem]'>PAGE <FaAngleDown /></a></li>
                <li className='py-8 header-list'><a href="#" className='px-3 text-[#034833] font-[700] leading-[26px] flex items-center gap-[.2rem]'>CONTACT</a></li>
              </ul>
            </div>
            <div class="w-1/4 flex flex-wrap justify-end items-center">
              <div className='header-button'>
                <a href="#" className="text-[#FFFFFF] text-[14px] not-italic leading-[30px] font-[600] inline-flex text-center rounded-[150px] overflow-hidden bg-[#83CD20] z-[5] flex items-center gap-[.6rem]">
                  Get An Appointment <FaArrowRightLong />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div class="container mx-auto px-4 grid">
            <div className="flex">
              <div className="w-1/3 service__card px-4">
                <div className="service__carditem">
                  <div className="service__icon-item bg-[#83CD20]">
                    <MdModeOfTravel />
                  </div>
                  <h4 className='text-[#034833] font-[700] text-[22px] leading-[30px] not-italic'>Food and Wine Tours</h4>
                  <p className='text-[#727272] font-[400] leading-[30px] not-italic'>Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac </p>
                </div>
              </div>
              <div className="w-1/3 service__card px-4">
                <div className="service__carditem">
                  <div className="service__icon-item bg-[#83CD20]">
                    <MdLocalAirport />
                  </div>
                  <h4 className='text-[#034833] font-[700] text-[22px] leading-[30px] not-italic'>Travel Opportunities</h4>
                  <p className='text-[#727272] font-[400] leading-[30px] not-italic'>Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac </p>
                </div>
              </div>
              <div className="w-1/3 service__card px-4">
                <div className="service__carditem">
                  <div className="service__icon-item bg-[#83CD20]">
                    <MdOutlineAirplaneTicket />
                  </div>
                  <h4 className='text-[#034833] font-[700] text-[22px] leading-[30px] not-italic'>Solo Travel Planning</h4>
                  <p className='text-[#727272] font-[400] leading-[30px] not-italic'>Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='relative process_overview'>
            <div className="process_overview-bg-img absolute top-0 left-0 z-[-1] bg-center bg-cover bg-no-repeat opacity-[.2]"></div>
            <div class="container mx-auto px-4 grid">
              <div className="process_overview-head">
                <h6 className='text-[#034833] font-[700] leading-[14px] text-center gap-[10px] not-italic text-center tracking-[.25em] uppercase'>Process Overview</h6>
                <h2 className='text-[#034833] text-center not-italic leading-[60px] font-[700] '>Unforgettable Getaways
                  <br />
                  Escaping Routine</h2>
              </div>
              <div className="flex">
                <div className="w-1/3">1</div>
                <div className="w-1/3">1</div>
                <div className="w-1/3">1</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
