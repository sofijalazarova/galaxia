import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Navbar, StarsCanvas, CoursesDataTable} from './components';
import Register from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AddCourse from "./components/AddCourse";
import EditCourse from "./components/EditCourse";
import AddLesson from "./components/AddLessonToCourse";
import CourseDetails from "./pages/CourseDetails";
import LessonsDataTable from "./components/LessonsDataTable";
import QuizComponent from "./components/QuizComponent";
import Login from "./pages/LoginPage";
import { useLocalState } from "./hooks/useLocalStorage";
import { useEffect } from "react";


const App = () => {

  const [jwt, setJwt] = useLocalState("", "jwt");

  useEffect(() => {
    console.log('JWT is: ${jwt}');
  }, [jwt]);


  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <StarsCanvas/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesDataTable />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create" element={<AddCourse />}></Route>
          <Route path="/edit/:id" element={<EditCourse />}></Route>
          <Route path="/addLesson/:id" element={<AddLesson />}></Route>
          <Route path="/courseDetails/:id" element={<CourseDetails />}></Route>
          <Route exact path='/course/:id/lessons' element={<LessonsDataTable/>}></Route>
          <Route path='/course/:id/quiz' element={<QuizComponent />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App