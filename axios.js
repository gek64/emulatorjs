const axios = require('axios')

let getURL = function (url) {
    axios.get(url)
        .then((res) => {
            console.log('succeeded!')
            console.log(res.data)
            console.log(res.headers)
        })
        .catch((err) => {
            console.log('error!')
            console.log(err)
        })
}

module.exports = {
    getURL
}