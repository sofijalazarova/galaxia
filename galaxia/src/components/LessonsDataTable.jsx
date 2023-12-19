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
    <>
    <h2>{course.name}</h2>
    <ul>              
            <div>
                <ul>
                    {course.lessons.map((lesson) => (
                        <li key={lesson.id}>
                            {lesson.title}
                            {lesson.content}
                        </li>
                    ))}
                </ul>
            </div>
    </ul>
</>
  )
}

export default SectionWrapper(LessonsDataTable, "lessonsDataTable");