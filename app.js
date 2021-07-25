const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const bodyParser = require('body-parser')

require('dotenv').config();

const storageFolder = path.join(require('os').homedir(), '/Whatsapp-clone');

var chats = require('./routes/chats.js');
var contacts = require('./routes/contacts.js');
var groups = require('./routes/groups.js');
var media = require('./routes/media.js');
var members = require('./routes/members.js');
var messages = require('./routes/messages.js');
var profilePic = require('./routes/profilePic.js');

app.use(express.json());
app.use(bodyParser.json());
app.use('/chats', chats)
app.use('/contacts', contacts)
app.use('/groups', groups)
app.use('/media', media)
app.use('/members', members)
app.use('/messages', messages)
app.use('/profilePic', profilePic)

var fs = require('fs-extra');
var content = '';

app.get('/', (req, res) => {
	try{
		if(!fs.existsSync(storageFolder)){
			try{
				fs.mkdirSync(storageFolder);
				fs.mkdirSync(path.join(storageFolder, '/Groups'));
				fs.mkdirSync(path.join(storageFolder, '/Chats'));
				fs.mkdirSync(path.join(storageFolder, '/ProfilePictures'));
				fs.writeFileSync(path.join(storageFolder, '/Contacts.txt'), '[]');
				res.sendStatus(200);
			}catch(err){
				res.sendStatus(300);
				console.error(err);
			}
		}
	}catch(err){
		res.sendStatus(400);
		console.error(err);
	}
})

var PORT = process.env.port || 9000;
server.listen(PORT, () => {
	console.log('Server listening at port', PORT);
})