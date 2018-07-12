const express = require('express')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server)


app.use(express.static(__dirname+'/public'))

io.on('connection',socket=>{ 
    socket.on('video-offer',data=>{
        socket.broadcast.emit('video-offer',data)
    })
    socket.on('video-answer',data=>{
        socket.broadcast.emit('video-answer',data)
    })
    socket.on('new-ice-candidate',data=>{
        socket.broadcast.emit('new-ice-candidate',data)
    })
})


server.listen(9600 , ()=> console.log('listening on port 9600'))