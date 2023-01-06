import React from "react";
import Button from "@material-ui/core/Button";

const RegisteredScreen = () => {
  return (
    <div>
      <h4>
        Du er nå registrert og vil bli lagt til av en administrator snart.
      </h4>
      <Button variant="contained" onClick={() => window.location.reload(false)}>
        Tilbake
      </Button>
    </div>
  );
};

export default RegisteredScreen;
