import React, { useEffect, useState } from 'react'
import { SectionWrapper } from '../hoc';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../custom-axios/axios';
import { updateCourse } from '../services/courseService';
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

const EditCourse = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    const [courseId, setCourseId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [imagePath, setImagePath] = useState('');

    useEffect(() => {
        axios.get(`/${id}`).then((response) => {
            const courseData = response.data;
            setCourseId(courseData.id);
            setName(courseData.name);
            setDescription(courseData.description);
            setDuration(courseData.duration);
            setImagePath(courseData.imagePath);
        }).catch(error => {
            alert("Error occured getting course detail: " + error);
        });
    }, [id]); 

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    };

    const durationChangeHandler = (event) => {
        setDuration(event.target.value);
    };

    const imagePathChangeHandler = (event) => {
        setImagePath(event.target.value);
    };

    const submitActionHandler = (event) => {
        event.preventDefault();

        updateCourse(id, {
            name: name,
            description: description,
            duration: duration,
            imagePath: imagePath
        })
        .then((response) => {
            navigate("/");
        }).catch((error) => {
            alert("Error occured updating course: " + error);
        });
    }

  return (
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <h3 className={styles.sectionHeadText}>Edit course</h3>
  
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
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Course description</span>
              <input
                type='text'
                name='description'
                value={description}
                onChange={descriptionChangeHandler}
                placeholder="Enter course description"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
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
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Course image URL</span>
              <input
                type='text'
                name='imagePath'
                value={imagePath}
                onChange={imagePathChangeHandler}
                placeholder="Enter course image URL"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Update course"}
            </button>
            <button
                type='submit'
                onClick={() => cancelHandler()}
                className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
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

export default SectionWrapper(EditCourse, "editCourse");