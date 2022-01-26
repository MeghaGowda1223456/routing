import React, { useState } from "react";
// import Login from './Login';

function Login(props) {
  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });
  const login = (event) => {
    event.preventDefault();
    console.log(userDetails);
    if (userDetails.email && userDetails.password) {
      console.log("props", props);
      props.history.push("/home");
    } else {
      console.error("not valid");
    }
  };
  const {email,password}=userDetails
//   const handleChange = (event) => {
//     console.log(event);
//     console.log("name", event.target.name);
//     console.log("value", event.target.value);
//     //1.take a copy of the state
//     const userDetailsCopy = { ...userDetails };
//     userDetailsCopy.email = event.target.value;
//     setuserDetails(userDetailsCopy);
//     console.log(setuserDetails);
//   };
//   const handleChangepass = (event) => {
//     console.log(event);
//     console.log("name", event.target.name);
//     console.log("value", event.target.value);
//     //1.take a copy of the state
//     const userDetailsCopy = { ...userDetails };
//     userDetailsCopy.password = event.target.value;
//     setuserDetails(userDetailsCopy);
//     console.log(setuserDetails);
//   };
const handleChange = (event) => {
        console.log(event);
        console.log("name", event.target.name);
        console.log("value", event.target.value);
        //1.take a copy of the state
        const userDetailsCopy = { ...userDetails };
        userDetailsCopy[event.target.name] = event.target.value;
        setuserDetails(userDetailsCopy);
        console.log(setuserDetails);
      };

  return (
    <form onSubmit={login}>
      <div>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br></br>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />
        <input type="submit" value="Login" />
      </div>
    </form>
  );
}

export default Login;
