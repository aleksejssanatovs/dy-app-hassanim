import { Card, Input, Typography, Button } from "@material-tailwind/react";

import { useState } from "react";

import { useDispatch } from 'react-redux';

import { login } from '../../toolkit/user/userSlice';

import { 
    auth,
    signInWithEmailAndPassword,
 } from "../../utils/firebase.utils";


import "./login.styles.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const sumbitForm = (e) => {
    e.preventDefault();
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        // returns  an auth object after a successful authentication
        // userAuth.user contains all our user details
        .then((userAuth) => {
          // store the user's information in the redux state
          dispatch(
            login({
              email: userAuth.user.email,
            })
          );
        })
        // display the error if any
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <div className="login-form-container">
      <Card color="transparent" shadow={false} className="login-form">
        <Typography variant="h4" color="blue-gray">
          Log In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={(e) => sumbitForm(e)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="mt-6" type="submit">
            Log in
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
