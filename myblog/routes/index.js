var express = require('express');
//var mysql =require('mysql');
var user =require('../controllers/user')
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', {title: 'Express' });
//});
router.get('/login', user.login);
router.get('/regist', user.regist);
router.get('/reg', user.reg);
//router.get('/regist', function(req, res, next) {
//    var uname=req.query.name;
//    var pwd=req.query.pwd;
//    var pwd2=req.query.pwd2;
//
//    var connection = mysql.createConnection({
//        host     : 'localhost',
//        user     : 'root',
//        password : '',
//        database : 'myblog'
//    });
//
//    connection.connect();
//
//    var sql=`insert into t_user(username,password) values('
//        ${uname}','${pwd}') `;
//    connection.query(sql,function(error,results){
//        if(error) throw error;
//        res.send(results);
//        connection.end();
//    });
//
//    //if(pwd !=pwd2){
//    //    res.send('pwd-error');
//    //}else{
//    //    res.send('success');
//    //}
//});
//router.post('/login', function(req, res, next) {
// var uname=req.body.uname;
// var pwd=req.body.pwd;
//if(uname=='lisi'&&pwd=='1234'){
//       res.render('index',{
//       name:uname
//  });
//}
//});

module.exports = router;
