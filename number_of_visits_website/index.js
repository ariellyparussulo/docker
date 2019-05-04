const express = require('express')
const redis = require('redis')

const app = express()

const client = redis.createClient({
    host: 'redis-server',
    port: 6379
})

const REDIS_VISITS = 'visits'

function getVisits(res) {
    client.get(REDIS_VISITS, (err, visits) => {
        if (err) {
            res.send('Oops...something happened. ')
            return
        }

        res.send(`Number of visits is ${visits}`)
        updateeNumberOfVisits(visits)
    })
}

function updateeNumberOfVisits(visits) {
    client.set(REDIS_VISITS, parseInt(visits) + 1)
}

client.get(REDIS_VISITS, (err, visits) => {
    if(!visits) {
        client.set(REDIS_VISITS, 0)
    }
})

app.get('/', (req, res) => {
    getVisits(res)
})

app.listen(8081, () => {
    console.log('Running application in 8081 port...')    
})