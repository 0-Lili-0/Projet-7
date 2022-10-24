import React from 'react';

const Tag = ({ tags }) => {
    
    return (
        <div className='tag'>
            {
              tags.map((tag) => {
                return (
                  <span className='tag-text' key={`${tag}`}>{tag}</span>
                  )
                })
            }
        </div>
    );
};

export default Tag;
