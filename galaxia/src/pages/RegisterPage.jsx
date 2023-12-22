import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import axios from "../custom-axios/axios";


const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [jwt, setJwt] = useState("", "jwt");

    const handleRegistration = async (event) => {
      event.preventDefault();

      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      };

      try{
        const response = await axios.post('/auth/register', userData);
        const jwt = response.data.token;
        window.location.href = '/login';
      } catch(error){
          console.error('Registration failed:', error);
      }
    }
  
     const [loading, setLoading] = useState(false);
  
  
    return (
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <h3 className={styles.sectionHeadText}>Register</h3>
  
          <form
            onSubmit={handleRegistration}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>First name</span>
              <input
                type='text'
                name='firstName'
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="Enter first name"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Last name</span>
              <input
                type='text'
                name='lastName'
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Enter last name"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Email</span>
              <input
                type='text'
                name='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter valid email"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Password</span>
              <input
                type='password'
                name='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter valid password"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
  
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Register"}
            </button>
          </form>
        </motion.div>
  
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          {/* <EarthCanvas /> */}
        </motion.div>
      </div>
    );
  };
  
  export default SectionWrapper(Register, "register");