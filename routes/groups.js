const express = require('express')
const router = express.Router()
const path = require('path')
const {v4: uuidv4} = require('uuid');
const fs = require('fs-extra');

/*
Group{
	id: uuid,
	name: string
	messages: [messageSchema]
	members: [userSchema]
}
*/

const storageFolder = path.join(require('os').homedir(), '/Whatsapp-clone');
const groupFolder = path.join(storageFolder, '/Groups');

router.put('/', (req, res) => {
	var groupId = uuidv4();
	var groupInfo = {
		"id": groupId,
		"name": req.body.name,
		"messages": [],
		"members": []
	}
	try{
		fs.writeFileSync(path.join(groupFolder, '/'+req.body.name+'.txt'), JSON.stringify(groupInfo));
		res.sendStatus(200);	
	}catch(err){
		res.sendStatus(400);
		console.error(err);
	}
})

router.patch('/:groupName', (req, res) => {
	try{
		fs.writeFileSync(path.join(groupFolder, '/'+req.params.groupName+'.txt'), JSON.stringify(req.body));
		res.sendStatus(200);	
	}catch(err){
		res.sendStatus(400);
		console.error(err);
	}
})

router.get('/:groupName', (req, res) => {
	try{
		var file = path.join(groupFolder, '/', req.params.groupName+'.txt');
		if(fs.existsSync(file)){
			try{
				var data = JSON.parse(fs.readFileSync(file, 'utf8'));
				res.status(200).json(data);
			}catch(err){
				console.error(err);
				res.sendStatus(400);
			}
		}else{
			console.error('No such group found');
			res.sendStatus(300);
		}
	}catch(err){
		console.error(err);
		res.sendStatus(400);
	}
})

router.delete('/:groupName', (req, res) => {
	try{
		var file = path.join(groupFolder, '/', req.params.groupName+'.txt');
		if(fs.existsSync(file)){
			try{
				fs.remove(file);
				res.sendStatus(200);
			}catch(err){
				console.error(err);
				res.sendStatus(300);
			}
		}else{
			console.error('No such group found');
			res.sendStatus(300);
		}
	}catch(err){
		console.error(err);
		res.sendStatus(400);
	}
})

module.exports = router;