import React, { useState } from 'react';
import AxiosWithAuth from './AxiosWithAuth';

const Login = props => {
  const [userLoginInfo, setUserLoginInfo] = useState({
    username: '',
    password: ''
  });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  console.log(props);

  const handleSubmit = event => {
    event.preventDefault();
    AxiosWithAuth()
      .post('/login', userLoginInfo)
      .then(res => {
        localStorage.setItem('token', res.data.payload);

        props.history.push('/bubblepage');
      })
      .catch(err => console.log(err));
    setUserLoginInfo({
      username: '',
      password: ''
    });
  };

  const handleChanges = e => {
    setUserLoginInfo({ ...userLoginInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="formContainer">
      <div className="formBox">
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Username</label>
            <input
              name="username"
              type="text"
              value={userLoginInfo.username}
              onChange={handleChanges}
              placeholder="Username"
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={userLoginInfo.password}
              onChange={handleChanges}
              placeholder="Password"
            />
          </div>

          <button type="submit" className="ui button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
