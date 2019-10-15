var mongoose = require('mongoose');  //import mongoose 

 mongoose.connect('mongodb://localhost/TestApp',{ useNewUrlParser:true })

 mongoose.connection.on('connected', function (){
	console.log('การเชื่อมต่อกับฐานข้อมูล MongoDB เปิดเรียบร้อย !');
});

 mongoose.connection.on('error' , function (err){
	console.log('เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล' + err);
});

 mongoose.connection.on('disconnection' ,function(){
	console.log('ไม่มีการเชื่อมต่อกับฐานยข้อมูล');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('ปิดการเชื่อมต่อกับฐานข้อมูล');
        process.exit(0);
    });
});