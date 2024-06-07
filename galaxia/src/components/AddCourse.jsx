import { useCourseForm } from './form/courseFormUtils';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const AddCourse = () => {
  
    const [loading, setLoading] = useState(false);

    const { submitAddCourse, cancelHandler } = useCourseForm();

    const  [name, setName]  = useState('');
    const  [description, setDescription]  = useState('');
    const  [duration, setDuration]  = useState('');
    const  [imagePath, setImagePath]  = useState('');

    const nameChangeHandler = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }

    const durationChangeHandler = (event) => {
        setDuration(event.target.value);
    }

    const imagePathChangeHandler = (event) => {
        setImagePath(event.target.value);
    }


    const submitActionHandler = async (event) => {
        event.preventDefault();

        const courseData = {
            name: name,
            description: description,
            duration: duration,
            imagePath: imagePath
        }

        await submitAddCourse(courseData);
    }

    return (
        <div
          className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-[0.75] bg-black p-8 rounded-2xl'
          >
            <h3 className={styles.sectionHeadText}>Add Course</h3>
    
            <form
              onSubmit={submitActionHandler}
              className='mt-12 flex flex-col gap-8'
            >
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Course Name</span>
                <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={nameChangeHandler}
                  placeholder="Enter course name"
                  className='bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Course description</span>
                <textarea
                  rows={7}
                  name='description'
                  value={description}
                  onChange={descriptionChangeHandler}
                  placeholder='Enter course description'
                  className='bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Course duration</span>
                <input
                  type='number'
                  name='duration'
                  value={duration}
                  onChange={durationChangeHandler}
                  placeholder="Enter course duration"
                  className='bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Course imagePath</span>
                <input
                  type='text'
                  name='imagePath'
                  value={imagePath}
                  onChange={imagePathChangeHandler}
                  placeholder="Enter image url"
                  className='bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
    
              <button
                type='submit'
                className='bg-black-100 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
              >
                {loading ? "Sending..." : "Add new course"}
              </button>
              <button
                type='submit'
                onClick={() => cancelHandler()}
                className='bg-black-100 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
              >
                Cancel
              </button>
            </form>
          </motion.div>
    
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
          >
          </motion.div>
        </div>
      );

}

export default SectionWrapper(AddCourse, "addCourse");