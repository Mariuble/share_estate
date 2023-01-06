import React from "react";
import Button from "@material-ui/core/Button";

const LogOut = ({ onLogOut }) => {
  return (
    <div>
      <Button onClick={onLogOut} variant="contained" className="log-out-button">
        Logg Ut
      </Button>
    </div>
  );
};

export default LogOut;
