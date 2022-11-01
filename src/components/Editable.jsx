import React from "react";

const Editable = ({ val }) => {
  return (
    <div className="editable">
      <h3>{val.head}</h3>
      <p>{val.value}</p>
    </div>
  );
};

export default Editable;
