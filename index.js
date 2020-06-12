const express = require('express')
const app = express();
const cors = require('cors')
const axios = require('axios').default

app.use(cors())

// get summary reports
app.get('/summary', (request, reply, next) => {
    let URI = "https://api.covid19api.com/summary"
    callingService(URI)
    .then(data => {
        console.log(data)
        reply.send({ status: 200, data: data.data})
    })
    .catch(error => {
        console.log(data)
        reply.send({status: 500, data: {}})
    })

})

// get version of the api
app.get('/version', (request, reply, next) => {
    let URI = "https://api.covid19api.com/version"
    callingService(URI)
    .then(data => {
        console.log(data)
        reply.send({ status: 200, version: data.data})
    })
    .catch(error => {
        console.log(data)
        reply.send({status: 500, version: {}})
    })

})

callingService = (URI) => {
    return new Promise((resolve, reject) => {
        axios.get(URI)
            .then(response => {
                console.log(response)
                resolve(response)
            })
            .catch(error => {
                console.log(error)
                reject(error)
            })
    })
}

app.listen(3000, () => {
    console.log("CORS-enable web server listen on port 3000");
})