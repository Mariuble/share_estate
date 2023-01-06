import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const LogIn = ({ onToggleViewLoginForm, onToggleViewDodsbo, onSubmitUser }) => {
  const [users, setUsers] = useState([]);
  const [errorState, setErrorState] = useState(false);
  const [errorText, setErrorText] = useState("");

  const allowAccess = () => {
    const val = validate();
    if (val.includes(true)) {
      setErrorText("");
      onToggleViewDodsbo();
    } else {
      console.log("Username and password is wrong!");
      setErrorText("Incorrect input");
    }
  };

  //Validates if the given user info is correct
  const validate = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    return users.map((user, index) => {
      if (user.email === username) {
        if (user.password === password) {
          onSubmitUser(user);
          return true;
        }
      } else {
        setErrorState(true);
        return false;
      }
    });
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetch("/api/users");
      const json = await data.json();
      setUsers([...users, ...json]);
    };
    getUsers();
  }, []);

  return (
    <div>
      <form>
        <TextField
          id="username"
          //autoComplete="username"
          label="Epost"
          variant="outlined"
          helperText={errorText}
        />
        <div></div>
        <div></div>
        <TextField
          id="password"
          //autoComplete="current-password"
          className="standard-password-input"
          label="Passord"
          //type="password"
          variant="outlined"
          helperText={errorText}
        />
      </form>
      <Button variant="contained" onClick={() => allowAccess()}>
        Logg Inn
      </Button>
      <Button variant="contained" onClick={onToggleViewLoginForm}>
        Tilbake
      </Button>
    </div>
  );
};

export default LogIn;
