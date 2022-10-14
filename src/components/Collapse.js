import React, { useState } from 'react';

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClickHandler = () => {
        setIsOpen(isOpen => !isOpen)
    }

    return (
        <div className='collapse'>
            <div className="title">
                <div className="name">
                    {props.label}
                </div>
                <button className='toggle' onClick={onClickHandler}> 
                    {!isOpen ? (<i class="fas fa-chevron-down"></i>)
                    : ( <i class="fas fa-chevron-up"></i>)}
                </button>
            </div>
            <div className={!isOpen ? "content" : "content-show"}>{ props.children }</div>
        </div>
    );
};

export default Collapse;