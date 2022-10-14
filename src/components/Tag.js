import React from 'react';

const Tag = (props) => {
    return (
        <div className='tag'>
            <p className='tag-text'>{props.label}</p>  
        </div>
    );
};

export default Tag;