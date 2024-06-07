import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { deleteCourse, getAllCourses } from "../services/courseService";
import { useNavigate } from "react-router-dom";


const CoursesDataTable = () => {

  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  
  const setCoursesData = async () => {
    try{
      const courses = await getAllCourses();
      setCourses(courses);
    } catch(error){
      console.log('Error occured while loading data: ' + error);
    }
  }

  useEffect(() => {
    setCoursesData();
  }, []);

  const removeCourse = async (id) => {

    try {
      await deleteCourse(id);
      setCoursesData();
      navigate("/");
    } catch(error){
      console.log("Error occured removing course: " + error);
    }
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Check out our free courses!</p>
        <h2 className={`${styles.sectionHeadText}`}>Courses.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Ready to embark on a journey through the cosmos? 
          Check out our free astronomy courses and unlock the mysteries of the stars. 
          Start your exploration today and reach for the stars with Galaxia!
        </motion.p>
      </div>
      <br/>
      <button
                onClick={() => navigate('/create')}
                className='bg-black py-3 px-8 rounded-2xl outline w-fit text-white font-bold shadow-md shadow-black'
                          >
                Add new course
    </button> 

    
      <div className='mt-20 flex flex-wrap gap-10'>
            {
                courses &&
                      courses.map((course, index) => (                                     
                        <div key={course.id}
                          options={{
                            max: 45,
                            scale: 1,
                            speed: 450,
                          }}
                          className='bg-black p-5 rounded-2xl sm:w-[360px] w-full'
                        >
                          <div className='relative w-full h-[230px]'>
                            <img
                              src={course.imagePath}
                              alt='project_image'
                              className='h-full w-full object-cover rounded-xl'
                              onClick={() => {
                                navigate("/courseDetails/" + course.id);
                              }}
                            />                                    
                          </div>                 
                          <div className='mt-5'>
                            <h3 className='text-white font-bold text-[24px]' onClick={() => {
                              navigate("/courseDetails/" + course.id);
                            }}>{course.name}</h3>
                            <p className='mt-2 text-secondary text-[14px]'>{course.description}</p>
                          </div> 
                          <br/>
                          <div className="flex gap-2">
                          <button
                            onClick={() => navigate("/edit/" + course.id)}
                            className='py-3 px-8 rounded-xl outline w-fit text-white font-bold shadow-md shadow-primary md-2'
                          >
                            Edit course
                          </button>   
                       
                          <button
                            type='submit'
                            onClick={() => removeCourse(course.id)}
                            className='py-3 px-8 rounded-xl outline w-fit text-white font-bold shadow-md shadow-primary'
                          >
                            Remove course
                          </button>                                                     
                          </div>                               
                        </div>                                
            ))
          }
      </div>
    </>
  );
};

export default SectionWrapper(CoursesDataTable, "");