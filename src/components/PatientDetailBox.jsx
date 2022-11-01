import { logDOM } from "@testing-library/react";
import React from "react";

const patientDetailBox = ({ content }) => {
  return (
    <div className="patientDetailBoxer border">
      {Object.entries(content).map((entry, i) => {
        const [head, val] = entry;
        return (
          <div>
            <p className="patientDetailBoxer-top">{head}</p>
            {val.map((ent, i) => {
              return <p>{ent}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default patientDetailBox;

{
  /* <p
        className="patientDetailBoxer-top"
        style={{ backgroundColor: "cornflowerblue" }}
      >
        Content
      </p>
      <p>Content</p>
      <p>Content</p> */
}
