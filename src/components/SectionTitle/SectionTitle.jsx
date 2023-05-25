import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-3/12 mx-auto text-center mb-8 mt-16">
      <p className="text-yellow-600 mb-2">---{subHeading}---</p>
      <h2 className="text-4xl uppercase border-y-4 py-4">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
