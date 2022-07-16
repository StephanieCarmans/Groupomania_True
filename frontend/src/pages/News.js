import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import fs from 'fs';

import Logo from '../components/header/Logo';
import Logout from '../components/log/LogOut';
import Footer from '../components/footer/Footer';
import Card from '../components/Card';
import { BiUpload } from 'react-icons/bi';

var FormData = require('form-data');

const News = () => {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null);
    const [file, setFile] = useState('');
    useEffect(() => {
        getPost();
    }, []);

    //recup tous les posts
    const getPost = async () => {
        try {
            const token = localStorage.getItem('token');
            localStorage.getItem('Id');
            console.log(token);
            const config = {
                method: 'get',
                url: 'http://localhost:3000/api/posts/',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios(config);
            console.log(res.data);
            setData(res.data);
        } catch (error) {
            console.log('contenu erreur', error);
            alert(
                `Vous n'avez pas accès a cette page, veuillez vous connecter.`
            );
            window.location = '/';
        }
    };
    //fin recup tous les posts

    //envoi d'un post
    const handlePicture = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    };

    const handlePost = async (e) => {
        e.preventDefault();
        if (message || image) {
            const data = new FormData();
            data.append('message', e.target['message'].value);
            data.append('image', file, file.name);
            console.log('event', e);
            console.log('targetIMage', e.target['file-upload'].value);
            console.log('targetMessage', e.target['message'].value);
            console.log(message);
            console.log(image);
            console.log(file);
            data.append('file', file, file.name);
            if (image) {
                data.append('file', file, file.name);
                console.log('je suis dans le if');
            }
            console.log(image);

            const token = localStorage.getItem('token');
            localStorage.getItem('Id');
            console.log(token);

            const config = {
                method: 'post',
                url: 'http://localhost:3000/api/posts/',
                data,
                headers: {
                    Authorization: `Bearer ${token}`,
                    //'Content-Type': 'multipart/form-data'
                },
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.post));
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            alert('veuillez entrer un message');
        }
    };

    const cancelPost = () => {
        setMessage('');
        setImage('');
        setFile('');
    };
    //fin envoi d'un post

    return (
        <div className="postContainer">
            <>
                <div>
                    <Logo />
                </div>
                <div className="nav-item">
                    <Logout />
                </div>
            </>
            <div>
                <form action="" onSubmit={handlePost} id="addPost">
                    <div className="newpost">
                        <div className="card-header">
                            <div className="pseudo"></div>
                        </div>
                        <div>
                            <div className="textContent">
                                <textarea
                                    className="textarea"
                                    name="message"
                                    id="message"
                                    placeholder="Quoi de neuf?"
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                />
                            </div>
                            <img className="imageContent" src={image} alt="" />
                        </div>
                        <div className="footer-form">
                            <label htmlFor="file" className="icon">
                                <BiUpload className="img" />
                                <input
                                    type="file"
                                    className="input-file"
                                    id="file-upload"
                                    accept=".jpg, .jpeg, .png"
                                    onChange={(e) => handlePicture(e)}
                                />
                            </label>

                            <>
                                {message || image ? (
                                    <button
                                        className="btn-effect"
                                        onClick={cancelPost}
                                    >
                                        Annuler
                                    </button>
                                ) : null}

                                <input
                                    className="btn-effect"
                                    type="submit"
                                    value="Envoyer"
                                />
                            </>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <h3 className="postTitle">Publications récentes</h3>
                <div className="post-reverse">
                    <div>
                        {data
                            .sort(
                                (a, b) =>
                                    new Date(b.createdAt) -
                                    new Date(a.createdAt)
                            )
                            .map((post, index) => (
                                <Card key={index} post={post} />
                            ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default News;
