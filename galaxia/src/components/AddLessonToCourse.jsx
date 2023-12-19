import { useCourseForm } from './form/courseFormUtils';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useNavigate, useParams } from 'react-router-dom';

const AddLesson = () => {

    const { submitAddLesson } = useCourseForm();

    const { id } = useParams();

    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [videoUrl, setVideoUrl] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleVideoUrlChange = (event) => {
        setVideoUrl(event.target.value);
    };

    const submitActionHandler = async (event) => {
        event.preventDefault();

        try{

            const lessonData = {
                title: title,
                content: content,
                videoUrl: videoUrl
            };

            console.log(lessonData.title);
            await submitAddLesson(id, lessonData);

        }catch(error){
            console.log("Error occured while adding lessonnnn: ", error);
        }
    }



    return (
        <div
          className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
          >
            <h3 className={styles.sectionHeadText}>Add Lesson</h3>
    
            <form
              onSubmit={submitActionHandler}
              className='mt-12 flex flex-col gap-8'
            >
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Lesson title</span>
                <input
                  type='text'
                  name='title'
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="Enter lesson title"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              {/* <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Lesson content</span>
                <input
                  type='text'
                  name='content'
                  value={content}
                  onChange={handleContentChange}
                  placeholder="Enter lesson content"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label> */}

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Lesson content</span>
                <textarea
                  rows={7}
                  name='content'
                  value={content}
                  onChange={handleContentChange}
                  placeholder='Enter lesson content'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Lesson video URL</span>
                <input
                  type='text'
                  name='videoUrl'
                  value={videoUrl}
                  onChange={handleVideoUrlChange}
                  placeholder="Enter video URL"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
                 
              <button
                type='submit'
                className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
              >
                {loading ? "Sending..." : "Add new lesson"}
              </button>
              <button
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

export default SectionWrapper(AddLesson, "addLesson");