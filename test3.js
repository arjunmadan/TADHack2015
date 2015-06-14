var zip=require('adm-zip');
var dataBuffer = new Buffer("hello,this is test data",'utf-8');
var zipper = new zip();
zipper.addFile('test.txt',dataBuffer);
	
zipper.addLocalFile('/home/arjun/node/test.txt','/home/arjun/node/test.zip');