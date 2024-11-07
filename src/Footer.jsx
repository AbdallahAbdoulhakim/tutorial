import React from "react";

const Footer = ({ length }) => {
  return (
    <div className="bg-blue-700 h-15 px-10 py-3 flex flex-col items-center justify-center">
      <p className="text-lg  text-slate-50">
        {length} list Item{length === 1 ? "" : "s"}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  length: 0,
};

export default Footer;
