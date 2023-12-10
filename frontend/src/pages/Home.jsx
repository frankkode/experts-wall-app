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
      <h1 className='text-4xl lg:text-6xl font-bold text-headerColor mb-4'>EXPERT WALL</h1>
      <button className=''><Link to='/experts'><span></span>
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

