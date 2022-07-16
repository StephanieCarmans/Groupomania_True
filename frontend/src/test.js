var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append(
    'post',
    '{ "userId": "62cd7c7097e08b70603f5d9d",\n"pseudo":"user1",\n "message": "un bon massage",\n "imageUrl": ""\n}'
);
data.append(
    'image',
    fs.createReadStream(
        '/C:/Users/steph/OneDrive/Bureau/banque images/massage-gdd57b6fc2_640.jpg'
    )
);

var config = {
    method: 'post',
    url: 'http://localhost:3000/api/posts/',
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmNkN2M3MDk3ZTA4YjcwNjAzZjVkOWQiLCJpYXQiOjE2NTc2MzM5MjEsImV4cCI6MTY1NzcyMDMyMX0.N6R3KXObB6NZLBjcAECDATm696TjFRJesqGCX98F8HY',
        ...data.getHeaders(),
    },
    data: data,
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
