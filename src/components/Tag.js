import React from 'react';

const Tag = ({tags}) => {
    return (
        <div className='tag'>
            
            {
                tags.map((tag) => {
                    return (
                        <p className='tag-text' key={`${tag}`}>{ tag }</p>
                    )
                })
            }
              
        </div>
    );
};

export default Tag;