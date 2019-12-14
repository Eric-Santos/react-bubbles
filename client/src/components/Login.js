import React, { useState } from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth.js';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  console.log('Props from login', props);

  const submitForm = event => {
    event.preventDefault();
    AxiosWithAuth()
      .post('/login', userLoginInfo)
      .then(res => {
        console.log('result from Login call', res);
        localStorage.setItem('token', res.data.payload);
        setUserLoginInfo({
          username: '',
          password: ''
        });
        props.history.push('/bubblepage');
      })
      .catch(err => console.log(err));
  };

  const [userLoginInfo, setUserLoginInfo] = useState({
    username: '',
    password: ''
  });

  const handleChanges = e => {
    setUserLoginInfo({ ...userLoginInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="formContainer">
      <div className="formBox">
        <form onSubmit={submitForm}>
          <input
            name="username"
            type="text"
            value={userLoginInfo.username}
            onChange={handleChanges}
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            value={userLoginInfo.password}
            onChange={handleChanges}
            placeholder="Password"
          />
          <button hidden />
        </form>
      </div>
    </div>
  );
};

export default Login;
