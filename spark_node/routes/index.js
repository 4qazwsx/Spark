var express = require('express');
var router = express.Router();
var exec = require("child_process").exec;
var multer = require('multer')
var fs = require('fs')


const SparkPolicy = require('../policies/SparkPolicy')
const UserPolicy = require('../policies/UserPolicy')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('user', { title: 'Express'});  
	//res.render('index1', { title: 'Express'});  
});

router.post('/sparkSubmit', SparkPolicy.sparkSubmit )
router.post('/makeList', UserPolicy.makeList )

router.get('/spark',SparkPolicy.command)
//router.get('/yarnAll', SparkPolicy.AllYarnStates)
router.get('/yarnAllState', SparkPolicy.AllYarnStates)
router.get('/appState', SparkPolicy.appState)

router.get('/appHelp',SparkPolicy.appHelp)
//router.post('/upload',SparkPolicy.upload)
router.post('/dataUpload',UserPolicy.dataUpload)
router.post('/dataDelete',UserPolicy.dataDelete)
router.post('/makeParamaterBlank',UserPolicy.makeParamaterBlank)

module.exports = router;
