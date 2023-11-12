
import aboutImg from '../../assets/images/exp03.png';
import aboutCard from '../../assets/images/aboutCard.png';
import { Link } from 'react-router-dom';

const About = () => {
     return (<section>
     <div  className='container'>
<div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
               {/** about image */}
               <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 pl-[60px]'>
                    <img src={ aboutImg } alt='' className='rounded-md'/>
                    <div className='absolute z-20 botton-4 w-[200px] md:w-[300px] right-[-30%] md:right-[30%] lg:light-[22%] mt-[-78px]'>
                         <img src={aboutCard} alt=''className='rounded-md h-[70px] w-[150px]'></img>
                    </div>

               </div>
               {/** about content */}
               <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'> Excited to be the Best</h2>
                    <p className='hand mt-[30px]'>Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.</p>
                    <p className='hand mt-[30px]'>Another effective technique is to explain your code to someone else. This will often cause you to explain the bug to yourself. Sometimes it takes no more than a few sentences, followed by an embarrassed “Never mind, I see what's wrong. Sorry to bother you.” This works remarkably well; you can even use non-programmers as listeners. One university computer center kept a teddy bear near the help desk. Students with mysterious bugs were required to explain them to the bear before they could speak to a human counselor.</p>
                    <Link to='/'><button className='btn pl-3 pr-3'> Learn More</button></Link>
               </div>
          </div>
     </div>
</section>
);
};

export default About;