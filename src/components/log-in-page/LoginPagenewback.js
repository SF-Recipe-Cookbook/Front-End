import React, { useState, useEffect } from 'react';
import axios from 'axios';

import * as yup from 'yup';

const initialState = {
  username: '',
  password: '',
};
const Login = (props) => {
  const [credentials, setCredentials] = useState(initialState);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorState, setErrorState] = useState({
    username: '',
    password: '',
  });

  // Form schema
  const formSchema = yup.object().shape({
    username: yup.string().required('Name is required'),
    password: yup.string().required('Password is required'),
  });

  // Schema button enable
  useEffect(() => {
    formSchema.isValid(credentials).then((valid) => {
      setButtonDisabled(!valid);
    });
  });

  // Schema Validation
  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorState({ ...errorState, [e.target.name]: '' });
      })
      .catch((err) => {
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  //Input change handler
  const handleChange = (e) => {
    e.persist();
    validate(e);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  //Form submit post request
  const loginSubmit = (e) => {
    e.preventDefault();
    // console.log('form clicked');
    console.log('credentials', credentials);
    // postUserLogin(credentials);
    // props.history.push('/profile')
    axios
      .post(
        'https://ttwebft72recipecookbook.herokuapp.com/api/auth/',
        credentials
      )
      .then((res) => {
        console.log('res data', res.data);
        console.log('token', res.data.token);
        console.log('user', res.data._id);

        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', res.data.id);
        props.history.push('/profilepage');
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };
  // const loginSubmit = e => {
  //   e.preventDefault();
  //   // console.log('form clicked');
  //   // console.log('credentials', credentials);
  //   // postUserLogin(credentials);
  //   // props.history.push('/profile');

  //   console.log(localStorage);
  //   axios
  //     .post('https://tech-stuff-tt72.herokuapp.com/api/auth/login', credentials)
  //     .then(res => {
  //       console.log('res data', res.data);
  //       localStorage.setItem('token', res.data.token);
  //       localStorage.setItem('user', res.data.id);
  //       props.history.push('/profile');
  //     })
  //     .catch(err => {
  //       console.log('error: ', err);
  //     });
  // };

  return (
    <div>
      {/* form here to log in */}
      {/* display username, whatever info, and log out button after logging in */}
      <div>
        <form className='Form' onSubmit={loginSubmit}>
          <h1 className='Formh1'>Log In</h1>
          <input
            type='text'
            name='username'
            value={credentials.username}
            placeholder='username'
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            value={credentials.password}
            placeholder='password'
            onChange={handleChange}
          />
          <button disabled={buttonDisabled}>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
