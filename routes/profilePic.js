const express = require('express')
const router = express.Router()
const path = require('path')
const  fs = require('fs-extra')

const storageFolder = path.join(require('os').homedir(), '/Whatsapp-clone');
const profilePicFolder = path.join(storageFolder, '/ProfilePictures');

//Writing:
// const content = 'Some content!'
// try {
//   const data = fs.writeFileSync('/Users/joe/test.txt', content)
//   //file written successfully
// } catch (err) {
//   console.error(err)
// }

//Reading:
// fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })

router.get('/:userId', (req, res) => {
	var file = path.join(path.join(profilePicFolder, req.params.userId + '.txt'));
	try{
		if(fs.readFileSync(file)){
			try{
				var data = fs.readFileSync(file, 'utf8');
				res.status(200).send(data);
			}catch(err){
				res.sendStatus(400);
				console.error(err);
			}
		}else{
			res.sendStatus(300);
			console.error('File not found');
		}
	}catch(err){
		res.sendStatus(300);
		console.error(err);
	}
})
router.put('/:userId', (req, res) => {
	var file = path.join(path.join(profilePicFolder, req.params.userId + '.txt'));
	try{
		var data = req.body.imageUrl; 
		try{
			fs.writeFileSync(file, data);
		}catch(err){
			console.error(err);
			res.sendStatus(300);
		}
		res.sendStatus(200);

	}catch(err){
		res.sendStatus(400);
		console.error(err);
	}
})

module.exports = router;