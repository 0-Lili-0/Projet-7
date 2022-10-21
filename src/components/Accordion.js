import React, { useState } from 'react';

const Accordion = (props) => {

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="container">
      <details>
        <summary onClick={toggle}>
          {props.label}
          {!open ? (<i className="fas fa-chevron-up"></i>) : (<i className="fas fa-chevron-down"></i>)}
        </summary>
        <div className="content">
          <span>{props.children}</span>
        </div>
      </details>
    </div>
  );
};

export default Accordion;