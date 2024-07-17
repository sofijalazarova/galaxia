import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import Sun from '../../public/sun.png';
import Moon from '../../public/moon.png';

  const SunAndMoon = () => {
  
    return (
      <div> 
        <div className='mb-20 flex flex-wrap gap-10 justify-evenly items-center'>            
            
                <div className='p-[1px]' style={{width: "300px", height: "300px"}}>
                    <div className='flex justify-evenly items-center flex-col'>
                        <a href="/galaxia/planet/sun"><img src={Sun} alt='planet_image' className='object-contain' /></a>           
                    </div>
                </div>
            
         
                <div className='p-[1px] content-center' style={{width: "400px", height: "300px"}}>
                    <div className='flex justify-center items-center flex-col text-center'>
                      <h1 className={styles.sectionHeadText}>Fascinating Fact</h1>
                        <p>The Sun is so large that it accounts for about 99.86% of the total mass of our entire solar system. To put it in perspective, you could fit approximately 1.3 million Earths inside the Sun! This immense mass generates the gravitational force necessary to keep all the planets, including Earth, in orbit around it.</p>         
                    </div>
                </div>
                      
        </div>

        <div className='mb-20 flex flex-wrap gap-10 justify-evenly items-center'>            
            
                <div className='p-[1px] content-center' style={{width: "400px", height: "300px"}}>
                    <div className='flex justify-evenly items-center flex-col text-center'>
                        <h1 className={styles.sectionHeadText}>Did You Know?</h1>
                        <p>The Moon is moving away from Earth at a rate of about 3.8 centimeters (1.5 inches) per year. This gradual drift is caused by tidal interactions between the Earth and the Moon, which create a transfer of energy. Over millions of years, this effect can significantly change the distance between our planet and its only natural satellite!</p>       
                    </div>
                </div>
            
         
                <div className='p-[1px] ' style={{width: "400px", height: "300px"}}>
                    <div className='flex justify-evenly items-center flex-col'>
                        <a href="/galaxia/planet/moon"><img src={Moon} alt='planet_image' className='object-contain' /></a>           
                    </div>
                </div>
                      
        </div>

      
  </div>
  
    );
  };
  
  export default SectionWrapper(SunAndMoon, "SunAndMoon");