import React, {useState} from "react";
import axiosWithAuth from '../utils/axiosWithAuth'

const Login = () => {

  const [creds, setcreds] = useState({
    username:'',
    password:''
  })

  const handleChange = (e) => {
    setcreds({
      ...creds,
      [e.target.name]: e.target.value
    })
  }

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', creds)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Log in</p>
      <div>
        <form onSubmit={login}>
          <input 
            type='text'
            name='username'
            value={creds.username}
            onChange={handleChange}
          />
            <input 
            type='password'
            name='password'
            value={creds.password}
            onChange={handleChange}
          />
          <button>log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
