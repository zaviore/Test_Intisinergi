import React, { useState } from "react";
import Down from "../images/arrow.png";
import Filter from "./filter";
import Box from "./box";
import Search from "./search";
const Accordion = () => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(!showResults);
  return (
    <>
      <div className="accordeon">
        <input
          type="checkbox"
          className="accordeon-checkbox"
          id="accordeon-title"
          onClick={onClick}
        />
        <label htmlFor="accordeon-title" className="accordeon-title-label">
          filter <img src={Down} width="10px" className="accordeon-arrow" />
        </label>

        <div className="accordeon-content">
          <Box variant="lg">
            {showResults ? (
              <Search />
            ) : (
              <div className="Container-2 ">
                <Filter />
              </div>
            )}
          </Box>
        </div>
      </div>
    </>
  );
};

export default Accordion;
