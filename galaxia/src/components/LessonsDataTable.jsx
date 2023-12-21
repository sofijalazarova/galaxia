import axios from '../custom-axios/axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SectionWrapper } from '../hoc';


const LessonsDataTable = () => {

    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchLessonDetails = async () => {
          try {
            const response = await axios.get(`/${id}`);
            setCourse(response.data);
          } catch (error) {
            console.log("Error occurred while fetching lessons details: " + error);
          }
        };
        fetchLessonDetails();
      }, [id]);

    // Check if course is null before rendering
    if (course === null) {
        return <div>Loading...</div>;
      }
     
  return (

  <div>
    <div className='w-full h-[100%] bg-tertiary mt-10'>
      <div className='text-center p-10'>
        <h1 className='text-white font-bold text-[24px]'>Course - {course.name}</h1>
      </div>
      <div className='text-center px-10'>    
          {course.lessons.map((lesson) => (
            <div className='mt-10' key={lesson.id}>
              <div className='mb-10 text-secondary text-[18px]'>{lesson.title}</div>
              <div className='text-secondary text-[15px]'>{lesson.content}</div>
              <div className='m-10'>
                <iframe className='md:w-full sm:w-full'
                  width="750"
                  height="500"
                  src="https://www.youtube.com/embed/Lsim6FYtXSw?si=qQoyNkILtV7aivsC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
                </iframe>
              </div>        
            </div>
          ))}
      </div>
      <div className='text-center'>
        <button
            onClick={() => {navigate("/course/" + course.id + "/lessons")}}
            className='m-10 p-10 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>
          Start quiz
        </button>
      </div>
    </div> 
  </div>
  )
}

export default SectionWrapper(LessonsDataTable, "lessonsDataTable");