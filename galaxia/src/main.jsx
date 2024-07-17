import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import HomePage from './pages/HomePage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CoursesDataTable from './components/CoursesDataTable.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import PlanetPage from './pages/PlanetPage.jsx';
import AddCourse from './components/AddCourse.jsx';
import EditCourse from './components/EditCourse.jsx';
import CourseDetails from './pages/CourseDetails.jsx';
import AddLessonToCourse from './components/AddLessonToCourse.jsx';
import LessonsDataTable from './components/LessonsDataTable.jsx';
import QuizComponent from './components/QuizComponent.jsx';
import Certificate from './components/Certificate.jsx';

   
const router = createBrowserRouter([
  {
    path: "/galaxia/",
    element: <App/>,
    children: [
      {
        path: "/galaxia/",
        element: <HomePage/>,
      },
      {
        path: "/galaxia/courses",
        element: <CoursesDataTable/>,
      },
      {
        path: "/galaxia/register",
        element: <RegisterPage/>,
      },
      {
        path: "/galaxia/login",
        element: <LoginPage/>,
      },
      {
        path: "/galaxia/planet/:name",
        element: <PlanetPage/>,
      },
      {
        path: "/galaxia/create",
        element: <AddCourse/>,
      },
      {
        path: "/galaxia/edit/:id",
        element: <EditCourse/>,
      },
      {
        path: "/galaxia/courseDetails/:id",
        element: <CourseDetails/>,
      },
      {
        path: "/galaxia/addLesson/:id",
        element: <AddLessonToCourse/>,
      },
      {
        path: "/galaxia/course/:id/lessons",
        element: <LessonsDataTable/>,
      },
      {
        path: "/galaxia/course/:id/lessons",
        element: <LessonsDataTable/>,
      },
      {
        path: "/galaxia/course/:id/quiz",
        element: <QuizComponent/>,
      },
      {
        path: "/galaxia/certificate",
        element: <Certificate/>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
