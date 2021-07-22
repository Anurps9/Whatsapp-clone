const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);

require('dotenv').config();

const storageFolder = path.join(require('os').homedir(), '/Whatsapp-clone');
const chatsFolder = path.join(storageFolder, '/chats')

var chats = require('./routes/chats.js');
var contacts = require('./routes/contacts.js');
var groups = require('./routes/groups.js');
var media = require('./routes/media.js');
var members = require('./routes/members.js');
var messages = require('./routes/messages.js');
var profilePic = require('./routes/profilePic.js');

app.use(express.json());
app.use('/chats', chats)
app.use('/contacts', contacts)
app.use('/groups', groups)
app.use('/media', media)
app.use('/members', members)
app.use('/messages', messages)
app.use('/profilePic', profilePic)

var fs = require('fs');
var content = '';
// for(let i=0; i<100; ++i) content += 'Hello world';

// fs.writeFile('123.txt', '', err => {
// 	if(err){
// 		console.log(err);
// 	}
// })
// try{
// 	fs.writeFileSync('123.txt', content, {flag: 'a'});
// }catch(err){
// 	console.log(err);
// }

// console.log(fs.existsSync(homedir));

// fs.readFile('123.txt', 'utf8', (err, data) => {
// 	const stream = fs.createReadStream('123.txt');
// 	stream.pipe(res);
// })
app.get('/', (req, res) => {
	res.send('Hello from server');
})

var PORT = process.env.port || 9000;
server.listen(PORT, () => {
	console.log('Server listening at port', PORT);
})