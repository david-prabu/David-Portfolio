import React from "react";

const Credits = (props) => {
  return (
    <div data-section id="credits" className="group mt-32">
      <div className="text-surface-600">
        
        <div className="flex flex-row justify-center">
         
          <span>{props.data.name} | 2025</span>
        </div>
      </div>
    </div>
  );
};

export default Credits;
