import React from 'react';

const Card = ({ post }) => {
    return (
        <li className="card">
            <img
                src={post.imageUrl}
                alt=""
            />
            <div className="infos">
                <p>{post.message}</p>
            </div>
                
        </li>
    );
};

export default Card;
