import exp01 from "../assets/images/hhh.png";
import exp11 from "../assets/images/hb1.png";
import exp12 from "../assets/images/hh.png";
import exp13 from "../assets/images/hb3.jpg";
import exp14 from "../assets/images/hb4.jpg";
import exp15 from "../assets/images/hb5.jpg";
import exp16 from "../assets/images/nh7.webp";
import deb1 from "../assets/images/bug.webp";
import deb3 from "../assets/images/debuger.webp";
import deb2 from "../assets/images/dr.jpg";
import featureImg from "../assets/images/15.png";
import faqImg from "../assets/images/heg-card-tech.png";
import videoIcon from "../assets/images/videoIcon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import {Link} from "react-router-dom"
import {BsArrowRight} from "react-icons/bs";
import About from '../components/About/About';
import ServiceList from '../components/Services/ServicesList';
import ExpertsList from "../components/Experts/ExpertsList";
import Testimonial from "../components/Testimonial/Testimonial";
import FaqList from "../components/Faq/FaqList";

const Home = () => {
  return (
    <>
    {/* --hero section */}
    <>
    <section className='hero__section pt-16 bg-gray-100 pt-[60px] 2xl:h-[800px]'>
  <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center'>
    {/* Left Content */}
    <div className='lg:w-1/2'>
      <h1 className='text-4xl lg:text-6xl font-bold text-headerColor mb-4'>Bring Your Code, We Debug Them</h1>
      <button className=''><Link to='/experts'><span><svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" id="bug"><path fill="#0B4870" d="m231.025 248.015-80.541 80.54a6.392 6.392 0 1 1-9.04-9.04l80.541-80.539a6.392 6.392 0 1 1 9.04 9.039zm-3.04-34.031a6.378 6.378 0 0 1-5.568 1.788 6.394 6.394 0 0 1-5.265-7.349l18.587-112.375a6.398 6.398 0 0 1 7.35-5.264 6.395 6.395 0 0 1 5.264 7.35L229.768 210.51a6.357 6.357 0 0 1-1.783 3.474zm-13.901 13.902a6.368 6.368 0 0 1-3.473 1.781L98.236 248.252a6.393 6.393 0 0 1-2.086-12.614l112.374-18.586a6.395 6.395 0 0 1 5.56 10.834zm157.914-.834a6.362 6.362 0 0 1-3.474 1.781l-112.375 18.589a6.398 6.398 0 0 1-7.352-5.269 6.4 6.4 0 0 1 5.263-7.35l112.376-18.585a6.396 6.396 0 0 1 5.562 10.834zm-43.344-76.666-80.54 80.54a6.392 6.392 0 1 1-9.04-9.04l80.54-80.54a6.393 6.393 0 1 1 9.04 9.04zM227.151 371.897a6.394 6.394 0 0 1-10.831-5.562l18.584-112.375a6.402 6.402 0 0 1 7.35-5.264 6.397 6.397 0 0 1 5.266 7.353l-18.586 112.373a6.353 6.353 0 0 1-1.783 3.475z"></path><path fill="#0E538C" d="M170.742 153.505a6.377 6.377 0 0 1-3.507 4.679 6.391 6.391 0 0 1-8.545-2.946L108.816 52.835a6.4 6.4 0 0 1 2.948-8.547 6.394 6.394 0 0 1 8.546 2.948l49.874 102.401a6.37 6.37 0 0 1 .558 3.868zm-12.699 4.332a6.384 6.384 0 0 1 .83 5.79 6.392 6.392 0 0 1-8.126 3.958L43.071 130.442a6.4 6.4 0 0 1-3.958-8.129 6.394 6.394 0 0 1 8.127-3.958l107.675 37.143a6.366 6.366 0 0 1 3.128 2.339z"></path><path fill="#FFBE55" d="M294.891 157.386c-41.188-41.188-105.338-43.819-143.281-5.876-37.944 37.943-35.311 102.093 5.876 143.28 41.19 41.189 105.336 43.819 143.281 5.876 37.942-37.942 35.313-102.091-5.876-143.28z"></path><path fill="#0B4870" d="M207.102 238.639c9.984 9.985 9.983 26.175 0 36.159-9.987 9.986-26.174 9.984-36.159 0-9.986-9.986-9.986-26.171 0-36.158 9.984-9.985 26.172-9.988 36.159-.001zm67.797-67.797c9.984 9.983 9.984 26.174 0 36.158-9.986 9.985-26.174 9.984-36.158 0-9.987-9.985-9.985-26.173 0-36.158 9.984-9.985 26.172-9.987 36.158 0zm10.848 78.645c9.984 9.984 9.985 26.174 0 36.158-9.987 9.986-26.176 9.984-36.16 0-9.986-9.985-9.986-26.172 0-36.158 9.985-9.985 26.174-9.986 36.16 0zm-86.074-140.312c-21.318-21.317-58.834-18.36-83.796 6.601-24.963 24.964-27.919 62.479-6.601 83.797 21.316 21.316 58.831 18.36 83.794-6.604 24.962-24.961 27.92-62.478 6.603-83.794z"></path><circle cx="108.72" cy="38.864" r="12.637" fill="#0B4870"></circle><circle cx="38.763" cy="120.097" r="12.637" fill="#0B4870"></circle></svg></span>
                <button className="btn pr-2 pl-2">SEND BUGS <BsArrowRight className='group hover:text-white w-6 h-5'/></button>
              </Link></button>
    </div>

    {/* Right Content - Paragraph and Images */}
    <div className='lg:w-1/2 flex flex-col items-end'>
      {/* Paragraph */}
      <div className='grid grid-cols-1 lg:grid-cols-6 gap-4'>
        <p className='primaryColor text-lg lg:w-[570px] lg:col-span-6 text-headerColor'>
          Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning. ― <span className='text-yellowColor'> Rick Cook</span>
        </p>
      </div>

      {/* Images */}
      <div className='flex space-x-4 mt-6'>
        <div className='flex gap-[30px] justify-start flex-1'>
          <div>
            <img src={exp12} className='w-full h-auto mb-4 rounded-lg' alt=''/>
          </div>
          <div className='mt-4'>
            <img src={exp01} className='w-full mb-4 rounded-lg' alt=''/>
            <img src={exp11} className='w-full rounded-lg' alt=''/>
          </div>
        </div>

        <div className='flex gap-[30px] justify-end flex-1'>
          <div>
            <img src={exp13} className='w-full h-auto mb-4 rounded-lg' alt=''/>
            <img src={exp16} className='w-full h-auto mb-4 rounded-lg' alt=''/>
          </div>
          <div className='mt-4'>
            <img src={exp14} className='w-full mb-4 rounded-lg' alt=''/>
            <img src={exp15} className='w-full rounded-lg' alt=''/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>We do provide the best services</h2>
            <p className='text__para text-center'> As software debuger we are experienced engineer with years of experience in this game</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]'>
            <div className='py-[30px] px-5 border border-solid border-[#181A1E]'>
              <div className='flex items-center justify-center'>
              <img src={deb1} className="rounded-sm h-[300px] w-[500px]"alt=''/>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'> Our Debuggers

                </h2>
                <p className='text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center '>
                  Do not hesitate to bring your codes to experienced Gulu
                </p>
                <Link to='/experts' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-tahiti hover:border-none
'><BsArrowRight className='group hover:text-white w-6 h-5'/></Link>
              </div>
            </div>
            <div className='py-[30px] px-5 border border-solid border-[#181A1E]border'>
              <div className='flex items-center justify-center '>
              <img src={deb2} className="rounded-sm h-[300px] w-[500px]"alt=''/>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'> Our Address

                </h2>
                <p className='text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center '>
                  Do not hesitate to bring your codes to experienced Gulu
                </p>
                <Link to='/experts' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-tahiti hover:border-none
'><BsArrowRight className='group-hover:text-white w-6 h-5'/></Link>
              </div>
            </div>
            <div className='py-[30px] px-5 border border-solid border-[#181A1E]'>
              <div className='flex items-center justify-center'>
              <img src={deb3} className="rounded-sm h-[300px] w-[500px]" alt=''/>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'> Book a Debugger

                </h2>
                <p className='text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center '>
                  Do not hesitate to bring your codes to experienced Gulu
                </p>
                <Link to='/experts' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-tahiti hover:border-none
'><BsArrowRight className='group hover:text-white w-6 h-5'/></Link>
              </div>
            </div>
          </div>

          
        </div>
      </section>
      {/*** end section hero */}
      </>
      {/*** section about us start */}
      <About/>
      {/*** end section about us start */}

      {/*** section services start */}
      <section className='services__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='xl:w-[470] mx-auto'>
            <h2 className='heading text-center'>
Our Technical Services
            </h2>
            <p className='text__para text center'>
              As software debuger we are experienced engineers with years of experience in different new technologies.
            </p>
          </div>
          {/** services injection */}
          <ServiceList/>
          {/** end services injection */}
        </div>
      </section>
      {/*** end section services */}
      {/*** section features us start */}
      <section>
        <div className="container">
          <div className="flex justify-between items-center flex-col lg:flex-row">
            {/* =========== feature content ============ */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual Consultation <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para ">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para ">
                  2. Search for your favolite engineer here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our engineers who are accepting new clients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to='/experts'>
                <button className="btn pr-2 pl-2">HIRE EXPERT <BsArrowRight className='group hover:text-white w-6 h-5'/></button>
              </Link>
            </div>

            {/* ========= feature img ======== */}
            <div className="relative z-10  xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4 rounded-md" alt="about_img" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0  md:bottom-[100px]  md:left-[20px] z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 font-[600] text-headingColor">
                      Mond, 29
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 font-[400] text-textColor">
                      11:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded-[4px] py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] rounded-full  text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 font-[500] text-irisBlueColor mt-2 lg:mt-4 ">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" className='w-[26px] h-[26px]'/>
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*** end section features us */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great Experts</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our debuging System offers unmatched,
              expert in this industry.
            </p>
          </div>
{/** experts injection */}
          <ExpertsList />
          {/** end experts injection */}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" className='rounded-md'/>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved clients
              </h2>
{/** faq injection */}
              <FaqList />
              {/** end faq injection */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our clients say</h2>
            <p className="text__para text-center">
              World-class team with clients on heart. Our debuging services offers unmatched,
              expert in this industry.
            </p>
          </div>
{/** testimonies injection */}
          <Testimonial />
          {/** end testimonies injection */}
        </div>
      </section>
      
    </>
  );
};

export default Home

