import React, { useState } from 'react';
import axios from 'axios';
import LikeButton from './LikeButton';

const Card = ({ post }) => {
    //pour modifier les cards
    const [isEditing, setIsEditing] = useState(false);
    const [editMessage, setEditMessage] = useState('');

    //pour formater les dates
    const dateFormater = (createdAt) => {
        let newDate = new Date(createdAt).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });
        return newDate;
    };

    //appel formulaire modification
    const handleEdit = () => {
        const data = {
            userId: post.userId,
            message: editMessage ? editMessage : postMessage,
            date: post.createdAt,
            updatedCreatedAt: Date.now(),
        };

        const token = localStorage.getItem('token');
        localStorage.getItem('Id');
        console.log(token);

        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);
        myHeaders.append('Content-Type', 'multipart/form-data');
        console.log(myHeaders);

        axios
            .put(`http://localhost:3000/posts/${post.id}`, data, myHeaders)
            .then(() => {
                setIsEditing(false);
            });
    };
    //appel formulaire suppression
    /*  const handleDelete = (e) => {
        axios.delete(`http://localhost:3000/posts/${post.id}`);
        window.location.reload();
    };*/

    return (
        <div className="card-container">
            <div className="card-header">
                <p>{post.userId}</p>
                <em className="post__date">
                    Posté le {dateFormater(post.createdAt)}
                </em>
            </div>
            <img className="img-post" src={post.imageUrl} alt="" />
            <div className="infos">
                {isEditing ? (
                    <textarea
                        defaultValue={editMessage ? editMessage : post.message}
                        autoFocus
                        onChange={(e) => setEditMessage(e.target.value)}
                    ></textarea>
                ) : (
                    <p className="card-message">
                        {editMessage ? editMessage : post.message}
                    </p>
                )}
            </div>
            <div className="card-footer">
                <div className="card-edit">
                    {isEditing ? (
                        <button
                            className="btn-effect"
                            onClick={() => handleEdit()}
                        >
                            Valider
                        </button>
                    ) : (
                        <button
                            className="btn-effect"
                            onClick={() => setIsEditing(true)}
                        >
                            Modifier
                        </button>
                    )}
                    <button
                        className="btn-effect"
                        onClick={() => {
                            if (
                                window.confirm(
                                    'Voulez-vous vraiment supprimer cet article ?'
                                )
                            ) {
                                //      handleDelete(post);
                            }
                        }}
                    >
                        Suprpimer
                    </button>
                </div>

                <>
                    <LikeButton />
                </>
            </div>
        </div>
    );
};

export default Card;
