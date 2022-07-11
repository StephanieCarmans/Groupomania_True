var axios = require('axios');

var config = {
    method: 'get',
    url: 'http://localhost:3000/api/posts/',
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmNiZWExZDc5ODE3ZmJlYjgxNjhhMjMiLCJpYXQiOjE2NTc1NjY1NzIsImV4cCI6MTY1NzY1Mjk3Mn0.uNtk_w-etrpsdzgbI8kajzbPDYf1A6AoybVBM9avjXY',
    },
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
