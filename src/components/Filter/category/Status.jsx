import React from 'react'
import FilterBTN from '../FilterBTN'

// eslint-disable-next-line react/prop-types
const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ['Alive', 'Dead', 'Unknown']
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((item, index) => {
            return (
              <FilterBTN
                key={index}
                input={item}
                name="status"
                task={updateStatus}
                updatePageNumber={updatePageNumber}
                index={index}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Status
