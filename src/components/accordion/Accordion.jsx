import React, { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleClick = (dataId) => {
    // console.log(dataId);
    setSelected(dataId === selected ? null : dataId);
  };

  const handleMulti = (dataId) => {
    let prevSelected = [...multiple]

    const findIndexOfCurrentId = prevSelected.indexOf(dataId)

    if (findIndexOfCurrentId === -1) prevSelected.push(dataId)
    else prevSelected.splice(findIndexOfCurrentId, 1)

    setMultiple(prevSelected)
    
  };

  const handleTitleClick = (dataId) => {
    if (enableMultiSelection){
        handleMulti(dataId)
    }
    else{
        handleClick(dataId)
    }
  }

  

  return (
    <div className="wrapper">
      <div className="multi-toggle">
        <button
          className="multi-btn"
          onClick={()=>setEnableMultiSelection(!enableMultiSelection)}
        >
          {enableMultiSelection? "Disable Multi Selection" : "Enable Multi Selection"}
        </button>
      </div>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="display-title"
                onClick={()=>handleTitleClick(dataItem.id)}
              >
                <h3 className="question">{dataItem.question}</h3>
                <span className="plus">+</span>
              </div>

              {
                enableMultiSelection ? 
                multiple.indexOf(dataItem.id)!==-1 && (
                    <div className="content">{dataItem.answer}</div>
                ):
                selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                )
            }
                
            
            </div>
          ))
        ) : (
          <div>No data found! </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
