import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Navbar, StarsCanvas, CoursesDataTable} from './components';
import Register from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AddCourse from "./components/AddCourse";
import EditCourse from "./components/EditCourse";
import AddLesson from "./components/AddLessonToCourse";
import CourseDetails from "./pages/CourseDetails";
import LessonsDataTable from "./components/LessonsDataTable";
import QuizComponent from "./components/QuizComponent";
import Login from "./pages/LoginPage";
import PlanetPage from "./pages/PlanetPage";
import Lenis from "lenis";
import Certificate from "./components/Certificate";

const App = () => {

  const lenis = new Lenis();
  //const [jwt, setJwt] = useLocalState("", "jwt");


  function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);


  // useEffect(() => {
  //   console.log(jwt);
  // }, [jwt]);


  return (
    // <BrowserRouter>
    //   <div className="relative z-0">
    //     <div className="bg bg-cover bg-no-repeat bg-center">
    //       <Navbar/>
    //     </div>
    //     <StarsCanvas/>
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="/courses" element={<CoursesDataTable />} />      
    //       <Route path="/planet/:name" element={<PlanetPage />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route path="/login" element={<Login />}></Route>
    //       <Route path="/create" element={<AddCourse />}></Route>
    //       <Route path="/edit/:id" element={<EditCourse />}></Route>
    //       <Route path="/addLesson/:id" element={<AddLesson />}></Route>
    //       <Route path="/courseDetails/:id" element={<CourseDetails />}></Route>
    //       <Route exact path='/course/:id/lessons' element={<LessonsDataTable/>}></Route>
    //       <Route path='/course/:id/quiz' element={<QuizComponent />}></Route>
    //       <Route path="/certificate" element={<Certificate />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>

       <>
        
        
      <div className="relative z-0">
        <div className="bg bg-cover bg-no-repeat bg-center">
          <Navbar/>
        </div>
        <StarsCanvas/>
        <Outlet/>
      </div>
        
       </>

  );
};

export default App