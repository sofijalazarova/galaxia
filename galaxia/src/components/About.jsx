import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const Card = (props) => {

  return(
    <Tilt className='xs:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={props.imagePath} alt='web-development' className='w-30 h-30 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{props.description}</h3>
      </div>
    </div>
  </Tilt>
  )
}

const About = () => {

  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Explore the Cosmos with Our Free Astronomy Courses!</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Embark on a celestial journey with our captivating and insightful astronomy courses.
        At GalaxiaCourses, we're passionate about making the wonders of the universe accessible to everyone. Whether you're a beginner or an avid stargazer, our courses are designed to spark your curiosity and deepen your understanding of the cosmos.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
            
              <Card description="Expert-Led Content" imagePath="src\assets\planets\mercury.png"/>
              <Card description="Interactive Learning" imagePath="src\assets\planets\planet.png"/>    
              <Card description="Flexible Scheduling" imagePath="src\assets\planets\venus.png"/>    
              <Card description="Community Engagement" imagePath="src\assets\planets\neptune.png"/>          
      </div>
</div>

  );
};

export default SectionWrapper(About, "about")