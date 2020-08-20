let mock = require('./index')

let gender = [
    {
        'gender': 'female',
        'count|1-1000': 1
    },
    {
        'gender': 'male',
        'count|1-1000': 1
    }]

let edu = [
    {
        'education': '学士',
        'count|1-1000': 1
    },
    {
        'education': '硕士',
        'count|1-1000': 1
    },
    {
        'education': '博士',
        'count|1-1000': 1
    }
]
mock.setServer('/mock/gender', gender)

mock.setServer('/mock/edu', edu)

mock.startServer(5000)