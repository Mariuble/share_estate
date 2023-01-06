import React from "react";
// import Accordation from "./Accordation";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
import Comment from "./Comment";

const dodsbo = ({ currentlyLoggedIn }) => {
  const [estates, setEstates] = useState();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const ifAlert = (e) => {
    return e
      .filter((estate) => estate.members.includes(currentlyLoggedIn.id))
      .map((estate) => {
        if (estate.alert === true) {
          return estate.name;
        } else {
          return "false";
        }
      });
  };

  const alertFinish = (e) => {
    const estateAlert = ifAlert(e);
    if (estateAlert != "false") {
      alert("please finish your estate, " + estateAlert + "😊");
    }
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/estates").then((res) => {
      const responseEstates = res.data;
      setEstates(responseEstates);
      alertFinish(responseEstates);
    });
  }, []);

  return (
    <div className="dodsbo-komponent">
      <h4>Gjenstander i dødbo: </h4>
      {/* <h3>Logget inn som: {currentlyLoggedIn}</h3> */}
      <div className="accordation">
        {estates &&
          estates
            .filter((estate) => estate.members.includes(currentlyLoggedIn.id))
            .map((estate) => {
              const { name, members } = estate;
              return (
                <>
                  <Accordion
                    className="dodsbo-accordion"
                    expanded={expanded === "panel" + estate.name}
                    onChange={handleChange("panel" + estate.name)}
                  >
                    <div className="estate-name">
                      <AccordionSummary
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <Typography className="font-estate-name">
                          {estate.name}
                        </Typography>
                      </AccordionSummary>
                    </div>

                    <AccordionDetails className="item">
                      <Item
                        parentID={estate.id}
                        currentUser={currentlyLoggedIn}
                      />
                    </AccordionDetails>
                  </Accordion>
                </>
              );
            })}
      </div>
    </div>
  );
};

export default dodsbo;
