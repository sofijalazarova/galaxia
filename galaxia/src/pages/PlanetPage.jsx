import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { planetsData } from "../data/PlanetsData";
import { useParams } from "react-router-dom";


const PlanetPage = () => {

    const { name } = useParams();
    const planetName = name;
    const planet = planetsData.find(p => p.title === planetName);

   
    if (!planet) {
      return <div>Planet not found</div>;
    }
  
    return (
      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <img src={planet.imageUrl}/>
        </motion.div>
  
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] p-8 rounded-2xl'
        >
          <div className="m-5 mt-0">
            <h3 style={{textTransform: "uppercase"}} className={styles.sectionHeadText}>{planet.title}</h3>
            <p className="mt-5">{planet.description}</p>
          </div>
        </motion.div>
      </div>
    );
   
};

export default SectionWrapper(PlanetPage, "PlanetPage")
