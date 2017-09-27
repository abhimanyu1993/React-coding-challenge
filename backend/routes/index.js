var express = require('express');
var router = express.Router();
const low = require('lowdb')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/save-info", function(req, res, next){
	const body = req.body;
	const FileSync = require('lowdb/adapters/FileSync')
	const adapter = new FileSync('dbfile.json')
	const db = low(adapter);
	// res.end();
	
	// Set a user using Lodash shorthand syntax
	if(body !== undefined && db.set(body.key, body.value).write()) {
		res.json({
			success: true,
			message: "Save successfully"
		});
	} else {
		res.json({
			success: false,
			message: "Failed saving"
		});
	}


});


router.get("/read-settings", function(req, res){
	const FileSync = require('lowdb/adapters/FileSync')

	const adapter = new FileSync('dbfile.json')
	const db = low(adapter);
	const name = db.get("name");
	const address = db.get("street_address");
	const address = db.get("address");
	const team = db.get("team");

	return res.send({
		name: name,
		street_address: street_address,
		address: address,
		team: team
	});

});

router.get("/setup", function(){
	const FileSync = require('lowdb/adapters/FileSync')
	const adapter = new FileSync('dbfile.json')
	const db = low(adapter);
	db.defaults({ name: '', street_address: '', address: '', team: {} }).write();

})

module.exports = router;
