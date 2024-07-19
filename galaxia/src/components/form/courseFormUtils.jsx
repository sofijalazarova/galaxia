import { useNavigate } from "react-router-dom";
import { addCourse, addLesson } from "../../services/courseService"

export function useCourseForm(){

    const navigate = useNavigate();

    const submitAddCourse = async (courseData) => {
        try {
            await addCourse(courseData);
            navigate("/galaxia");
        } catch(error){
            alert("Error occured while adding the course: " + error);
        }
    }

    const cancelHandler = () => {
        navigate("/");
    }

    const submitUpdateCourse = (id, courseData) => {
        updateCourse(id, courseData)
          .then((response) => {
            navigate("/galaxia");
          })
          .catch((error) => {
            alert("Error occurred updating course: " + error);
          });
        };

    const submitAddLesson = async (id, lessonData) => {

          try {
            await addLesson(id, lessonData);
            navigate("/galaxia");
          } catch (error) {
            alert("Error occurred while adding a lesson");
          }
    };

    return { submitAddCourse, cancelHandler, submitUpdateCourse, submitAddLesson };
}