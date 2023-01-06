import React, { useState, useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Comment from "./Comment";

const Item = ({ parentID, currentUser }) => {
  const [expanded, setExpanded] = useState(false);
  const [items, setItems] = useState([]);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/item").then((res) => {
      const responseItems = res.data;
      setItems(responseItems);
    });
  }, []);

  return (
    <div>
      {" "}
      {items &&
        items
          .filter((item) => item.estateID == parentID)
          .map((item, index) => {
            const { name, estateID } = item;
            return (
              <>
              {/* <div className="item"> */}
                <Accordion
                  expanded={expanded === "panel" + item.id}
                  onChange={handleChange("panel" + item.id)}
                >
                  <AccordionSummary
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className="item-name">{item.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>Beskrivelse: {item.description} </Typography>
                  </AccordionDetails>
                  <Comment currentUser={currentUser} itemId={item.id} />
                </Accordion>
              {/* </div> */}
              </>
            );
          })}
    </div>
  );
};

export default Item;
