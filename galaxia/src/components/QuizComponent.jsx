import { useNavigate, useParams } from 'react-router-dom';
import axios from '../custom-axios/axios';
import React, { useEffect, useState } from 'react'
import { SectionWrapper } from '../hoc';

const QuizComponent = () => {

    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [userResponses, setUserResponses] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCourseData = async () => {
          try {
            const response = await axios.get(`/${id}`);
            setCourse(response.data);
          } catch (error) {
            console.log("Error occurred while fetching course data: " + error);
          }
        };
        fetchCourseData();
    }, [id]);

    const handleAnswerSelection = (questionId, selectedOption) => {
        setUserResponses((prevResponses) => ({
            ...prevResponses,
            [questionId]: selectedOption,
        }));
    };

    const calculateScore = () => {
        let totalScore = 0;

        course.quiz[0].questions.forEach((question) => {
            const userResponse = userResponses[question.id];
            if (userResponse !== undefined && userResponse === question.correctAnswer){
                totalScore += 1;
            }
        });

        console.log("Total Score: ", totalScore);
    }

    const handleSubmitQuiz = () => {
        calculateScore();
        navigate("/certificate");
    }

    if (course === null) {
        return <div>Loading...</div>;
    }

    // prasanja 
    const questions = course.quiz[0].questions;
  

  return (
        <div>
            <div className='w-full h-[100%] bg-black mt-10 rounded-3xl'>
            <div className='text-center p-10'>
                <h1 className='text-white font-bold text-[24px]'>{course.quiz[0].title}</h1>
            </div>
            <div className='text-center px-10'>    
                {questions.map((question) => (
                    <div className='mt-10' key={question.id}>
                    <div className='mb-10 text-secondary text-[18px]'>{question.questionText}</div>
                    <div className='text-secondary text-[15px]'>
                        <div>
                            <label>
                                <input type='checkbox'
                                onChange={() => handleAnswerSelection(question.id, 1)}/>
                                 {question.option1}
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type='checkbox'
                                onChange={() => handleAnswerSelection(question.id, 2)}/>
                                 {question.option2}
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type='checkbox'
                                onChange={() => handleAnswerSelection(question.id, 3)}/>
                                 {question.option3}
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type='checkbox'
                                onChange={() => handleAnswerSelection(question.id, 4)}/>
                                 {question.option4}
                            </label>     
                        </div>              
                    </div>     
                    </div>
                ))}
            </div>
            <div className='text-center'>
                <button
                    onClick={handleSubmitQuiz}
                    className='m-10 p-5 rounded-xl outline-none w-fit text-black bg-white font-bold shadow-md shadow-primary'>
                SUBMIT
                </button>
            </div>
            </div> 
        </div>
  );
}

export default SectionWrapper(QuizComponent, "quizComponent");