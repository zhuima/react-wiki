import React from "react";

const FilterBTN = ({ input, task, updatePageNumber, index, name }) => {
  return (
    <div>
      <style jsx="true">
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input x"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            task(input);
            updatePageNumber(1);
          }}
          className="btn btn-outline-primary"
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
