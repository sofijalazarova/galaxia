import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { menu, close } from '../assets';
import { useLocalState } from '../hooks/useLocalStorage';
import axios from '../custom-axios/axios';
//import Logo1 from '../../public/logo1.png';
import Logo1 from '/logo1.png';

const Navbar = () => {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [user, setUser] = useLocalState("", "user");
  const navigate = useNavigate();

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('/auth/logout');
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      setUser("");
      setJwt("");
      navigate('/login');
    } catch (error) {
      console.error('Logout failed');
    }
  };

  useEffect(() => {  
    if (jwt) {
      setJwt(jwt);
    }
  }, [setJwt]);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-black" : "bg-transparent"}`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={Logo1} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Galaxia &nbsp;
            <span className='sm:block hidden'> | Courses</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <li
            className={`${active === "Available Courses" ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("Available Courses")}
          >
            <Link to="/courses">Available Courses</Link>
          </li>

          {!jwt ? (
            <>
              <li
                className={`${active === "Register" ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive("Register")}
              >
                <Link to="/register">Register</Link>
              </li>
              <li
                className={`${active === "Login" ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive("Login")}
              >
                <Link to="/login">Login</Link>
              </li>
            </>
          ) : (
            <li
              className={`${active === "Logout" ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={handleLogout}
            >
              <a>Logout</a>
            </li>
          )}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === "Available Courses" ? "text-white" : "text-secondary"}`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Available Courses");
                }}
              >
                <Link to="/courses">Available Courses</Link>
              </li>
              
              {!jwt ? (
                <>
                  <li
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === "Register" ? "text-white" : "text-secondary"}`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive("Register");
                    }}
                  >
                    <Link to="/register">Register</Link>
                  </li>
                  <li
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === "Login" ? "text-white" : "text-secondary"}`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive("Login");
                    }}
                  >
                    <Link to="/login">Login</Link>
                  </li>
                </>
              ) : (
                <li
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === "Logout" ? "text-white" : "text-secondary"}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Logout");
                    handleLogout();
                  }}
                >
                  <a>Logout</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

