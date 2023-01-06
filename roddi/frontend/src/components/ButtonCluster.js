import Button from "@material-ui/core/Button";
import React from "react";
import PropTypes from "prop-types";

const ButtonCluster = ({ onToggleViewLoginForm, onToggleViewRegisterForm }) => {
  return (
    <div>
      <Button
        className="btn"
        variant="contained"
        onClick={onToggleViewLoginForm}
      >
        Logg inn
      </Button>
      <Button
        className="btn"
        variant="contained"
        onClick={onToggleViewRegisterForm}
      >
        Registrer deg
      </Button>
    </div>
  );
};

ButtonCluster.propTypes = {};

export default ButtonCluster;
