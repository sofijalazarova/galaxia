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

    <div className='mt-10 flex flex-wrap'>
        <div className='bg-tertiary p-5 rounded-2xl w-full h-[470px] flex items-center' key={course.id}>
        <div className='relative w-[370px] h-[330px]'>
            <img
                src={course.imagePath}
                alt='course_image'
                className='h-[330px] object-cover rounded-2xl'
            />
        </div>
            <div className='flex flex-col justify-start ml-5 pr-5'>
                <h3 className='text-white font-bold text-[24px]'>{course.name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{course.description}</p>
                <p className='mt-2 text-secondary text-[14px]'>{course.duration}</p>
            </div>
        </div>
    </div>



  )
}

export default SectionWrapper(CourseDetails, "courseDetais");