import React, { useState } from "react";

function Buttons(props) {
  const [variant] = useState(props.variant);

  return (
    <div className="container">
      <br />
      <button className={`btn-${variant}`}>
        {props.children}
        {props.label}
      </button>
    </div>
  );
}

export default Buttons;
