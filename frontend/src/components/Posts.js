import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Post = () => {  
  const [data, setData] = useState([]);
    useEffect(() => {
        getPost()        
    }, []);
    const getPost = async () => {
            try {
               const token =  localStorage.getItem('token');
                localStorage.getItem('Id');
                console.log(token);
                const config = {
                    method: 'get',
                    url: 'http://localhost:3000/api/posts/',
                    headers: {
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmNiZWExZDc5ODE3ZmJlYjgxNjhhMjMiLCJpYXQiOjE2NTc1NjY1NzIsImV4cCI6MTY1NzY1Mjk3Mn0.uNtk_w-etrpsdzgbI8kajzbPDYf1A6AoybVBM9avjXY'
                    }
                };
                const res = await axios(config);
                console.log(res.data);
                setData(res.data);
            } catch (error) {
                console.log("contenu erreur", error);
                alert(
                    `Vous n'avez pas accès a cette page, veuillez vous connecter.`
                );
                window.location = '/';
            }
        };
    return (
        <div>
            <div>mes posts</div>
            <div>
                {data.map((post, index) => (
                    <Card key={index} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Post;

/*<div>
                {data.map((post, index) => (
                       <Card key={index} post={post} />
                    ))}
            </div>*/