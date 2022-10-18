import React, { useState } from 'react';

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClickHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={'collapse'}>
            <div className="collapseTitle">
                <div className="name">
                    {props.label}
                </div>
                <button className='toggle' onClick={onClickHandler}> 
                    {!isOpen ? (<i className="fas fa-chevron-down"></i>)
                        : (<i className="fas fa-chevron-up"></i>)}
                </button>  
            </div>
            <div className={!isOpen ? "content" : "content-show"}>
                {props.children}
            </div>
        </div>
    );
};

export default Collapse;