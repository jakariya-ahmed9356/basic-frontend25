import React from 'react';
import PropTypes from 'prop-types';

export default function Card(
    {img,title,desc,children,actions,className}
) {
    return (
        <div className={`bg-white shadow-md rounded-2xl overflow-hidden ${className}`}>
            {img && (
                <img src={img} alt={title} 
                    className="w-full -h-48 object-cover"
                />
            )}

            <div className="p-4">
                {title && <h2 className="text-center font-bold mb-2">{title}</h2>}
                {desc && <p className="text-gray-600 mb-4">{desc}</p>}
                {children} 
                {actions && (
                    <div className="mt-4 flex justify-center"> 
                        {actions}
                    </div>
                )}
            </div>

        </div>
    
    );
}



Card.PropTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    children: PropTypes.node,
    actions: PropTypes.node,
    className: PropTypes.string
}













