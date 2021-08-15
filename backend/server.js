const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const channel_model = require("./models/channel");


mongoose.connect(
  'mongodb://localhost/chatapp',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log('connected to the database')
  }
)

const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
})

const router = require("./route/index");


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//FIXED IT 
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    
    socket.on('message', async (msg) => {
        console.log(msg)
        let result = await channel_model.findOneAndUpdate(
          { _id: msg.channelID },
          { $push: { messages: msg } }
        )
        console.log(result)
        io.emit('broadcast', msg);
    });
});

app.use("/", router)
  

server.listen(8000, () => {
  console.log('listening on *:8000');
});
