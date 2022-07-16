import React, { useState } from 'react';
import { BiHeart } from 'react-icons/bi';
import { BsHeartFill } from 'react-icons/bs';

const Liked = () => {
    //appel du bouton like/inlike avec unlike par défaut
    const [isliked, setIsLiked] = useState(false);

    return (
        <div>
            {isliked ? (
                <button className="plenty">{BiHeart}</button>
            ) : (
                <button className="empty" onClick={() => setIsLiked(true)}>
                    {BsHeartFill}
                </button>
            )}
        </div>
    );
};

export default Liked;
