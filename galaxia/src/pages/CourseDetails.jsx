import React, { useEffect, useState } from 'react'
import { SectionWrapper } from '../hoc';
import { useParams } from 'react-router-dom';
import axios from '../custom-axios/axios';

const CourseDetails = () => {

    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourseDetails = async () => {
            try {
                const response = await axios.get(`/${id}`);
                setCourse(response.data);
            } catch (error){
                console.log("Error occured while fetching course details: " + error);
            }
        };
        fetchCourseDetails();
    }, [id]);

    if(course === null){
        return <div>Loading...</div>
    }

  return (

    <div className='mt-10'>
        <div className='bg-tertiary rounded-2xl w-full h-[470px] flex items-center'>
            <div className='relative w-[370px] h-[330px] mx-20'>
                <img src={course.imagePath}
                     alt="course_image"
                     className='h-full w-full'
                />
            </div>
            <div className='w-[550px] h-[330px] flex flex-col justify-start'>
                <div className='items-center'>
                    <h2 className='text-white font-bold text-[24px]'>{course.name}</h2>
                    <p className='text-secondary text-[14px] mt-5'>{course.description}</p>
                    <p className='text-secondary text-[14px] mt-2'>{course.duration} hours</p>
                    <p className='text-secondary text-[14px] mt-2'>Includes video materials</p>
                </div>
                <div className='mt-20'>
                <button
                    type='submit'
                    className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                >
                    Start course
            </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SectionWrapper(CourseDetails, "courseDetais");