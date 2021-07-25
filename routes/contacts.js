const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs-extra')
const axios = require('axios')
const {BASE_URL} = require('../utils/base-url');

/*
Contact:
	Id
	Name
	ProfilePhoto
	Chats
	Contacts
	Groups
*/

const storageFolder = path.join(require('os').homedir(), '/Whatsapp-clone');
const contactFile = path.join(storageFolder, '/Contacts.txt');

router.get('/', (req, res) => {
	try{
		var data = fs.readFileSync(contactFile, 'utf8');
		res.status(200).json(JSON.parse(data));
	}catch(err){
		res.sendStatus(300);
		console.error(err);
	}
})

router.get('/:contactId', (req, res) => {
	axios.get(BASE_URL + '/contacts')
		.then((response) => {
			var matchingContact = null;
			response.data.forEach((contact) => {
				if(contact.id.localeCompare(req.params.contactId) === 0){
					matchingContact = contact;
				}
			})
			res.status(200).json(matchingContact);
		})
		.catch((err) => {
			res.sendStatus(300);
			console.error(err);
		})
})

router.post('/', (req, res) => {
	try{
		axios.get(BASE_URL + '/contacts')
			.then((response) => {
				response.data.push(req.body);
				fs.writeFileSync(contactFile, JSON.stringify(response.data));
				res.status(200).json(req.body);
			})
			.catch(err => {
				res.sendStatus(300);
				console.error(err);
			})
	}catch(err){
		res.sendStatus(300);
		console.error(err);
	}
})

router.delete('/:contactId', (req, res) => {
	try{
		axios.get(BASE_URL + '/contacts')
			.then((response) => {
				var newContacts = [];
				response.data.forEach((contact) => {
					if(contact.id.localeCompare(req.params.contactId) !== 0){
						newContacts.push(contact);
					}
				})
				fs.writeFileSync(contactFile, JSON.stringify(newContacts));
				res.status(200).json(newContacts);
			})
			.catch(err => {
				res.sendStatus(300);
				console.error(err);
			})
	}catch(err){
		res.sendStatus(300);
		console.error(err);
	}
})

module.exports = router;