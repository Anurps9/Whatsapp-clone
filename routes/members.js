const express = require('express')
const router = express.Router()
const axios = require('axios')

const {BASE_URL} = require('../utils/base-url');

router.get('/:groupName', async (req, res) => {
	try{
		const groupData = await axios.get(BASE_URL + '/groups/' + req.params.groupName);
		res.status(200).json(groupData.data.members);
	}catch(err){
		console.error(err);
		res.sendStatus(300)
	}
})

router.delete('/:groupName/:memberId', (req, res) => {
	try{
		axios.get(BASE_URL + '/groups/' +  req.params.groupName)
			.then((response) => {
				var newMembers = [];
				console.log(response.data.members);
				response.data.members.forEach((member) => {
					if(member.id.localeCompare(req.params.memberId) !== 0){
						newMembers.push(member);
					}
				})
				response.data.members = newMembers;
				axios.patch(BASE_URL + '/groups/' + req.params.groupName, response.data)
					.then(response => {res.sendStatus(200);})
					.catch(err => {})
			})
			.catch(err => {
				console.error(err);
				res.sendStatus(300);
			})
	}catch(err){
		console.error(err);
	}
})

router.put('/:groupName', (req, res) => {
	try{
		axios.get(BASE_URL + '/groups/' + req.params.groupName)
			.then((response) => {
				response.data.members.push(req.body);
				axios.patch(BASE_URL + '/groups/' + req.params.groupName, response.data)
					.then(response => {res.status(200).send(req.body);})
					.catch(err => {})
			})
			.catch((err) => {
				res.sendStatus(300)
				console.log(err);
			})
	}catch(err){
		console.log(err);
		res.sendStatus(300);
	}
})

module.exports = router;