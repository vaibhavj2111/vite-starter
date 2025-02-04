import React from "react";
import "./DataSection.css";
import "../main_body.css";
const ClaimDataSection = ({ data }) => {
  return (
    <div className="parent_data_div">
      <div className="data">
        <p>
          <strong>All Your Claims</strong>
        </p>
      </div>
      <DataCard data={data} />
    </div>
  );
};

// Data Card Component
const DataCard = ({ data }) => {
  return (
    <div className="data-card">
      <div className="scroll-container">
        {data &&
          data[0].map((field, index) => (
            <DataField
              key={index}
              field={field}
              value={data[1][index]}
              issuer={data[2][index]}
            />
          ))}
      </div>
    </div>
  );
};

// Data Field Component
const DataField = ({ field, value, issuer }) => {
  return (
    <div className="data-field">
      <div className="on-line">
        <div className="left-line">
          <p>
            <strong>Field</strong>
          </p>
        </div>
        <div className="right-line">
          <p>{field}</p>
        </div>
      </div>
      <div className="on-line">
        <div className="left-line">
          <p>
            <strong>Value</strong>
          </p>
        </div>
        <div className="right-line">
          <p>{value}</p>
        </div>
      </div>
      <div className="on-line">
        <div className="left-line">
          <p>
            <strong>Issuer</strong>
          </p>
        </div>
        <div className="right-line">
          <p>{issuer}</p>
        </div>
      </div>
    </div>
  );
};

export default ClaimDataSection;