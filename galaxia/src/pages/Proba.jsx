import axios from '../custom-axios/axios'
import React from 'react'
import { SectionWrapper } from '../hoc';

const Proba = () => {

  // axios.post('/auth/authenticate', reqBody)
  //     .then((response) => {
  //       console.log('Status code: ', response.status);

  //       if(response.status === 200) return response.data.token;
  //       else return Promise.reject('Invalid login attempt');
  //     })
  //     .then((token) => {
  //       console.log(token);
  //       setJwt(token);
  //     })
  //     .catch((error) => {
  //       console.log('Login failed: ', error);
  //     });
      


  const getUser = () =>{

    const response = axios.get('/auth/current-user');
    console.log(response.data);

  }


  return (
    <button
    type='submit'
    onClick={getUser}
    className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
  >
    Login
  </button>

  )
}

export default SectionWrapper(Proba, "proba")