import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import earthImage from "../../public/earth.png";
import marsImage from "../../public/mars.png";
import neptuneImage from "../../public/neptune.png";
import jupiterImage from "../../public/jupiter.png";
import uranusImage from "../../public/uranus.png";
import venusImage from "../../public/venus.png";
import mercuryImage from "../../public/planet.png";
import saturnImage from '../../public/saturn.png';
import { useNavigate } from "react-router-dom";


export const Card = (props) => {


  const navigate = useNavigate();

  return(
    
    <Tilt className='xs:w-[250px] w-full'>
    <div className='w-full p-[1px] rounded-[10px] shadow-card'>
      <div className='rounded-[10px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        {/* <a href={props.path}><img src={props.imagePath} alt='planet_image' className='w-30 h-30 object-contain' /></a> */}
        <img
                    src={props.imagePath}
                    alt='planet_image'
                              className='w-30 h-30 object-contain'
                              onClick={() => {                          
                                navigate(`/galaxia/planet/${props.name}`);
                              }}
                />      
        <h3 className='text-white text-[20px] font-bold text-center'>{props.description}</h3>
      </div>
    </div>
  </Tilt>
  )
}

const About = () => {

  return (
    <div className="content-center">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Explore the Cosmos with Our Free Astronomy Courses!</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px] text-center'
      >
        Embark on a celestial journey with our captivating and insightful astronomy courses.
        At GalaxiaCourses, we're passionate about making the wonders of the universe accessible to everyone. Whether you're a beginner or an avid stargazer, our courses are designed to spark your curiosity and deepen your understanding of the cosmos.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>            
              <Card name="mercury" description="Mercury" imagePath={mercuryImage}/>
              <Card name="venus" description="Venus" imagePath={venusImage}/>    
              <Card name="earth" description="Earth" imagePath={earthImage}/>    
              <Card name="mars" description="Mars" imagePath={marsImage}/>          
              <Card name="jupiter" description="Jupiter" imagePath={jupiterImage}/>
              <Card name="saturn" description="Saturn" imagePath={saturnImage}/>    
              <Card name="uranus" description="Uranus" imagePath={uranusImage}/>    
              <Card name="neptune" description="Neptune" imagePath={neptuneImage}/>              
      </div>
</div>

  );
};

export default SectionWrapper(About, "about");