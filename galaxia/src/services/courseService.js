import axios from "../custom-axios/axios";

// Get all courses
export const getAllCourses = async () => {
    try{
        const response = await axios.get("/courses");
        return response.data;
    } catch(error) {
        throw new Error("Error occured while loading data: " + error);
    }
}

// Get course by ID
export const getCourseById = async (id) => {

    try{
        const response = await axios.get(`/${id}`);
        return response.data;
    } catch(error){
        throw new Error("Error occured while loading course with id: " + id);
    }
}

// Add a new course
export const addCourse = async (courseData) => {

    try {
      const response = await axios.post("/add", courseData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error("Error occurred while creating a new course: " + error);
    }
};

// Update course
export const updateCourse = async (id, courseData) => {
    try {
        const response = await axios.put(`/edit/${id}`, courseData);
        return response.data;
    } catch (error) {
        throw new Error("Error occured while updating the course: " + error);
    }
}

// Delete a course by ID
export const deleteCourse = async (id) => {

    try{
        const response = await axios.delete("/course/" + id);
        return response.data;
    } catch(error){
        throw new Error("Error occured while deleting course: " + error);
    }
}

// Add a new lesson
export const addLesson = async (id, lessonData) => {

    try {
        const response = await axios.post(`/addLesson/${id}`, lessonData, {
            headers: {
                'Content-Type': 'application/json',
              },
        });
        return response.data;
    } catch (error) {
        throw new Error("Error occureed while creating a new lesson");
    }
}