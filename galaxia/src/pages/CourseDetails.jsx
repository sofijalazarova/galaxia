import React, { useEffect, useState } from 'react'
import { SectionWrapper } from '../hoc';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../custom-axios/axios';
import { Tilt } from 'react-tilt';

const CourseDetails = () => {

    const navigate = useNavigate();

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

    // const enrollInCourse = async () => {
    //     try {

    //         await axios.post('/enrollments', { courseId: course.id});
    //         navigate('/course/${course.id}/lessons');

    //     } catch(error){
    //         console.log("Error occured while enrolling in the course: " + error);
    //     }
    // }

    if(course === null){
        return <div>Loading...</div>
    }

    console.log(course);

  return (

        <div className='mt-5 xs:m-10'>
            <div className='bg-black rounded-2xl w-full h-[550px] flex flex-col-reverse md:flex-row items-center'>
                <Tilt className='relative w-full md:w-[370px] h-[330px] mx-20 md:mb-0'>
                    <img
                        src={course.imagePath}
                        alt="course_image"
                        className='h-full w-full rounded-xl outline'
                    />
                </Tilt>
                <div className='w-full md:w-[550px] h-[330px] md:mr-20 flex flex-col justify-start mt-10'>
                    <div className='items-center text-center'>
                        <h2 className='text-white font-bold text-[24px]'>{course.name}</h2>
                        <p className='text-secondary text-[14px] mt-5'>{course.description}</p>
                        <p className='text-secondary text-[14px] mt-2'>{course.duration} hours</p>
                        <p className='text-secondary text-[14px] mt-2'>Includes video materials.</p>
                    </div>
                    <div className='mt-5 mb-10 h-full flex flex-col items-center justify-center'>
                        <button
                            onClick={() => {navigate("/course/" + course.id + "/lessons")}}
                            //onClick={enrollInCourse}
                            className='py-3 px-8 rounded-xl outline w-fit text-white font-bold shadow-md shadow-primary hover:bg-emerald-500'
                        >
                            Enroll course
                        </button>
                    </div>
                </div>
            </div>
        </div>


  )
}

export default SectionWrapper(CourseDetails, "courseDetais");