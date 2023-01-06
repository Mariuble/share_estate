import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Register = ({
  onToggleViewRegisterForm,
  onToggleViewDodsbo,
  onToggleViewRegisterScreen,
}) => {
  const postUser = (email, names, password) => {
    console.log("Input: ", email, names, password);
    fetch("http://localhost:8000/api/register-user/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        name: names,
        password: password,
      }),
    }).then((response) => {
      // response = response.json()
      if (response.ok) {
        onToggleViewRegisterScreen();
        console.log("Success");
        //onToggleViewDodsbo();
      } else {
        console.log("Fail");
      }
    });
  };

  return (
    <div>
      <form>
        <div></div>
        <TextField
          id="inputName"
          className="outlined-basic"
          label="Navn"
          variant="outlined"
        />
        <div></div>
        <TextField
          id="inputEmail"
          //autoComplete="inputEmail"
          className="outlined-basic"
          label="Epost"
          variant="outlined"
        />
        <div></div>
        <TextField
          id="inputPassword"
          //autoComplete="current-password"
          className="outlined-basic"
          //type="password"
          label="Passord"
          variant="outlined"
        />
      </form>
      <Button
        variant="contained"
        onClick={() =>
          postUser(
            document.getElementById("inputEmail").value,
            document.getElementById("inputName").value,
            document.getElementById("inputPassword").value
          )
        }
      >
        Registrer Deg
      </Button>
      <Button variant="contained" onClick={onToggleViewRegisterForm}>
        Tilbake
      </Button>
    </div>
  );
};

export default Register;
