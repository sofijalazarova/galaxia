import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


export const Card = (props) => {

  return(
    
    <Tilt className='xs:w-[250px] w-full'>
    <div className='w-full p-[1px] rounded-[10px] shadow-card'>
      <div className='rounded-[10px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <a href={props.path}><img src={props.imagePath} alt='planet_image' className='w-30 h-30 object-contain' /></a>
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
              <Card description="Mercury" imagePath="src\assets\planets\mercury.png" path="/planet/mercury"/>
              <Card description="Venus" imagePath="src\assets\planets\venus.png" path="/planet/venus"/>    
              <Card description="Earth" imagePath="src\assets\planets\earth.png" path="/planet/earth"/>    
              <Card description="Mars" imagePath="src\assets\planets\mars.png" path="/planet/mars"/>          
              <Card description="Jupiter" imagePath="src\assets\planets\jupiter.png" path="/planet/jupiter"/>
              <Card description="Saturn" imagePath="src\assets\planets\saturn.png" path="/planet/saturn"/>    
              <Card description="Uranus" imagePath="src\assets\planets\uranus.png" path="/planet/uranus"/>    
              <Card description="Neptune" imagePath="src\assets\planets\neptune.png" path="/planet/neptune"/>              
      </div>
</div>

  );
};

export default SectionWrapper(About, "about");